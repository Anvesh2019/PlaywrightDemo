"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const clsStudChild_1 = require("../tests2/clsStudChild");
(0, test_1.test)('Learn Inheritance', async ({ page }, testInfo) => {
    console.log(`Learn Inheritance: ${new Date().toLocaleTimeString()}`);
    console.log(`Worker: ${testInfo.workerIndex}`);
    let objStudChild = new clsStudChild_1.clsStudChild(25, "Maharshi Child");
    objStudChild.Displayname(); //calling child class method
    console.log(objStudChild.AddNumbers(10, 20)); //calling parent class method
    console.log("stud age is:" + objStudChild.age); //accessing parent class property   
    console.log(objStudChild.city); //accessing parent class private property, should not work
});
//# sourceMappingURL=inheritance1.spec.js.map