import { test } from '@playwright/test';
import { HomePage } from '../src/pages/home';
import { PokedexPage } from '../src/pages/pokedex';
import { pokemons } from '../src/test-data';

test.describe('UI e2e tests, playwright/chromium', () => {
   test(`UI-1 Pokedex page, User can search pokemons by "Name"`, async ({ page }) => {
      const pokedexPage = new PokedexPage(page);

      await pokedexPage.open();
      await pokedexPage.searchByNameNumber(pokemons.pikachu.name);
      await pokedexPage.assertSearchResults(pokemons.pikachu);
   });

   test(`UI-2 Pokedex page, User can sort pokemons by "Highest Number (First)"`, async ({
      page,
   }) => {
      const pokedexPage = new PokedexPage(page);

      await pokedexPage.open();
      await pokedexPage.filterResults('Highest Number (First)');
      await pokedexPage.assertFilterResults();
   });

   test(`UI-3 Home Page, User can scroll through the "Featured Pokemon Gallery" slider and verify Dewott in its highlighted select state`, async ({
      page,
   }) => {
      const homePage = new HomePage(page);

      await homePage.open();
      await homePage.closeCookiePopup();
      await homePage.assertHighlightedSliderItem(pokemons.dewott);
   });
});
