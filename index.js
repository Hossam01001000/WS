/** @format */

// Import puppeteer
import puppeteer from "puppeteer";
import { config } from "dotenv";
config();

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: true });

  // Create a page
  const page = await browser.newPage();

  // Go to your site
  await page.goto("https://www.google.com/search?q=whats+my+ip");

  // Query for an element handle.
  //   const element = await page.waitForSelector('div > .class-name');

  // Do something with element...
  //   await element.click(); // Just an example.

  // Dispose of handle
  //   await element.dispose();
  await page.screenshot({ path: "1.png" });

  // Close browser.
  await browser.close();
})();
