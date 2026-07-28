"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.common = void 0;
const test_1 = require("@playwright/test");
const playwright_1 = require("playwright");
class common {
    AddNumbers(a, b) {
        return a + b;
    }
    Displayname(name) {
        console.log("My name is:" + name);
    }
}
exports.common = common;
//# sourceMappingURL=common.js.map