import { access, mkdir, readFile, readdir } from "node:fs/promises";
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

const homepageContentSources = [
  ["ars_home", "ars-assets/home/ars_home.jpg"],
  ["home-owners", "ars-assets/home/home-owners.jpg"],
  ["engineers-architects", "ars-assets/home/engineers-architects.jpg"],
  ["contractors", "ars-assets/home/Contractors.jpg"],
  ["distributors", "ars-assets/home/Distributors.jpg"],
];

const homepageContentWidths = [480, 960];

const homepageBlogSources = [
  {
    name: "crs-steel",
    source: "ars-assets/blog-banners/everything-you-need-to-know-about-corrosion-resistance-steel/corrosion-resistance-steel.jpeg",
    widths: [360, 720, 1080],
  },
  {
    name: "green-steel-production",
    source: "ars-assets/original-green-steel/what-is-green-steel.png",
    widths: [360, 487],
  },
  {
    name: "tmt-bars-vs-hysd",
    source: "ars-assets/blog-banners/all-you-need-to-know-about-hysd-bars/quality-tmt-bar-3.webp",
    widths: [360, 720, 1000],
  },
  {
    name: "house-construction-cost",
    source: "ars-assets/blog-banners/average-house-construction-cost-in-india-per-square-feet/WhatsApp-Image-2024-12-02-at-12.34.42-PM.jpeg",
    widths: [360, 720, 1080],
  },
];

const homepageBlogVariantCount = homepageBlogSources.reduce((count, image) => count + image.widths.length * 2, 0);
const homepageGreenSteelWidths = [768, 1600];
const clientLogoSourceDir = path.join(publicDir, "ars-assets", "clients");

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

async function writeHomepageContentVariant(source, destination, width, format) {
  await mkdir(path.dirname(destination), { recursive: true });

  const pipeline = sharp(source)
    .rotate()
    .resize({ width, withoutEnlargement: true });

  if (format === "avif") {
    await pipeline.avif({ quality: 48, effort: 5 }).toFile(destination);
    return;
  }

  await pipeline.webp({ quality: 68, effort: 5 }).toFile(destination);
}

async function writeClientLogoVariant(source, destination, width, height) {
  await mkdir(path.dirname(destination), { recursive: true });
  await sharp(source)
    .rotate()
    .resize({ width, height, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, alphaQuality: 90, effort: 6, smartSubsample: true })
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

async function generateHomepageContentVariants() {
  for (const [name, relativeSource] of homepageContentSources) {
    const source = publicPath(relativeSource);
    await access(source);

    for (const width of homepageContentWidths) {
      await Promise.all(
        ["avif", "webp"].map((format) =>
          writeHomepageContentVariant(
            source,
            path.join(publicDir, "ars-assets", "home", `${name}-${width}.${format}`),
            width,
            format,
          ),
        ),
      );
    }
  }
}

async function generateHomepageBlogVariants() {
  for (const image of homepageBlogSources) {
    const source = publicPath(image.source);
    await access(source);

    for (const width of image.widths) {
      await Promise.all(
        ["avif", "webp"].map((format) =>
          writeHomepageContentVariant(
            source,
            path.join(cwvDir, "homepage", "blog", `${image.name}-${width}.${format}`),
            width,
            format,
          ),
        ),
      );
    }
  }
}

async function generateHomepageGreenSteelVariants() {
  const source = publicPath("ars-assets/home/ARS-green-bg.jpg");
  await access(source);

  for (const width of homepageGreenSteelWidths) {
    await Promise.all(
      ["avif", "webp"].map((format) =>
        writeHomepageContentVariant(
          source,
          path.join(cwvDir, "homepage", `green-steel-${width}.${format}`),
          width,
          format,
        ),
      ),
    );
  }
}

async function generateClientLogoVariants() {
  const logoFiles = (await readdir(clientLogoSourceDir, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".webp"))
    .map((entry) => entry.name);

  for (const fileName of logoFiles) {
    const source = path.join(clientLogoSourceDir, fileName);
    await Promise.all([
      writeClientLogoVariant(source, path.join(cwvDir, "clients", "homepage", fileName), 256, 96),
      writeClientLogoVariant(source, path.join(cwvDir, "clients", "grid", fileName), 640, 224),
    ]);
  }

  return logoFiles.length;
}

async function generateHomepagePerformanceVariants() {
  const [, , logoCount] = await Promise.all([
    generateHomepageBlogVariants(),
    generateHomepageGreenSteelVariants(),
    generateClientLogoVariants(),
  ]);

  return logoCount;
}

if (process.argv.includes("--homepage-only")) {
  const [, logoCount] = await Promise.all([
    generateHomepageContentVariants(),
    generateHomepagePerformanceVariants(),
  ]);
  console.log(
    `Generated ${homepageContentSources.length * homepageContentWidths.length * 2} homepage content variants, ${homepageBlogVariantCount} blog-card variants, ${homepageGreenSteelWidths.length * 2} green-steel background variants, and ${logoCount * 2} client-logo variants.`,
  );
} else {
  const [, blogVariantCount, , logoCount] = await Promise.all([
    generateHeroVariants(),
    generateBlogVariants(),
    generateHomepageContentVariants(),
    generateHomepagePerformanceVariants(),
  ]);
  console.log(
    `Generated ${heroSources.length * 2} hero variants, ${blogVariantCount} blog variants, ${homepageContentSources.length * homepageContentWidths.length * 2} homepage content variants, ${homepageBlogVariantCount} homepage blog-card variants, ${homepageGreenSteelWidths.length * 2} green-steel background variants, and ${logoCount * 2} client-logo variants.`,
  );
}
