import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, "client/public/sitemap.xml");
const configured = process.env.SITE_URL?.trim();

if (!configured) {
  console.warn("SITE_URL is not configured; skipping sitemap generation rather than guessing the portfolio domain.");
  process.exit(0);
}

let origin;
try {
  const parsed = new URL(configured);
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") throw new Error("SITE_URL must use HTTP or HTTPS.");
  origin = parsed.origin;
} catch {
  console.error("SITE_URL must be a valid absolute HTTP(S) URL.");
  process.exit(1);
}

const pages = ["/", "/classic"];
const urls = pages.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join("\n");
await mkdir(dirname(output), { recursive: true });
await writeFile(output, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log(`Generated sitemap for ${origin} (${pages.length} routes).`);
