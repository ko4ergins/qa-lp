import { test } from '@playwright/test';
import { HomePage } from '../src/pages/home';
import { SearchResultsPage } from '../src/pages/search-results';
import { pokemonNames } from '../src/test-data';

test.describe('UI e2e tests, playwright/chromium', () => {
   test(`UI-1 User can navigate to the "Pokedex" and search by "Name"`, async ({ page }) => {
      const homePage = new HomePage(page);
      const searchResultsPage = new SearchResultsPage(page);

      await homePage.navigateToPokedex();
      await homePage.closeCookiePopup();
      await homePage.searchByText(pokemonNames.pikachu);

      await searchResultsPage.verifySearchResults(pokemonNames.pikachu);
   });
});
