"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const playwright_1 = require("playwright");
(0, test_1.test)('Learn variables', async () => {
    const name = "Anand";
    let country = "India";
    let age = 30;
    let isMajor = false;
    console.log("country name is :" + country);
    console.log("my age is" + age);
    console.log("stud is major:" + isMajor);
    //name="Anvesh"; //error coz of const
});
(0, test_1.test)('if else statement', async () => {
    let age = 25;
    if (age > 18) {
        console.log('stud is major');
    }
    else {
        console.log('student is minor');
    }
});
(0, test_1.test)('if elseif statement', async () => {
    let age = 20;
    if (age < 18) {
        console.log('stud is minor');
    }
    else if (age > 18 && age < 25) {
        console.log('student is young');
    }
    else {
        console.log('student is major');
    }
});
(0, test_1.test)('switch case', async () => {
    const age = 25;
    switch (age) {
        case 25: {
            //statements;
            console.log("Age is 25");
            break;
        }
        case 30: {
            //statements;
            console.log("Age is 30");
            break;
        }
        default: {
            console.log("unknown age");
            //statements; 
            break;
        }
    }
});
//# sourceMappingURL=ConditionalStmts.spec.js.map