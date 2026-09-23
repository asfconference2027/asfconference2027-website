// Sanity check: verifies no page forces the mobile viewport to zoom out
// (i.e. window.innerWidth should equal document.documentElement.clientWidth
// on every route, at real device sizes). Requires the dev server running
// at http://localhost:5173 (or pass PORT env var).
import { chromium } from "playwright";

const port = process.env.PORT || 5173;
const devices = [
  { name: "iPhone XR", width: 414, height: 896 },
  { name: "Galaxy S20 Ultra", width: 412, height: 915 },
];
const paths = [
  "/",
  "/agenda",
  "/activities",
  "/competitions",
  "/info/venue",
  "/info/getting-there",
  "/info/accommodation",
  "/info/sponsors",
  "/tickets",
];

const browser = await chromium.launch();
let failed = false;

for (const device of devices) {
  const context = await browser.newContext({
    viewport: { width: device.width, height: device.height },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();

  for (const path of paths) {
    await page.goto(`http://localhost:${port}${path}`, { waitUntil: "networkidle" });
    const { clientWidth, innerWidth } = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      innerWidth: window.innerWidth,
    }));
    if (clientWidth !== innerWidth) {
      failed = true;
      console.log(`FAIL [${device.name}] ${path}: clientWidth=${clientWidth} innerWidth=${innerWidth}`);
    }
  }
  await context.close();
}

await browser.close();
console.log(failed ? "\nSome pages are zooming out on mobile." : "All pages render at full width on mobile.");
process.exit(failed ? 1 : 0);
