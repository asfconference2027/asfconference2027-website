import { chromium } from "playwright";

const port = process.env.PORT || 5173;
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await context.newPage();
await page.goto(`http://localhost:${port}/`, { waitUntil: "networkidle" });

const infoLi = page.locator('.nav-dropdown', { hasText: 'Info' });
const box = await infoLi.boundingBox();
await page.mouse.move(box.x + box.width / 2, box.y + 10, { steps: 3 });
await page.waitForTimeout(150);

const link = page.locator('.nav-dropdown-menu a', { hasText: 'Venue' });
await link.hover();
await page.waitForTimeout(150);

const styles = await link.evaluate((el) => {
  const s = getComputedStyle(el);
  return { color: s.color, background: s.backgroundColor };
});
console.log("Venue link on hover:", styles);

await context.close();
await browser.close();
