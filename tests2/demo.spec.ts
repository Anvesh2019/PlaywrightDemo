import { test, expect,Page, Browser, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright'; 

test('operator',async()=>{
    let x:number=30;
    let y:number= 40;
    console.log(x==y);
});

test('test2',async()=>{
    const age:number=35;
    if(age>25)
    {
        console.log("stud is major");
    }
  //  console.log(AddNumbers(10,20));

});
