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

test('Learn slice method',async()=>{
    let evenNums: number[] = [25,46,62,87,101,85,24];
    let newArray=evenNums.slice(2,5);
    console.log(newArray);

    let numbers: number[] = [10, 20, 30, 40, 50];
    for(let i:number=0;i<numbers.length;i++)
    {
    console.log("Length is:" + numbers[i]);
    }
    
    console.log(...numbers.slice(0, numbers.length - 2)); //take index 0 to 2

    numbers.reverse();  //reverse all the numbers

    console.log(numbers);
});