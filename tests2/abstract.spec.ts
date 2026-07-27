import {test, expect} from '@playwright/test';

import { clsStudAbsChild } from './clsStudAbsChild';
test('call abstract class method', async ({ page }, testInfo) => {
 
  let objStudChild = new clsStudAbsChild(25,"Maharshi Child");
  objStudChild.Displayname(); //calling child class method
  console.log(objStudChild.GetStudDetails() ); //calling child class method 
});