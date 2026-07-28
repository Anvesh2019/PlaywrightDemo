"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const playwright_1 = require("playwright");
(0, test_1.test)('handling web table', async () => {
    const browser = await playwright_1.chromium.launch({ headless: false, channel: 'chrome' });
    const rsPage = await browser.newPage();
    await rsPage.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const prodTable = await rsPage.locator("table#product");
    const tdsFromRow1 = await rsPage.locator("xpath=//table[@id='product']/tbody/tr[1]/td").all();
    //console.log(prodRows.length);
    for (let i = 0; i < tdsFromRow1.length; i++) {
        console.log(await tdsFromRow1[i].first().innerText());
    }
    const prodRows = await rsPage.locator("xpath=//table[@id='product']/tbody/tr").all();
    console.log(prodRows.length);
    //await expect(rsPage.locator('table#product').nth(2)).toContainText('Steve');
    //console.log(await (await prodRows[1].locator('td').all()).length);
    for (const prow of prodRows) //20
     {
        const prodCols = await prow.locator('td').all();
        for (let i = 0; i < prodCols.length; i++) {
            console.log(await prodCols[i].innerText());
        }
    }
});
//# sourceMappingURL=HandlingWebtable.spec.js.map