"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
async function globalTeardown(config) {
    console.log('Global teardown');
}
exports.default = globalTeardown;
//# sourceMappingURL=global-teardown.js.map