"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('Handle Alert', async ({ page }) => {
    page.on('dialog', async (dialog) => {
        console.log(dialog.type()); // alert
        console.log(dialog.message()); // Alert text
        await dialog.accept();
    });
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.locator('button:text("Click for JS Alert")').click();
    await page.waitForTimeout(3000);
});
(0, test_1.test)('Accept Confirmation', async ({ page }) => {
    page.on('dialog', async (dialog) => {
        console.log(dialog.type());
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.locator('button:text("Click for JS Confirm")').click();
});
(0, test_1.test)('Handle Prompt', async ({ page }) => {
    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await page.waitForTimeout(3000);
        await dialog.accept('Anand');
        //await page.waitForTimeout(3000);
    });
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.locator('button:text("Click for JS Prompt")').click();
});
//# sourceMappingURL=HandlingAlerts.spec.js.map