import { test, expect,Page, Browser, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright'; 

test('Learn variables',async()=>{
    let country:string="India";
    let age:number=30;
    let isMajor:boolean=false;
    console.log("country name is :" + country);
    console.log("my age is" + age);
    console.log("stud is major:" + isMajor);
});

test('if else statement',async()=>{
let age:number=25;
    if (age>18) 
        {
            console.log('stud is major');
        }
        
        else {
            console.log('student is minor');
        }
});

test('if elseif statement',async()=>{
    let age:number=20;
        if (age<18) 
            {
                console.log('stud is minor');
            }
            
            else if(age >18 && age <25) {
                console.log('student is young');
            }
            else
            {
                console.log('student is major');
            }
    });

    test('string array',async()=>{
        let fruits: string[] = ['Apple', 'Orange', 'Banana'];
        console.log(fruits[0]);
        console.log(fruits.length);
        console.log(fruits[5]);
        
    });
    
    test('integer array',async()=>{
        let evenNums: number[] = [2,4,6,8,10];
        console.log(evenNums[0]);
        console.log("length is:" + evenNums.length);
        
    });