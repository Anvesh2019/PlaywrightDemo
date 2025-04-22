import {test,expect,Browser, Page, Locator} from '@playwright/test';
import { chromium } from '@playwright/test';

test('Handle text box',async()=>{

    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
    const page:Page= await browser.newPage();
    await page.goto('https://www.google.com');
    const txtSrch: Locator=page.locator("[name='q']"); 
    txtSrch.fill("India");

    const length:string= await txtSrch.getAttribute("maxlength");
    console.log("max length is:" + length);
    await expect(txtSrch).toHaveValue("India");
    const txtValue:string= await txtSrch.inputValue();

    await expect(txtValue).toContain("India");

});

test('Handling Dropdown',async()=>{

    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
    const page:Page= await browser.newPage();
    await page.goto('https://www.magupdate.co.uk/reader-enquiry/PATI/232');
    const countryDD='select#Contact_CountryCode';
    await page.selectOption(countryDD,{value:'IN'});
    await page.selectOption(countryDD,{value:'KE'});
    await page.selectOption(countryDD,{label:'Israel'});
    await page.selectOption(countryDD,{index:2});
});
test('Handling Listbox',async()=>{

    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
    const page:Page= await browser.newPage();
    await page.goto('https://output.jsbin.com/osebed/2');
    const fruitsDD='select#fruits';

    
    /*
    await page.selectOption(countryDD,{value:'banana'});
    await page.selectOption(countryDD,{value:'grape'});
    await page.selectOption(countryDD,{label:'Orange'});
    await page.selectOption(countryDD,{index:1});  //select apple
    */
    await page.selectOption(fruitsDD,['banana','grape']); //multi select

    const fruitsDD1:Locator= await page.locator('select#fruits');
    //console.log("Length is:" + await fruitsDD.);
   // await page.$eval('#fruitsDD1', fruitsDD1 => fruitsDD1.options);
    
   // page.$eval('#fruits', sel => sel.options[sel.options.selectedIndex].textContent)
    
    const allOptions = await fruitsDD1.locator('option');
    const optionsArray = await allOptions.all();
    
        

    for (const option of optionsArray) 
        {
        const text = await option.textContent();
        const value = await option.getAttribute('value');
        //console.log(`Option Text: ${text}, Value: ${value}`);
      
        }
});

test('Iterate through all options from listbox',async()=>{

    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
    const page:Page= await browser.newPage();
    await page.goto('https://output.jsbin.com/osebed/2');
    const countryDD='select#fruits';


    const fruitsDD:Locator= await page.locator('select#fruits');
   
    const allOptions = await fruitsDD.locator('option');
    const optionsArray = await allOptions.all();

    console.log("options count:" + optionsArray.length);

    for (const option of optionsArray) 
        {
        const text = await option.textContent();
        const value = await option.getAttribute('value');
        console.log(`Option Text: ${text}, Value: ${value}`);

    }
});

test('handling radio button',async()=>{
    const browser:Browser=await chromium.launch({headless:false, channel:'chrome'});
    const rsPage:Page=await browser.newPage();
    await rsPage.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const radio3:Locator= await rsPage.locator("input[value='radio3']");
    
    console.log(await radio3.isChecked());  //false
    if(await radio3.isChecked()==false)
    {
        await radio3.check();  
    }
    console.log(await radio3.isChecked()); //true

    const radio2:Locator= await rsPage.locator("input[value='radio2']");
    await radio2.isChecked();
    console.log("radio2 is selected:" + await radio2.isChecked());

    
});