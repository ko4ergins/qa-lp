import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
   testDir: 'tests',
   use: {
      baseURL: 'https://www.pokemon.com',
      trace: 'on-first-retry',
      headless: false,
      browserName: 'chromium',
      ignoreHTTPSErrors: true,
   },
};
export default config;
