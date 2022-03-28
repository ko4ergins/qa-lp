import { test } from '@playwright/test';
import { GusPcomRequest } from '../src/api/requests/gus-pcom/get';

test.describe('API tests, playwright/request', () => {
   test(`API-1 GET /gus/pcom/en, status code "OK"`, async ({ request }) => {
      const gusPcomRequest = new GusPcomRequest(request);
      const res = await gusPcomRequest.getGusPcomEn();
      await gusPcomRequest.assertGusPcomEnRes(res);
   });

   test(`API-2 GET /gus/pcom/qa, status code "Not Found"`, async ({ request }) => {
      const gusPcomRequest = new GusPcomRequest(request);
      const res = await gusPcomRequest.getGusPcomQa();
      await gusPcomRequest.assertGusPcomQaRes(res);
   });
});
