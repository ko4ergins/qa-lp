import { expect } from '@playwright/test';
import { IPokemon } from '../interfaces';
import { BasePage } from './base';

export class HomePage extends BasePage {
   readonly selectors = {
      userDashboard: { searchIcon: this.page.locator('.profile-nav .search') },
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
   };

   async open() {
      await this.page.goto('/');
      await this.page.waitForLoadState('networkidle');
   }

   async closeCookiePopup() {
      await this.selectors.coockiePopupCloseBtn.click();
      await this.selectors.coockiePopupCloseBtn.waitFor({ state: 'hidden' });
   }

   async assertHighlightedSliderItem(data: IPokemon) {
      await this.selectors.featuredGallerySlider.hglItemInfo.scrollIntoViewIfNeeded();
      const pokemonNameNumber = await this.selectors.featuredGallerySlider.hglItemInfo.evaluate(
         (el) => el.innerText,
      );

      await expect(pokemonNameNumber.replace(/(?:\r\n|\r|\n)/g, '')).toBe(
         `${data.name}${data.number.replace('#', '')}`,
      );
   }
}
