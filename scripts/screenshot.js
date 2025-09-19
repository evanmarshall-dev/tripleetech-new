#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer";

// Contract
// - Inputs: URL via env URL (default: https://www.fortinet.com/), output path via env OUT (default: ./hn-home.png)
// - Behavior: Launch Chromium, navigate, wait network idle, full-page PNG screenshot, save to OUT.
// - Errors: Non-zero exit on failure with concise message.

const URL = process.env.URL || "https://www.fortinet.com/";
const OUT = process.env.OUT || path.resolve(process.cwd(), "hn-home.png");

async function main() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(60000);
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
  await page.goto(URL, { waitUntil: ["networkidle2"] });

  // Ensure full-page height
  const bodyHeight = await page.evaluate(
    () => document.body.scrollHeight || 2000
  );
  await page.setViewport({
    width: 1280,
    height: Math.min(bodyHeight, 20000),
    deviceScaleFactor: 1,
  });

  const outDir = path.dirname(OUT);
  await fs.mkdir(outDir, { recursive: true });

  await page.screenshot({ path: OUT, fullPage: true, type: "png" });
  await browser.close();
  console.log(`Saved screenshot to ${OUT}`);
}

main().catch(async (err) => {
  console.error("Screenshot failed:", err?.message || err);
  process.exitCode = 1;
});
