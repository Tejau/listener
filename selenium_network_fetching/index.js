const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
//opening a new page
// Opening a new page
 
// Set windows height en width
async()=>{
    const page = await browser.newPage();

    await page.setViewport({ width: 1600, height: 900 });
 
// Navigate to specific url and wait till network traffic is idle
await page.goto('https://qualibrate.com', {waitUntil: "networkidle0"});
 
// Click on menu item Blog
const menuElement = await page.$x("//a[contains(text(), 'Blog')]");
await menuElement[0].click();
 
await page.waitForNavigation({waitUntil: "networkidle0"});
 
// Create a timestamp 
var timestamp = (Date.now() / 1000 | 0);
const har = new PuppeteerHar(page);
 
// Start the HTTP Tracing
await har.start({ path: './'+timestamp+'results.har' });
console.log(`Har file started and profiling`);
 
// Set windows hight en width
await page.setViewport({ width: 1600, height: 900 });
// Stop the HTTP Tracing
await har.stop();
console.log(`Stop Har file and save`);

await browser.close();

}