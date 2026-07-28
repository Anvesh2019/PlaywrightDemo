"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const playwright_1 = require("playwright");
const myfunctions_1 = require("./myfunctions");
// import { GetStudentDetails } from '../myFunctions';
const myfunctions_2 = require("./myfunctions"); //import specific functions(getStudNames) from myfunctions file
const functions = __importStar(require("./myfunctions")); //import entire functions file as namespace
let getSnames = [];
test_1.test.beforeEach(async ({ page }) => {
    getSnames = await functions.getStudNames();
    await page.goto('https://google.com/');
    await page.waitForTimeout(2000);
    //console.log(getSnames[0]);
});
(0, test_1.test)('verify before each for google', async ({ page }) => {
    await (0, test_1.expect)(page).toHaveTitle('Google');
});
(0, test_1.test)('verify before each', async ({ page }) => {
    await (0, test_1.expect)(page).toHaveTitle('Home Version One - Tutorials & Trainings, Placements, Job support');
});
(0, test_1.test)('operator', async () => {
    let x = 30;
    let y = 40;
    console.log(x == y);
});
(0, test_1.test)('Learn type of', async () => {
    const age = 35;
    if (age > 25) {
        let city = "Hyderabad";
        console.log("stud is major");
    }
    console.log(typeof age);
    // console.log(typeof city); //undefined coz of scope
    test_1.expect.soft((0, test_1.expect)(age).toContain(35));
    console.log("after soft assertion");
});
(0, test_1.test)('Get student details', async () => {
    const studentId = 123;
    const details = await (0, myfunctions_1.GetStudentDetails)(studentId);
    console.log(details);
    (0, test_1.expect)(details).toBe("Anand");
});
(0, test_1.test)('Get student names', async () => {
    const names = await (0, myfunctions_2.getStudNames)();
    //console.log(names);
    (0, test_1.expect)(names).toContain("Ravi");
    for (let i = 0; i < getSnames.length; i++) {
        console.log(getSnames[i]);
    }
});
(0, test_1.test)('Get student marks', async () => {
    const marks = await functions.getStudMarks();
    console.log(marks);
    (0, test_1.expect)(marks["Anand"]).toBe(85);
});
test_1.test.afterEach(async ({ page }) => {
    await page.close();
});
//# sourceMappingURL=ReadFunctions.spec.js.map