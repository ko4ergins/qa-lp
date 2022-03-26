import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
   testDir: 'tests',
   reporter: 'list',
   use: {
      baseURL: 'https://www.pokemon.com/us',
      trace: 'on-first-retry',
      headless: false,
      browserName: 'chromium',
      ignoreHTTPSErrors: true,
   },
};
export default config;
