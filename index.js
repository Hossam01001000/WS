/** @format */

let wait = (delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay * 1000);
  });
// Import puppeteer
import puppeteer from "puppeteer";
import { config } from "dotenv";
config();

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: false });

  // Create a page
  const page = await browser.newPage();

  // Go to your site
  await page.goto("https://accounts.google.com/");

  // await page.evaluate(() => {
  //   window.scrollBy(0, 200);
  // });

  await page.type('input[type="email"]', "hossamhamdy01001000@gmail.com");
  await page.type('[name="session_password"]', process.env.PASSWORD);
  await page.click('[data-litms-control-urn="login-submit"]');

  await page.waitForNavigation();

  // await wait(25);

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
