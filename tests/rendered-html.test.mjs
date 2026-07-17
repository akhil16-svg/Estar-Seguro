import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
const cssFile = html.match(/href="([^"]+\.css[^"]*)"/)?.[1];

test("exports the Estar Seguro market-presence website", () => {
  assert.match(html, /Estar Seguro Polymer/);
  assert.match(html, /Built around your/);
  assert.match(html, /Reverse Engineering/);
  assert.match(html, /3D Printing/);
  assert.match(html, /Mass Production/);
  assert.match(html, /80–250 tons/);
  assert.match(html, /Up to 200 tons/);
  assert.match(html, /5–80 tons/);
  assert.match(html, /yogesh\.p@estarseguro\.in/);
  assert.match(html, /wa\.me\/919371226224/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /Design preview|Choose a direction/);
});

test("uses the GitHub Pages asset prefix when configured", () => {
  if (process.env.PAGES_BASE_PATH) {
    assert.match(html, /\/Estar-Seguro\/_next\//);
    assert.match(html, /\/Estar-Seguro\/products\/es10\.webp/);
  }
});

test("ships the approved brand palette and fixed WhatsApp control", async () => {
  assert.ok(cssFile, "rendered HTML should link a stylesheet");
  const localCssPath = cssFile.replace(/^\/Estar-Seguro/, "").replace(/^\//, "");
  const css = await readFile(new URL(`../out/${localCssPath}`, import.meta.url), "utf8");
  assert.match(css, /#A69466/i);
  assert.match(css, /\.floating-whatsapp/);
  assert.match(css, /position:\s*fixed/);
});
