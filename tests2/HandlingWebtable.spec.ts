import {test,expect,Locator, Browser, Page} from '@playwright/test';
import {chromium,webkit,firefox} from 'playwright';

test('handling web table',async()=>{
    const browser:Browser=await chromium.launch({headless:false, channel:'chrome'});
    const rsPage:Page=await browser.newPage();
    await rsPage.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const prodTable:Locator= await rsPage.locator("table#product");
    const tdsFromRow1:Locator[]= await rsPage.locator("xpath=//table[@id='product']/tbody/tr[1]/td").all();
    //console.log(prodRows.length);

    for(let i:number=0; i<tdsFromRow1.length;i++)
    {
        console.log(await tdsFromRow1[i].first().innerText());
    }

    const prodRows:Locator[]= await rsPage.locator("xpath=//table[@id='product']/tbody/tr").all();
    console.log(prodRows.length);
    //await expect(rsPage.locator('table#product').nth(2)).toContainText('Steve');
    //console.log(await (await prodRows[1].locator('td').all()).length);
  
    for(const prow of prodRows) //20
    {
       const prodCols:Locator[]= await prow.locator('td').all();
       for(let i:number=0; i<prodCols.length;i++)
       {
              console.log(await prodCols[i].innerText());
       }
    }
            
});