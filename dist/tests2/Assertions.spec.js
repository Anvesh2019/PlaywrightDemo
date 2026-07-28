"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('Learn toBeChecked() assertion', async ({ page }) => {
    await page.goto('https://www.ironspider.ca/forms/checkradio.htm');
    await page.waitForTimeout(5000);
    const chk1 = await page.locator('input[value="red"]');
    await (0, test_1.expect)(chk1).toBeChecked(); //verify if the checkbox is checked or not
    await chk1.check();
    await (0, test_1.expect)(chk1).toBeChecked(); //verify if the checkbox is checked or not
});
(0, test_1.test)('Learn toBeDisabled(), tobeEnabled() assertions', async ({ page }) => {
    await page.goto('https://www.amazon.in');
    await page.waitForTimeout(3000);
    const logo = await page.locator('//a[@id="nav-logo-sprites"]');
    console.log(await logo.isEnabled()); //return true as the logo is enabled
    console.log(await logo.isVisible()); //return true as the logo is visible
    await (0, test_1.expect)(logo).toBeEnabled(); //return true as the logo is enabled
    await (0, test_1.expect)(logo).toBeVisible(); //return true as the logo is visible
    await (0, test_1.expect)(logo).toBeAttached(); //return true as the logo is attached to the DOM
    //     await expect(logo).toBeDisabled(); //return false as the logo is enabled
    //     await expect(logo).toBeHidden(); //return false as the logo is visible
});
(0, test_1.test)('Learn toContainText(), toHavetext() assertions', async ({ page }) => {
    await page.goto('https://www.amazon.in');
    await page.waitForTimeout(3000);
    const giftcards = await page.locator('//a[text()="Gift Cards"]');
    await (0, test_1.expect)(giftcards).toContainText('Gift Cards');
    await (0, test_1.expect)(giftcards).toHaveText('Gift Cards123');
});
(0, test_1.test)('Learn toHaveattribute(),toContainClass() assertion', async ({ page }) => {
    await page.goto('https://www.google.in');
    await page.waitForTimeout(3000);
    const txtSrch = await page.locator('//textarea[@name="q"]');
    await (0, test_1.expect)(txtSrch).toHaveAttribute('name', 'q');
    await (0, test_1.expect)(txtSrch).toHaveAttribute('maxlength', '2048');
    await (0, test_1.expect)(txtSrch).toContainClass('gLFyf');
});
//# sourceMappingURL=Assertions.spec.js.map