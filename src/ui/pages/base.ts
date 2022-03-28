import type { Page } from 'playwright';

export abstract class BasePage {
   constructor(readonly page: Page) {}
}
