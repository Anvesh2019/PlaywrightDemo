import { test } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright'; 
test('string array',async()=>{
    let fruits: string[] = ['Apple', 'Orange', 'Banana'];
    console.log(fruits[0]);
    console.log(fruits.length);
    console.log(fruits[5]);
    
});

test('integer array',async()=>{
    let evenNums: number[] = [25,46,62,87,101,85,24];
    evenNums.push(500);
    console.log(evenNums[0]);
    console.log("length is:" + evenNums.length);
    evenNums.sort();
    console.log("smallest:" + evenNums[7]);
    
});