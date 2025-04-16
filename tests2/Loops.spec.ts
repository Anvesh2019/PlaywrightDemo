import { test, expect,Page, Browser, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright'; 
test('for loop',async()=>{
for( let i=0;i<5;i++)
{
  console.log("i is:" + i);
}
});