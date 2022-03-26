import { test } from '@playwright/test';
import { HomePage } from '../src/pages/home';
import { pokemonNames } from '../src/test-data';

test.describe('UI e2e tests, playwright/chromium', () => {
   test(`UI-1 User can navigate to the "Pokedex" and search by "Name"`, async ({ page }) => {
      const homepage = new HomePage(page);

      await homepage.navigateToPokedex();
      await homepage.closeCookiePopup();
      await homepage.searchByName(pokemonNames.pikachu);
   });
});
