import { access, mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");
const cwvDir = path.join(publicDir, "ars-assets", "cwv");

const heroSources = [
  ["about", "ars-assets/about/ARS-group-hero-banner.jpg"],
  ["careers", "ars-assets/about/ARS-Vision-Misson_hero.jpg"],
  ["dealer-distributor", "ars-assets/Solutions/Dealers/DealersHeroBanner.jpg"],
  ["distributor-enquiry", "ars-assets/home/Distributors.jpg"],
  ["green-steel", "ars-assets/Sustainability/WhatisGreenSteel_Banner.jpg"],
  ["ars-green-steel", "ars-assets/Sustainability/ARSGreenSteel-heroBanner.jpg"],
  ["our-quality", "ars-assets/about/Qualitypolicy_hero-banner.jpg"],
  ["our-team", "ars-assets/about/ARS-leadership-banner.jpg"],
  ["product-550d", "ars-assets/products/ARS550DBanner.jpg"],
  ["product-crs-550d", "ars-assets/products/ArsCRS550D.jpg"],
  ["rod-8mm", "ars-assets/Sizes/8mm_Banner.jpg"],
  ["rod-10mm", "ars-assets/Sizes/10mm_Banner.jpg"],
  ["rod-12mm", "ars-assets/Sizes/12mm-banner.png"],
  ["rod-16mm", "ars-assets/Sizes/16mm_Banner.jpg"],
  ["rod-20mm", "ars-assets/Sizes/20mm_Banner.jpg"],
  ["rod-25mm", "ars-assets/Sizes/25mm_Banner.jpg"],
  ["rod-32mm", "ars-assets/Sizes/32mm_Banner.jpg"],
];

function publicPath(relativePath) {
  return path.join(publicDir, relativePath.replace(/^\//, ""));
}

function routeFileName(finalUrl) {
  const pathname = new URL(finalUrl).pathname;
  return pathname.split("/").filter(Boolean).at(-1)?.replace(/\.html$/, "") ?? "article";
}

async function writeVariant(source, destination, width, quality) {
  await mkdir(path.dirname(destination), { recursive: true });
  await sharp(source)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toFile(destination);
}

async function generateHeroVariants() {
  for (const [name, relativeSource] of heroSources) {
    const source = publicPath(relativeSource);
    await access(source);
    await writeVariant(source, path.join(cwvDir, "heroes", `${name}-mobile.webp`), 768, 68);
    await writeVariant(source, path.join(cwvDir, "heroes", `${name}-desktop.webp`), 1600, 76);
  }
}

async function generateBlogVariants() {
  const registryPath = path.join(root, "src", "data", "blog-migration-registry.json");
  const registry = JSON.parse(await readFile(registryPath, "utf8"));
  const destinations = new Set();

  for (const entry of registry) {
    const imageUrl = entry.featuredImage?.url;
    if (!entry.finalUrl || !imageUrl?.startsWith("/")) continue;

    const name = routeFileName(entry.finalUrl);
    const destination = path.join(cwvDir, "blog", `${name}-mobile.webp`);
    if (destinations.has(destination)) continue;

    const source = publicPath(imageUrl);
    await access(source);

    await writeVariant(source, destination, 768, 68);
    destinations.add(destination);
  }

  return destinations.size;
}

const [, blogVariantCount] = await Promise.all([generateHeroVariants(), generateBlogVariants()]);
console.log(`Generated ${heroSources.length * 2} hero variants and ${blogVariantCount} blog variants.`);
