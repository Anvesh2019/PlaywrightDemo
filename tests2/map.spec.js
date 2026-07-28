"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('Learn Map1', async ({}) => {
    const employees = new Map();
    await employees.set("anand", 1);
    await employees.set("anvesh", 2);
    await employees.set("asha", 3);
    await employees.set("santhi", 3);
    console.log(employees.size);
    //console.log(employees.entries.length);
});
(0, test_1.test)('Learn Map2', async () => {
    const map = new Map();
    map.set('Alice', 30);
    map.set('Bob', 25);
    map.set('Charlie', 35);
    console.log('Size:', map.size);
    console.log('Alice age:', map.get('Alice')); //get value
    console.log('Has Bob:', map.has('Bob')); //contains key
    map.delete('Bob');
    console.log('After delete, has Bob:', map.has('Bob'));
    map.forEach((value, key) => {
        console.log(`${key} => ${value}`);
    });
});
(0, test_1.test)('Map from entries3', async () => {
    const entries = [
        ['name', 'Anand'],
        ['city', 'Hyderabad'],
        ['role', 'QA'],
    ];
    const map = new Map(entries);
    console.log('name:', map.get('name'));
    console.log('city:', map.get('city'));
    for (const [key, value] of map) {
        console.log(`${key} => ${value}`);
    }
});
//# sourceMappingURL=map.spec.js.map