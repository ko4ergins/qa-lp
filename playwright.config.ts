import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
   reporter: [['html', { open: 'never', outputFolder: './report/index' }], ['list']],
   timeout: 90000,
   workers: 1,
   outputDir: './report',
   use: {
      screenshot: 'only-on-failure',
      baseURL: 'https://pokemon.com',
      trace: 'on-first-retry',
      headless: true,
      browserName: 'chromium',
      ignoreHTTPSErrors: true,
      launchOptions: { args: ['--disable-dev-shm-usage'] },
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
