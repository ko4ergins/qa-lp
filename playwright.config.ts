import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
   testDir: 'tests',
   reporter: 'list',
   timeout: 60000,
   workers: 1,
   projects: [
      {
         name: `UI`,
         use: {
            screenshot: 'only-on-failure',
            baseURL: 'https://pokemon.com',
            trace: 'on-first-retry',
            headless: true,
            browserName: 'chromium',
            ignoreHTTPSErrors: true,
         },
      },
   ],
};

export default config;
