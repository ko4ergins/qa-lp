import { expect } from '@playwright/test';
import { BasePage } from './base';

export class PokedexPage extends BasePage {
   readonly elements = {
      search: {
         inputField: this.page.locator('#searchInput'),
         submitBtn: this.page.locator('input#search'),
      },
      filter: {
         menuSelect: this.page.locator(
            'div.container.pokedex > section:nth-child(4) div > label',
         ),
      },
      searchResults: this.page.locator('.pokedex-results * li.animating'),
   };

   async open() {
      await this.page.goto('/pokedex');
      await this.page.waitForLoadState('networkidle');
   }

   async searchByNameNumber(data: string) {
      await this.elements.search.inputField.fill(data);
      await this.page.keyboard.press('Enter');
   }

   async filterResults(
      option:
         | 'Sort results by…'
         | 'Lowest Number (First)'
         | 'Highest Number (First)'
         | 'A-Z'
         | 'Z-A',
   ) {
      await this.elements.filter.menuSelect.click();
      await this.page.locator(`li:has-text("${option}")`).click();
   }

   async assertFilterResults() {
      await expect(this.elements.searchResults).toHaveCount(12);

      const firstId = (await this.elements.searchResults.nth(1).evaluate((el) => el.innerText))
         .replace('#', '')
         .split('\n')[0];

      const secondId = (await this.elements.searchResults.nth(2).evaluate((el) => el.innerText))
         .replace('#', '')
         .split('\n')[0];

      await expect(Number(firstId)).toBe(Number(secondId) + 1);
   }

   async assertSearchResults(data: { name: string; number: string }) {
      await expect(this.elements.searchResults).toHaveCount(1);
      await expect.soft(this.elements.searchResults).toContainText(data.name);
      await expect.soft(this.elements.searchResults).toContainText(data.number);
   }
}
