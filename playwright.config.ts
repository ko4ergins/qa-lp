import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
   reporter: [['allure-playwright'], ['list']],
   timeout: 90000,
   workers: 3,
   outputDir: './allure-results',
   use: {
      screenshot: 'only-on-failure',
      baseURL: 'https://pokemon.com',
      trace: 'on-first-retry',
      headless: true,
      browserName: 'chromium',
      ignoreHTTPSErrors: true,
   },
   projects: [
      {
         name: 'API',
         testDir: './tests/api',
      },
      {
         name: 'UI',
         testDir: './tests/ui',
      },
   ],
};

export default config;
