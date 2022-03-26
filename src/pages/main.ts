import { BasePage } from './base';

export class MainPage extends BasePage {
   readonly selectors = {
      userDashboard: { searchIcon: this.page.locator('.profile-nav .search') },
      searchPopup: {
         inputField: this.page.locator('#site-search-widget-term'),
         submitBtn: this.page.locator('#site-search-widget-submit'),
      },
      coockiePopupCloseBtn: this.page.locator('#onetrust-close-btn-container > button'),
   };

   async open() {
      await this.page.goto('/');
      await this.page.waitForLoadState('networkidle');
   }

   async closeCookiePopup() {
      await this.selectors.coockiePopupCloseBtn.click();
      await this.selectors.coockiePopupCloseBtn.waitFor({ state: 'hidden' });
   }
}
