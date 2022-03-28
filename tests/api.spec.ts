import { test } from '@playwright/test';
import { GusPcomRequest } from '../src/requests/gus-pcom/get';

test.describe('API tests, playwright/request', () => {
   test(`API-1 GET /gus/pcom/en, User can get website details`, async ({ request }) => {
      const gusPcomRequest = new GusPcomRequest(request);
      const res = await gusPcomRequest.getGusPcomEn();
      await gusPcomRequest.assertGusPcomEnRes(res);
   });
});
