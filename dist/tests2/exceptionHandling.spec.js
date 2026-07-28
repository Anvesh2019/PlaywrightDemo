"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const playwright_1 = require("playwright");
test_1.test.describe('Exception handling in Playwright', () => {
    (0, test_1.test)('Handle exception', async ({ page }) => {
        try {
            const x = 20;
            const y = 0;
            if (y === 0) {
                throw new Error('Division by zero');
            }
            const z = x / y;
            console.log('Result:', z);
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error msg:', error.message);
                console.error('Exception caught:', error);
            }
            else {
                console.error('Unknown error:', error);
            }
        }
    });
    (0, test_1.test)('handle devide by zero error', async ({ page }) => {
        try {
            const a = 10;
            const b = 0;
            const c = a / b;
            console.log('Result:', c);
            if (b === 0) {
                throw new Error('Division by zero is not allowed');
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error msg:', error.message);
                console.error('Exception caught:', error);
            }
            else {
                console.error('Unknown error:', error);
            }
        }
    });
});
//# sourceMappingURL=exceptionHandling.spec.js.map