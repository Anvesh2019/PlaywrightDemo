"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
/*
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/
(0, test_1.test)('navigate to google', async ({ page }) => {
    await page.goto('https://google.com');
});
(0, test_1.test)('navigate to techtutorialz', async ({ page }) => {
    await page.goto('https://techtutorialz.com');
    await (0, test_1.expect)(page).toHaveTitle(/Tutorials/);
});
//# sourceMappingURL=example.spec.js.map