import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
   testDir: 'tests',
   reporter: 'list',
   timeout: 60000,
   use: {
      screenshot: 'only-on-failure',
      baseURL: 'https://www.pokemon.com/us',
      trace: 'on-first-retry',
      headless: true,
      browserName: 'chromium',
      ignoreHTTPSErrors: true,
   },
};

export default config;
