"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('learn enums', async () => {
    let Weekday;
    (function (Weekday) {
        Weekday[Weekday["Monday"] = 0] = "Monday";
        Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
        Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
        Weekday[Weekday["Thursday"] = 3] = "Thursday";
        Weekday[Weekday["Friday"] = 4] = "Friday";
    })(Weekday || (Weekday = {}));
    console.log(Weekday.Monday);
    console.log(Weekday.Tuesday);
    console.log(Weekday.Wednesday);
    console.log(Weekday.Thursday);
    console.log(Weekday.Friday);
});
//# sourceMappingURL=enum.spec.js.map