"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const clsWeather_1 = require("./clsWeather");
(0, test_1.test)('Weather test1', async () => {
    const objWeather = new clsWeather_1.clsWeather();
    objWeather.GetWeatherByZipcode();
});
//# sourceMappingURL=weather.spec.js.map