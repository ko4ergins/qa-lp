import { expect } from '@playwright/test';
import { BaseRequest } from '../base';
import { TGusPcomRes } from './types';

export class GusPcomRequest extends BaseRequest {
   async getGusPcomEn() {
      return (await this.get('/gus/pcom/en')) as TGusPcomRes;
   }

   async assertGusPcomEnRes(res: TGusPcomRes) {
      const { buttons, promotions, localized, user_info } = res.json;

      await expect(res.status).toBe(200);
      await expect(res.ok).toBe(true);

      await expect.soft(buttons).toBeInstanceOf(Array);
      await expect.soft(promotions).toBeInstanceOf(Array);
      await expect.soft(localized).toBeInstanceOf(Object);
      await expect.soft(user_info).toBeInstanceOf(Object);
   }
}
