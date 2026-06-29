import {test, Page, Locator, expect,FileChooser } from '@playwright/test';

test("API Get call", async ({ request }) => {
  const response = await request.get("https://petstore.swagger.io/v2/pet/findByStatus?status=available");
  expect(response.ok()).toBeTruthy();
  console.log(await response.json());
  console.log(await response.status());
  console.log(await response.statusText());
  console.log(await response.headers());
});