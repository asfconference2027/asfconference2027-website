// Ad hoc screenshot helper: node scripts/screenshot-page.mjs <path> <outfile> [port]
import { chromium } from "playwright";

const [, , path, outfile, portArg] = process.argv;
const port = portArg || process.env.PORT || 5173;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
await page.goto(`http://localhost:${port}${path}`, { waitUntil: "load" });
await page.waitForTimeout(1500);
await page.screenshot({ path: outfile, fullPage: true });
await browser.close();
