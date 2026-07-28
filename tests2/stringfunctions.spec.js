"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('Index OF', async () => {
    let city = "Hyderabad";
    console.log(city.indexOf('y')); //y position
    console.log(city.charAt(4)); //5th char
    console.log(city.substring(1, 5)); //2-6 chars  yder
    console.log(city.replace('y', 'a')); //Replace y with a
    let str1 = "I love hyderabad";
    let arrWords = str1.split(' ');
    console.log("Length is:" + arrWords.length);
    console.log(str1.toLocaleLowerCase());
});
//# sourceMappingURL=stringfunctions.spec.js.map