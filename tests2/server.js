"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("@modelcontextprotocol/sdk/server/index.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const types_js_1 = require("@modelcontextprotocol/sdk/types.js");
const playwright_1 = require("playwright");
const server = new index_js_1.Server({
    name: "playwright-server",
    version: "1.0.0",
}, {
    capabilities: {
        tools: {},
    },
});
// List available tools
server.setRequestHandler(types_js_1.ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: "launch-browser",
                description: "Launch Chromium Browser",
                inputSchema: {
                    type: "object",
                    properties: {},
                },
            },
        ],
    };
});
// Execute tool
server.setRequestHandler(types_js_1.CallToolRequestSchema, async (request) => {
    if (request.params.name === "launch-browser") {
        const browser = await playwright_1.chromium.launch({
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
    }
    throw new Error("Unknown tool");
});
async function main() {
    const transport = new stdio_js_1.StdioServerTransport();
    await server.connect(transport);
}
main().catch(console.error);
//# sourceMappingURL=server.js.map