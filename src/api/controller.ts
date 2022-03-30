import { APIResponse, expect, request } from '@playwright/test';

export type TApiRes = { message: string; url: string; ok: boolean; json: any; status: number };
export type TApiErr = Omit<TApiRes, 'json'> & {
   json: { detail: string };
};

export class RequestController {
   private apiContext = {
      baseURL: 'https://reqres.in',
      extraHTTPHeaders: {
         'content-type': 'application/json',
         'Content-Length': '0',
      },
   };

   private async handleResult(
      data: APIResponse,
      options: {
         assertErr?: boolean;
         method: 'GET' | 'POST' | 'PUT' | 'DELETE';
      },
   ): Promise<TApiRes> {
      const ok = data.ok(),
         status = data.status(),
         url = data.url();
      const assertErr = options.assertErr ?? true;
      let json;

      try {
         json = await data.json();
      } catch (err) {
         json = { error: 'received HTML instead JSON', log: err };
      }

      const message = `METHOD:${
         options.method
      } URL:${url} STATUS:${status} JSON:${JSON.stringify(json, null, 4)}`;

      if (assertErr) {
         const errs = ['error', 'errors', 'Error', 'Errors', 'ERROR', 'ERRORS'];

         await expect(ok, message).toBe(true);

         for (const err of errs) {
            await expect(json, message).not.toHaveProperty(err);
         }
      }

      return { ok, status, json, url, message };
   }

   protected async get(path: string, options?: { assertErr?: boolean }): Promise<TApiRes> {
      const context = await request.newContext(this.apiContext);
      const res = await context.get(path);

      return await this.handleResult(res, { assertErr: options?.assertErr, method: 'GET' });
   }

   protected async post(
      path: string,
      options?: { payload?: any; assertErr?: boolean },
   ): Promise<TApiRes> {
      const context = await request.newContext(this.apiContext);
      const res = await context.post(path, { data: options?.payload || {} });

      return await this.handleResult(res, { assertErr: options?.assertErr, method: 'POST' });
   }
}
