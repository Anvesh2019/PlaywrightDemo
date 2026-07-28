"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
//import { BADHINTS } from 'dns';
const playwright_1 = require("playwright");
(0, test_1.test)('Learn Mouse hover', async () => {
    const browser = await playwright_1.chromium.launch({ headless: false, channel: 'chrome' });
    const page = await browser.newPage();
    await page.goto('https://www.spicejet.com');
    await page.getByText('Add-ons').first().hover();
    await page.getByText('Taxi').first().click();
    await page.waitForTimeout(10000);
});
(0, test_1.test)('Learn Double click', async () => {
    const browser = await playwright_1.chromium.launch({ headless: false, channel: 'chrome' });
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    const btnSignin = await page.locator("xpath=//a[@aria-label='Sign in']");
    await btnSignin.dblclick(); //double click
    await page.waitForTimeout(10000); //just wait for 10 secs
});
(0, test_1.test)('Learn Right click', async () => {
    const browser = await playwright_1.chromium.launch({ headless: false, channel: 'chrome' });
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    const btnSignin = await page.locator("xpath=//a[@aria-label='Sign in']");
    await btnSignin.first().click({ button: "right" }); //right click
    await page.waitForTimeout(10000); //just wait for 10 secs
    await browser.close();
});
(0, test_1.test)('Learn Window Scroll', async () => {
    const browser = await playwright_1.chromium.launch({ headless: false, channel: 'chrome' });
    const page = await browser.newPage();
    await page.goto('https://www.amazon.in');
    for (let i = 0; i < 5; i++) //scroll 2500 pixels vertically..each time 500 pixels
     {
        await page.evaluate(() => window.scrollBy(0, 500));
    }
    await page.waitForTimeout(10000); //just wait for 10 secs
});
(0, test_1.test)('Learn Drag and drop', async () => {
    const browser = await playwright_1.chromium.launch({ headless: false, channel: 'chrome' });
    const page = await browser.newPage();
    await page.goto('http://demo.guru99.com/test/drag_drop.html');
    const from = await page.locator("xpath=//*[@id='credit2']/a");
    const To = await page.locator("xpath=//*[@id='bank']/li");
    await page.waitForTimeout(2000); //just wait for 2 secs
    await from.dragTo(To);
    await page.waitForTimeout(5000);
});
(0, test_1.test)('Focus on an Element', async () => {
    const browser = await playwright_1.chromium.launch({ headless: false, channel: 'chrome' });
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    const txtSrch = await page.locator("xpath=//textarea[@name='q']");
    await page.waitForTimeout(2000);
    await txtSrch.focus();
    await page.waitForTimeout(2000);
    await txtSrch.fill("India");
});
(0, test_1.test)('Learn pressSequentially', async () => {
    const browser = await playwright_1.chromium.launch({ headless: false, channel: 'chrome' });
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    const txtSrch = await page.locator("xpath=//textarea[@name='q']");
    await page.waitForTimeout(2000);
    await txtSrch.pressSequentially("India", { delay: 100 });
    await page.screenshot({ path: 'googlesearch.jpeg' }); //get screenshot of the page
    const linkgmail = await page.locator("xpath=//a[text()='Gmail']");
    console.log("test is: " + await linkgmail.textContent()); //get text content of the element
});
//# sourceMappingURL=Actions.spec.js.map