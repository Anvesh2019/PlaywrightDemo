import { test, expect, Locator } from '@playwright/test';
import testData from '../tests/test-data/testData.json';

test('Read Json Test data', async ({ page }) => {
  await page.goto('https://google.com');
  
  await page.fill('#APjFqb', testData.srchkeyword);
  await page.press('#APjFqb', 'Enter');
  
  //await page.fill('#username', testData.username);
  //await page.fill('#password', testData.password);
  //await page.click('#login');
  await page.waitForTimeout(3000);
  await expect(page).toHaveURL('https://www.google.com/search/');
});
