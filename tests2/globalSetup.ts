import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  console.log('Global Setup Started');

  // One-time initialization

  console.log('Global Setup Completed');
}

export default globalSetup;