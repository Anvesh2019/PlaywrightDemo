import {test, Locator, chromium, webkit, firefox} from '@playwright/test';

test('Run only test case',async()=>{
console.log("only test case");
});

test.skip('skip test case',async()=>{
    console.log("only test case");
    });
test('Always run test case',async()=>{
console.log("always run this test case");
});

    test('conditional test case', async ({ page, browserName }) => {
        test.skip(browserName === 'firefox', 'Still working on it');
      });

      test('Regression test case', {
        tag: '@Regression',
      }, async ({ page }) => {
        // ...
      });

      
      test('smoke test case', {
        tag: '@smoke',
      }, async ({ page }) => {
        // ...
      });

      test.describe('Regression tests', () => {
        test('test one', async ({ page }) => {
          console.log("I am test case1 from group tests");
        });
      
        test('test two', async ({ page }) => {
            console.log("I am test case2 from group tests");
        });
      });