import { expect } from '@playwright/test';
import { BasePage } from './base';

export class SearchResultsPage extends BasePage {
   readonly elements = {
      search: {
         inputField: this.page.locator('#site-search-page-term'),
         submitBtn: this.page.locator('#site-search-page-submit'),
      },
      firstSearchRes: this.page.locator('#site-search-results > li:nth-child(1) h3'),
   };

   async verifySearchResults(searchData: string) {
      await expect.soft(this.elements.search.inputField).toHaveValue(searchData);
      await expect.soft(this.elements.firstSearchRes).toContainText(searchData);
   }
}
