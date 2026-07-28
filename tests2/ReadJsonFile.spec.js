"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const testData_json_1 = __importDefault(require("../tests/test-data/testData.json"));
(0, test_1.test)('Read Json Test data', async ({ page }) => {
    await page.goto('https://google.com');
    await page.fill('#APjFqb', testData_json_1.default.srchkeyword);
    await page.press('#APjFqb', 'Enter');
    //await page.fill('#username', testData.username);
    //await page.fill('#password', testData.password);
    //await page.click('#login');
    await page.waitForTimeout(3000);
    await (0, test_1.expect)(page).toHaveURL('https://www.google.com/search/');
});
//# sourceMappingURL=ReadJsonFile.spec.js.map