"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
function greet() {
    console.log("Welcome to tech tutorialz");
}
(0, test_1.test)('calling function', async () => {
    let msg = greet();
    console.log(msg);
});
function addnumbers(x, y) {
    return x + y;
}
(0, test_1.test)('calling int function', async () => {
    console.log("sum is:" + addnumbers(20, 30));
});
function GetSTuddetailsBySno(sno) {
    if (sno == 20) {
        return "Anand";
    }
    else if (sno == 30) {
        return "Anvesh";
    }
    else {
        return "Asha";
    }
}
(0, test_1.test)('calling string function', async () => {
    const studName = GetSTuddetailsBySno(20);
    console.log("stud name is:" + studName);
});
//# sourceMappingURL=LearnFunctions.spec.js.map