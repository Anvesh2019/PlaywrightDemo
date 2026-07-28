"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('Calling functions', async ({}) => {
    let str1 = "Hyderbad";
    let str2 = "India";
    let str3 = addstrings(str1, str2);
    console.log(str3);
    let x = 30;
    let y = 20;
    let z = addnumbers(x, y);
    console.log("sum is:" + z);
    await printName("Techtutorialz");
    console.log(GetStudentDetails(25));
    console.log(greet());
    console.log(greet("Techtutorialz"));
});
function addstrings(str1, str2) {
    return str1 + " " + str2;
}
function addnumbers(num1, num2) {
    return num1 + num2;
}
function printName(name) {
    console.log("Name is:" + name);
}
//Default params
function greet(name = "Guest") {
    console.log("Hello " + name);
}
async function GetStudentDetails(studentId) {
    // Simulating an asynchronous operation to fetch student details
    return "Anand";
}
//# sourceMappingURL=functions.spec.js.map