/** @format */

// /** @format */

// import puppeteer from "puppeteer";

// let wait = (delay) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, delay * 1000);
//   });
// console.log("hi");
// (async () => {
//   let browser = await puppeteer.launch({
//     headless: false,
//     defaultViewport: null,
//   });
//   let page = await browser.newPage();
//   await page.goto("https://www.google.com");
//   await wait(10);
//   await page.goto("https://fmovies.to/series/wednesday-yj32p/1-2");
// })();
import puppeteer from "puppeteer";
(async () => {
  const browser = await puppeteer.launch({
    protocolTimeout: 90000000,
    userDataDir: "D:data",
    defaultViewport: null,
    headless: false,
  });
  let page = await browser.newPage();
  page.setDefaultNavigationTimeout(60000);
  await page.goto(
    `https://www.linkedin.com/jobs/search/?f_AL=true&keywords=frontend%20developer&location=Denmark&refresh=true`
  );
})();
