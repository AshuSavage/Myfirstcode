import type { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://localhost:3000/app/',
    viewport: null,
    launchOptions: {
      args: ["--start-maximized"]
    }
  },
  testMatch: ['**/*.test.ts']
};
export default config;

