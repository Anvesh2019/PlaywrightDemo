"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("API Get call", async ({ request }) => {
    const response = await request.get("https://petstore.swagger.io/v2/pet/findByStatus?status=available");
    (0, test_1.expect)(response.ok()).toBeTruthy();
    console.log(await response.json());
    // console.log(await response.status());
    // console.log(await response.statusText());
    // console.log(await response.headers());
    await (0, test_1.expect)(response.status()).toBe(200);
    const responseBody = await response.json();
    //expect(responseBody.name).toContain("doggie");
    //await expect(responseBody).toBeTruthy("Hildegard");
    //expect(responseBody.some((item: any) => item.name === "Mariana")).toBeTruthy();
    (0, test_1.expect)(responseBody.some((item) => item.id === "236705")).toBeTruthy();
    //expect(await response.json().toHaveProperty("name"));
});
(0, test_1.test)('GET API with path parameter', async ({ request }) => {
    const userId = 2;
    const response = await request.get(`https://reqres.in/api/users/${userId}`);
    console.log(await request);
    //expect(response.status()).toBe(200);
    console.log(await response.json());
});
(0, test_1.test)('GET API with query parameters', async ({ request }) => {
    const page = 2;
    const perPage = 5;
    const response = await request.get('https://reqres.in/api/users', {
        params: {
            page: page,
            per_page: perPage
        }
    });
    (0, test_1.expect)(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
});
(0, test_1.test)("API Verify Response", async ({ request }) => {
    const response = await request.get("https://petstore.swagger.io/v2/pet/9223372036854001000");
    (0, test_1.expect)(response.ok()).toBeTruthy();
    console.log(await response.json());
    console.log(await response.status());
    //await expect(response.status()).toBe(200);
    const responseBody = await response.json();
    //expect(responseBody.some((item: any) => item.id === "9223372036854001000")).toBeTruthy();
});
(0, test_1.test)('POST API Request', async ({ request }) => {
    const response = await request.post('https://petstore.swagger.io/v2/pet', {
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
    });
    (0, test_1.expect)(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    (0, test_1.expect)(responseBody.id).toBe(2027);
    (0, test_1.expect)(responseBody.name).toBe('Anvesh666');
    (0, test_1.expect)(responseBody.status).toBe('pending');
});
//# sourceMappingURL=ApiTesting.spec.js.map