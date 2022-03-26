import { test } from '@playwright/test';
import { PokedexPage } from '../src/pages/pokedex';
import { pokemons } from '../src/test-data';

test.describe('UI e2e tests, playwright/chromium', () => {
   test(`UI-1 User can navigate to the "Pokedex" and search by "Name"`, async ({ page }) => {
      const pokedexPage = new PokedexPage(page);

      await pokedexPage.open();
      await pokedexPage.searchByNameNumber(pokemons.pikachu.name);
      await pokedexPage.assertSearchResults(pokemons.pikachu);
   });

   test(`UI-2 User can navigate to the "Pokedex" and sort by "Highest Number (First)"`, async ({
      page,
   }) => {
      const pokedexPage = new PokedexPage(page);

      await pokedexPage.open();
      await pokedexPage.filterResults('Highest Number (First)');
      await pokedexPage.assertFilterResults();
   });
});
