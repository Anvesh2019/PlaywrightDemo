import { test, expect,Page, Browser, Locator } from '@playwright/test';
import {clsWeather} from './clsWeather';

test('Weather test1',async()=>{
const objWeather=new clsWeather();
objWeather.GetWeatherByZipcode();
});