import { test } from '@playwright/test';
import { PokedexPage } from '../../src/ui/pages';
import { pokemons } from '../../src/ui/test-data';

test.describe('@UI e2e tests, Pokedex Page, playwright/chromium', () => {
   test(`UI-1 Pokedex Page, User can search pokemons by "Name"`, async ({ page }) => {
      const pokedexPage = new PokedexPage(page);

      await pokedexPage.open();
      await pokedexPage.searchByNameNumber(pokemons.pikachu.name);
      await pokedexPage.assertSearchResults(pokemons.pikachu);
   });

   test(`UI-2 Pokedex Page, User can sort pokemons by "Highest Number (First)"`, async ({
      page,
   }) => {
      const pokedexPage = new PokedexPage(page);

      await pokedexPage.open();
      await pokedexPage.filterResults('Highest Number (First)');
      await pokedexPage.assertFilterResults();
   });
});
