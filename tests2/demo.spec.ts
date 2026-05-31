import { test, expect,Page, Browser, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright'; 
import { GetStudentDetails } from './myfunctions';
// import { GetStudentDetails } from '../myFunctions';
import { getStudNames } from './myfunctions';  //import specific functions(getStudNames) from myfunctions file
import * as functions from './myfunctions'; //import entire functions file as namespace

let getSnames:string[]=[];
test.beforeEach(async ({ page }) => {
    getSnames=await functions.getStudNames();
    await page.goto('https://google.com/');
    await page.waitForTimeout(2000);
    //console.log(getSnames[0]);
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
test('Get student details', async () => {
    const studentId: number = 123;
    const details: string = await GetStudentDetails(studentId);
    console.log(details);
    expect(details).toBe("Anand");
});
test('Get student names', async () => {
    const names: string[] = await getStudNames();
    //console.log(names);
    expect(names).toContain("Ravi");
    for(let i=0;i<getSnames.length;i++)    {
        console.log(getSnames[i]);
    }
   
});
test.afterEach(async ({ page }) => {
     await page.close();
  });