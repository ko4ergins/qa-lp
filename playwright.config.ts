import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
   testDir: 'tests',
   reporter: [['allure-playwright'], ['list']],
   timeout: 90000,
   workers: 1,
   use: {
      screenshot: 'only-on-failure',
      baseURL: 'https://pokemon.com',
      trace: 'on-first-retry',
      headless: false,
      browserName: 'chromium',
      ignoreHTTPSErrors: true,
   },
};

export default config;
