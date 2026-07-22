import { mkdir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const registryPath = path.join(projectRoot, "src/data/blog-migration-registry.json");
const bannerRoot = path.join(projectRoot, "public/ars-assets/blog-banners");

const registry = JSON.parse(await readFile(registryPath, "utf8"));
const downloaded = [];

for (const entry of registry) {
  const image = entry.featuredImage;
  if (!image?.url || !/^https?:\/\//.test(image.url)) continue;

  const sourceUrl = image.sourceUrl || image.url;
  const parsed = new URL(sourceUrl);
  const fileName = path.basename(parsed.pathname);
  const destinationDirectory = path.join(bannerRoot, entry.slug);
  const destination = path.join(destinationDirectory, fileName);
  const publicUrl = `/ars-assets/blog-banners/${entry.slug}/${fileName}`;

  await mkdir(destinationDirectory, { recursive: true });

  let exists = false;
  try {
    exists = (await stat(destination)).size > 0;
  } catch {
    exists = false;
  }

  if (!exists) {
    const response = await fetch(sourceUrl);
    if (!response.ok) {
      throw new Error(`Could not download ${sourceUrl}: ${response.status} ${response.statusText}`);
    }
    const temporaryDestination = `${destination}.part`;
    await writeFile(temporaryDestination, Buffer.from(await response.arrayBuffer()));
    await rename(temporaryDestination, destination);
  }

  entry.featuredImage = {
    ...image,
    url: publicUrl,
    sourceUrl,
    fileName,
  };
  downloaded.push({ slug: entry.slug, sourceUrl, publicUrl, downloaded: !exists });
}

const temporaryRegistry = `${registryPath}.part`;
await writeFile(temporaryRegistry, `${JSON.stringify(registry, null, 2)}\n`);
await rename(temporaryRegistry, registryPath);

console.log(JSON.stringify({
  processed: downloaded.length,
  downloaded: downloaded.filter((item) => item.downloaded).length,
  reused: downloaded.filter((item) => !item.downloaded).length,
  bannerRoot,
}, null, 2));

await rm(`${registryPath}.part`, { force: true });
