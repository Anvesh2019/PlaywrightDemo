"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('Get all Cookies', async ({ page }) => {
    await page.goto('https://www.google.com');
    const cookies = await page.context().cookies();
    console.log(cookies);
});
(0, test_1.test)('Set Cookies', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.context().addCookies([
        {
            name: 'username',
            value: 'Anand',
            domain: 'example.com',
            path: '/',
            httpOnly: false,
            secure: false
        }
    ]);
    const cookies = await page.context().cookies();
    console.log(cookies);
});
(0, test_1.test)('Delete Cookies', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.context().clearCookies();
    const cookies = await page.context().cookies();
    console.log(cookies);
});
(0, test_1.test)('Get Cookies by Name', async ({ page }) => {
    await page.goto('https://www.google.com');
    const cookies = await page.context().cookies();
    const cookieByName = cookies.find(cookie => cookie.name === 'username');
    console.log(cookieByName);
});
//# sourceMappingURL=cookies.spec.js.map