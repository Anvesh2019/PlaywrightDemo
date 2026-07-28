"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const googlePage_1 = require("./Pages/googlePage");
(0, test_1.test)('Learn Pageobject Model', async () => {
    const browser = await test_1.chromium.launch({ headless: false, channel: 'chrome' });
    const page = await browser.newPage();
    const gpage = new googlePage_1.googlePage(page);
    await gpage.NavigateToSite();
    await page.waitForTimeout(3000);
    await gpage.txtSrch.fill("TechTutorialz");
});
(0, test_1.test)('click on Gmail', async () => {
    const browser = await test_1.chromium.launch({ headless: false, channel: 'chrome' });
    const page = await browser.newPage();
    const gpage = new googlePage_1.googlePage(page);
    await gpage.NavigateToSite();
    await gpage.clickonGmail();
});
(0, test_1.test)('Click on Gmail Link', async ({ page }) => {
    await page.goto('https://google.com');
    await page.waitForTimeout(2000);
    //const btnGsearch:Locator= await page.locator('(//input[@value="Google Search"])[1]');
    const txtSrch = await page.locator('//textarea[@name="q"]');
    await txtSrch.fill("India");
    const value = await txtSrch.getAttribute('maxlength');
    console.log("Max length of search box:" + value);
    console.log("Is search box enabled?" + await txtSrch.isEnabled());
    console.log("Is search box editable?" + await txtSrch.isEditable());
    const btnGsearch = await page.locator('//a[text()="Gmail"]');
    await btnGsearch.click();
});
//# sourceMappingURL=GoogleTests.spec.js.map