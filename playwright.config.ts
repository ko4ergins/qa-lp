import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
   testDir: 'tests',
   use: {
      trace: 'on-first-retry',
      headless: false,
      browserName: 'chromium',
      ignoreHTTPSErrors: true,
   },
};
export default config;
