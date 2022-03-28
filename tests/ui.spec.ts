import { test } from '@playwright/test';
import * as errMessage from '../src/err-messages';
import { HomePage, LoginPage, PokedexPage } from '../src/pages';
import { pokemons, users } from '../src/test-data';

test.describe('UI e2e tests, playwright/chromium', () => {
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

   test(`UI-3 Home Page, User can scroll through the "Featured Pokemon Gallery" slider and verify Dewott in its highlighted select state`, async ({
      page,
   }) => {
      const homePage = new HomePage(page);

      await homePage.open();
      await homePage.closeCookiePopup();
      await homePage.assertHglSliderItem(pokemons.dewott);
   });

   test(`UI-4 Home Page, User can select 'Explore More Pokemon' CTA and find Jigglypuff in the hover state of the Pokedex`, async ({
      page,
   }) => {
      const homePage = new HomePage(page);
      const pokedexPage = new PokedexPage(page);

      await homePage.open();
      await homePage.closeCookiePopup();
      await homePage.clickExploreMorePokemonBtn();
      await pokedexPage.clickLoadMorePokemonBtn();
      await pokedexPage.assertItemIsInList(pokemons.jigglypuff);
   });

   test(`UI-5 Home Page, User can not login with invalid credentials`, async ({ page }) => {
      const homePage = new HomePage(page);
      const loginPage = new LoginPage(page);

      await homePage.open();
      await homePage.closeCookiePopup();
      await homePage.navigateToLoginPage();
      await loginPage.loginWithCredentials(users.invalid);
      await loginPage.assertErrorMessage(errMessage.loginWithIncorrectCreds);
   });
});
