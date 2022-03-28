import { expect } from '@playwright/test';
import { IPokemon } from '../interfaces';
import { BasePage } from './base';

export class HomePage extends BasePage {
   readonly elements = {
      userDashboard: {
         searchIcon: this.page.locator('.profile-nav .search'),
         loginIcon: this.page.locator('#user-dashboard >> text=Log In'),
      },
      searchPopup: {
         inputField: this.page.locator('#site-search-widget-term'),
         submitBtn: this.page.locator('#site-search-widget-submit'),
      },
      coockiePopupCloseBtn: this.page.locator('#onetrust-close-btn-container > button'),
      featuredGallerySlider: {
         hglItemInfo: this.page.locator(
            '#pokemon-character-slider .loaded.highlight > .mini-profile > h5',
         ),
         prevBtn: this.page.locator('.nav-btn.prev'),
         nextBtn: this.page.locator('.nav-btn.next'),
      },
      exploreMorePokemonBtn: this.page.locator('.slider-more-button a'),
   };

   async open() {
      await this.page.goto('/us');
      await this.page.waitForLoadState('networkidle');
   }

   async closeCookiePopup() {
      await this.elements.coockiePopupCloseBtn.click();
      await this.elements.coockiePopupCloseBtn.waitFor({ state: 'hidden' });
   }

   async clickExploreMorePokemonBtn() {
      await this.elements.exploreMorePokemonBtn.click();
      await this.page.waitForLoadState('networkidle');
   }

   async navigateToLoginPage() {
      await this.elements.userDashboard.loginIcon.click();
      await this.page.waitForLoadState('networkidle');
   }

   async assertHglSliderItem(data: IPokemon) {
      await this.elements.featuredGallerySlider.hglItemInfo.scrollIntoViewIfNeeded();
      const pokemonNameNumber = await this.elements.featuredGallerySlider.hglItemInfo.evaluate(
         (el) => el.innerText,
      );

      await expect(pokemonNameNumber.replace(/(?:\r\n|\r|\n)/g, '')).toBe(
         `${data.name}${data.number.replace('#', '')}`,
      );
   }
}
