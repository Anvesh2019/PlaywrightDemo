import { test, expect,Page, Browser, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright'; 

test.beforeEach(async ({ page }) => {
    
    await page.goto('https://google.com/');
    await page.waitForTimeout(2000);
  });

  
  test('verify before each for google', async ({ page }) => {
    await expect(page).toHaveTitle('Google');
  });


  test('verify before each', async ({ page }) => {
    await expect(page).toHaveTitle('Home Version One - Tutorials & Trainings, Placements, Job support');
  });

test('operator',async()=>{
    let x:number=30;
    let y:number= 40;
    console.log(x==y);
});

test('Learn type of',async()=>{
    const age:number=35;
    if(age>25)
    {
        let city: string ="Hyderabad";
        console.log("stud is major");
    }
    console.log(typeof age);
   // console.log(typeof city); //undefined coz of scope
    expect.soft(expect(age).toContain(35));
    console.log("after soft assertion");
  
});

test.afterEach(async ({ page }) => {
     await page.close();
  });