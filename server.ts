import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { chromium, type Browser } from "playwright";

console.log("Starting MCP Server...");

let browser: Browser | null = null;

async function getBrowser() {
  if (!browser) {
    browser = await chromium.launch({ headless: false });
  }

  return browser;
}

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
    {
      name: "close_browser",
      description: "Close the browser",
      inputSchema: {
        type: "object",
        properties: {},
      },
      
    },
    {
      name: "open_playwrighttutorial",
      description: "Launch Chromium and open Playwright Tutorials",
      inputSchema: {
        type: "object",
        properties: {},
      },
      
    },
    {
    name: "say_hi",
    description: "Returns a greeting",
    inputSchema: {
        type: "object",
        properties: {}
    }
}
  ],
}));

// Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  console.log("tool invoked...");
  console.error("Tool called:", request.params.name);
  switch (request.params.name) {
    case "open_google": {
      console.log("1. open_google called");
      console.log("2. Launching browser...");
      const activeBrowser = await getBrowser();
      console.log("3. Browser launched");
      const page = await activeBrowser.newPage();
      await page.goto("https://www.google.com", { waitUntil: "domcontentloaded" });
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
    case "open_playwrighttutorial": {
      const activeBrowser = await getBrowser();
      const page = await activeBrowser.newPage();
      await page.goto("https://techtutorialz.com/category/playwright-tutorial/", {
        waitUntil: "domcontentloaded",
      });

      console.log("Playwright Tutorials opened.");
       await page.waitForTimeout(5000);
       await page.goto("https://techtutorialz.com/interview-questions/");
    
      //console.log(await page.locator("xpath=//input[@name='s']").count());
       await page.locator("xpath=//input[@name='s']").first().fill("selenium");
       await page.waitForTimeout(5000);
      return {
        content: [
          {
            type: "text",
            text: "Playwright Tutorials opened successfully.",
          },
        ],
      };
    }
    case "close_browser": {
      if (browser) {
        await browser.close();
        browser = null;
      }

      console.log("Browser closed.");

      return {
        content: [
          {
            type: "text",
            text: "Browser closed successfully.",
          },
        ],
      };
    }
    case "say_hi":

    console.error("say_hi called");

    return {
        content: [
            {
                type: "text",
                text: "Hello Anand! This message came from MY MCP server."
            }
        ]
    };
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