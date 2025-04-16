import { test, expect,Page, Browser, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright'; 
export class common
{
    public AddNumbers(a:number, b:number)
    {
    return a+b;

    }
    public Displayname(name:string)
    {
    console.log("My name is:" + name);
    }
}