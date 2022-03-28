import { expect } from '@playwright/test';
import { IUser } from '../interfaces';
import { BasePage } from './base';

export class LoginPage extends BasePage {
   readonly elements = {
      login: {
         name: this.page.locator('input[name="username"]'),
         password: this.page.locator('input[name="password"]'),
         btn: this.page.locator('input:has-text("Log In")'),
      },
      errorAlert: this.page.locator('.alert.alert-error'),
   };

   async loginWithCredentials(data: IUser) {
      await this.elements.login.name.fill(data.name);
      await this.elements.login.password.fill(data.password);
      await this.elements.login.btn.click();
      await this.page.waitForLoadState('networkidle');
   }

   async assertErrorMessage(err: string) {
      const errMessage = await this.elements.errorAlert.evaluate((el) => el.innerText);

      await expect(errMessage.replace(/(?:\r\n|\r|\n)/g, '')).toBe(
         err.replace(/(?:\r\n|\r|\n)/g, ''),
      );
   }
}
