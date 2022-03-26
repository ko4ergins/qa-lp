import { BasePage } from './base';

export class HomePage extends BasePage {
   readonly elements = {
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

   async searchByText(text: string) {
      await this.page.click(this.elements.userDashboard.searchIcon);
      await this.page.waitForSelector(this.elements.searchPopup.inputField);
      await this.page.fill(this.elements.searchPopup.inputField, text);
      await this.page.click(this.elements.searchPopup.submitBtn);
      await this.page.waitForLoadState('networkidle');
   }

   async closeCookiePopup() {
      await this.page.click(this.elements.coockiePopupCloseBtn);
      await this.page.waitForSelector(this.elements.coockiePopupCloseBtn, { state: 'hidden' });
   }
}
