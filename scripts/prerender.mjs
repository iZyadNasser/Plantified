import { readFile, writeFile, rm } from "node:fs/promises";

const { render } = await import("../dist-server/entry-server.js");

const distDir = new URL("../dist/", import.meta.url);
const indexPath = new URL("index.html", distDir);
let html = await readFile(indexPath, "utf8");

const marker = '<div id="root"></div>';
if (!html.includes(marker)) {
  throw new Error("#root marker not found in dist/index.html");
}
html = html.replace(marker, `<div id="root">${render()}</div>`);

for (const tag of html.match(/<link\b[^>]*>/g) ?? []) {
  if (!/rel="stylesheet"/.test(tag)) continue;
  const href = tag.match(/href="([^"]+\.css)"/)?.[1];
  if (!href) continue;
  const rel = href.slice(href.indexOf("/assets/") + 1);
  const css = await readFile(new URL(rel, distDir), "utf8");
  html = html.replace(tag, `<style>${css}</style>`);
}

await writeFile(indexPath, html);
await rm(new URL("../dist-server", import.meta.url), {
  recursive: true,
  force: true,
});
