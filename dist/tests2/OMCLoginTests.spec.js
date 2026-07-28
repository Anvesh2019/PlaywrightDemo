"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const common_1 = require("./common");
const OMCLoginPage_1 = require("./Pages/OMCLoginPage");
let gpage;
(0, test_1.test)('Login to OMC Test using Valid Credentials', async ({ page }) => {
    const omcPage = new OMCLoginPage_1.OMCLoginPage(page);
    await omcPage.NavigateToOMCSite();
    await omcPage.EnterValidCredentials();
    await page.waitForTimeout(3000);
    await (0, test_1.expect)(page).toHaveURL("http://veritasmirror.apps.mars:8080/changeset/204752");
});
(0, test_1.test)('Verify Invalid Credentials', async ({ page }) => {
    const omcPage = new OMCLoginPage_1.OMCLoginPage(page);
    await omcPage.NavigateToOMCSite();
    await omcPage.EnterInValidCredentials();
    await (0, test_1.expect)(omcPage.invalidCredError).toBeVisible();
    await page.waitForTimeout(3000);
});
//# sourceMappingURL=OMCLoginTests.spec.js.map