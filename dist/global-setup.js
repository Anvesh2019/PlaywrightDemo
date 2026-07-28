"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
async function globalSetup(config) {
    console.log('creating new database...');
    console.log("Global Setup Started");
    // Initialize the database
    // const browser = await chromium.launch({
    //         headless: false,
    //         slowMo: 1000
    //     });
    //   const page = await browser.newPage();
    //     await page.goto('https://example.com');
    console.log("Global Setup ended");
}
exports.default = globalSetup;
//# sourceMappingURL=global-setup.js.map