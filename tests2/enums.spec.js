"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var Days;
(function (Days) {
    Days[Days["sunday"] = 1] = "sunday";
    Days[Days["monday"] = 2] = "monday";
    Days[Days["tuesday"] = 3] = "tuesday";
    Days[Days["wednesday"] = 4] = "wednesday";
    Days[Days["thursday"] = 5] = "thursday";
    Days[Days["friday"] = 6] = "friday";
    Days[Days["saturday"] = 7] = "saturday";
})(Days || (Days = {}));
(0, test_1.test)('Using enums', async () => {
    let myColor = Color.Red;
    console.log(myColor); // Output: 0
    console.log(Days.sunday); // Output: 1
});
//# sourceMappingURL=enums.spec.js.map