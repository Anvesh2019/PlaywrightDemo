import {test, Page, Locator, expect,FileChooser } from '@playwright/test';

test("API Get call", async ({ request }) => {
  const response = await request.get("https://petstore.swagger.io/v2/pet/findByStatus?status=available");
  expect(response.ok()).toBeTruthy();
  console.log(await response.json());
  console.log(await response.status());
  console.log(await response.statusText());
  console.log(await response.headers());
  await expect(response.status()).toBe(200);
  const responseBody: any = await response.json();

//expect(responseBody.name).toContain("doggie");
  //await expect(responseBody).toBeTruthy("Hildegard");
  expect(responseBody.some((item: any) => item.name === "doggie")).toBeTruthy();
});


test("API Verify Response", async ({ request }) => {
  const response = await request.get("https://petstore.swagger.io/v2/pet/9223372036854001000");
  //expect(response.ok()).toBeTruthy();
  console.log(await response.json());
  console.log(await response.status());
  
  //await expect(response.status()).toBe(200);
  const responseBody: any = await response.json();

  expect(responseBody.some((item: any) => item.id === "9223372036854001000")).toBeTruthy();
});

test('POST API Request', async ({ request }) => {

  const response = await request.post(
    'https://petstore.swagger.io/v2/pet',
    {
      headers: {
        'Content-Type': 'application/json'
      },

      data: {
        id: 2027,
        category: {
          id: 0,
          name: 'Wild'
        },
        name: 'Anvesh666',
        photoUrls: [
          'string'
        ],
        tags: [
          {
            id: 0,
            name: 'string'
          }
        ],
        status: 'pending'
      }
    }
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  console.log(responseBody);

  expect(responseBody.id).toBe(2027);
  expect(responseBody.name).toBe('Anvesh666');
  expect(responseBody.status).toBe('pending');
});