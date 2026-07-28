"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const clsStudAbsChild_1 = require("./clsStudAbsChild");
(0, test_1.test)('call abstract class method', async ({ page }, testInfo) => {
    let objStudChild = new clsStudAbsChild_1.clsStudAbsChild(25, "Maharshi Child");
    objStudChild.Displayname(); //calling child class method
    console.log(objStudChild.GetStudDetails()); //calling child class method 
});
//# sourceMappingURL=abstract.spec.js.map