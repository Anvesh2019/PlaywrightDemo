"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const playwright_1 = require("playwright");
(0, test_1.test)('for loop', async () => {
    for (let i = 0; i < 5; i++) {
        console.log("i is:" + i);
    }
});
//# sourceMappingURL=Loops.spec.js.map