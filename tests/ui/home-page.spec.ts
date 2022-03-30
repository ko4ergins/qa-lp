import { test } from '@playwright/test';
import * as errMessage from '../../src/ui/err-messages';
import { HomePage, LoginPage, PokedexPage } from '../../src/ui/pages';
import { pokemons, users } from '../../src/ui/test-data';

test.describe('@UI e2e tests, Home Page, playwright/chromium', () => {
   test(`UI-3 User can scroll through the "Featured Pokemon Gallery" slider and verify Dewott in its highlighted select state`, async ({
      page,
   }) => {
      const homePage = new HomePage(page);

      await homePage.open();
      await homePage.closeCookiePopup();
      await homePage.assertHglSliderItem(pokemons.dewott);
   });

   test(`UI-4 User can select 'Explore More Pokemon' CTA and find Jigglypuff in the hover state of the Pokedex`, async ({
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

   test(`UI-5 User can not login with invalid credentials`, async ({ page }) => {
      const homePage = new HomePage(page);
      const loginPage = new LoginPage(page);

      await homePage.open();
      await homePage.closeCookiePopup();
      await homePage.navigateToLoginPage();
      await loginPage.loginWithCredentials(users.invalid);
      await loginPage.assertErrorMessage(errMessage.loginWithIncorrectCreds);
   });
});
