import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { chromium } from "playwright";

console.log("Starting MCP Server...");

// Create MCP Server
const server = new Server(
  {
    name: "playwright-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

console.log("Server created");

// Register available tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "open_google",
      description: "Launch Chromium and open Google",
      inputSchema: {
        type: "object",
        properties: {},
      },
    },
  ],
}));

// Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  switch (request.params.name) {
    case "open_google": {
      const browser = await chromium.launch({
        headless: false,
      });

      const page = await browser.newPage();
      await page.goto("https://www.google.com");
console.log("Google opened.");

      return {
        content: [
          {
            type: "text",
            text: "Google opened successfully.",
          },
        ],
      };
    }

    default:
      throw new Error(`Unknown tool: ${request.params.name}`);
  }
});

// Start MCP Server
async function main() {
  const transport = new StdioServerTransport();

  console.log("Connecting...");

  await server.connect(transport);

  console.log("Connected. Waiting for MCP requests...");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});