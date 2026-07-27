import {test, expect} from '@playwright/test';
import { clsStudChild } from '../tests2/clsStudChild';

test('Learn Inheritance', async ({ page }, testInfo) => {
  
    console.log(`Learn Inheritance: ${new Date().toLocaleTimeString()}`);
    console.log(`Worker: ${testInfo.workerIndex}`); 
    let objStudChild = new clsStudChild(25,"Maharshi Child");
    objStudChild.Displayname(); //calling child class method
    console.log(objStudChild.AddNumbers(10,20) ); //calling parent class method
    console.log("stud age is:" + objStudChild.age); //accessing parent class property   
    console.log(objStudChild.city); //accessing parent class private property
});

