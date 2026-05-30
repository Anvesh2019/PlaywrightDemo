import { test, expect,Page, Browser, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright'; 

test.describe('Exception handling in Playwright', () => {

    test('Handle exception', async ({ page }) => {          
        try {
        const x: number = 20;
        const y: number = 0;

        if (y === 0) {
            throw new Error('Division by zero');
        }

        const z: number = x / y;
        console.log('Result:', z);
    }
    catch (error: unknown) {
        if (error instanceof Error) {
            console.log('error msg:', error.message);
            console.error('Exception caught:', error);
        } else {
            console.error('Unknown error:', error);
        }
    }
});
test('handle devide by zero error', async ({ page }) => {
    try {
        const a: number = 10;
        const b: number = 0;    
        const c:number = a / b;
        console.log('Result:', c);
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
    }
    catch (error: unknown) {
        if (error instanceof Error) {
            console.log('error msg:', error.message);
            console.error('Exception caught:', error);
        } else {
            console.error('Unknown error:', error);
        }
    }   
});

});