"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("@modelcontextprotocol/sdk/server/index.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const server = new index_js_1.Server({
    name: "playwright-server",
    version: "1.0.0"
}, {
    capabilities: {
        tools: {}
    }
});
// Add your tool here
server.tool("launch-browser", "Launch Chromium Browser", {}, async () => {
    const { chromium } = await import("playwright");
    const browser = await chromium.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto("https://example.com");
    return {
        content: [
            {
                type: "text",
                text: "Browser launched successfully",
            },
        ],
    };
});
throw new Error("Unknown request");
;
// Start the server
const transport = new stdio_js_1.StdioServerTransport();
await server.connect(transport);
//# sourceMappingURL=server.js.map