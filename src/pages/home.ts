import { isVisible } from '../common-actions';
import { BasePage } from './base';

export class HomePage extends BasePage {
   private selectors = {
      userDashboard: { searchIcon: '.profile-nav .search' },
      searchPopup: {
         inputField: '#site-search-widget-term',
         submitBtn: '#site-search-widget-submit',
      },
      coockiePopupCloseBtn: '#onetrust-close-btn-container > button',
   };

   async navigateToPokedex() {
      await this.page.goto('/us');
   }

   async searchByName(name: string) {
      await this.page.click(this.selectors.userDashboard.searchIcon);
      await this.page.waitForSelector(this.selectors.searchPopup.inputField);
      await this.page.fill(this.selectors.searchPopup.inputField, name);
      await this.page.click(this.selectors.searchPopup.submitBtn);
   }

   async closeCookiePopup() {
      await this.page.click(this.selectors.coockiePopupCloseBtn);
      await this.page.waitForSelector(this.selectors.coockiePopupCloseBtn, { state: 'hidden' });
   }

   async userIsLoggedIn(): Promise<boolean> {
      return await isVisible(this.page, 'a[routerlink="/editor"]');
   }

   async goToSettings() {
      await this.page.click('a[routerlink="/settings"]');
   }
}
