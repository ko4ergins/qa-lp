import { APIRequestContext, APIResponse, expect } from '@playwright/test';

export type TApiRes = { message: string; url: string; ok: boolean; json: any; status: number };
export type TApiErr = Omit<TApiRes, 'json'> & {
   json: { detail: string };
};

export class RequestController {
   constructor(private request: APIRequestContext) {}

   private async handleResult(data: APIResponse, assertErr = true): Promise<TApiRes> {
      const ok = data.ok(),
         status = data.status(),
         url = data.url();
      let json;

      try {
         json = await data.json();
      } catch (err) {
         json = { error: 'received HTML instead JSON', log: err };
      }

      const message = `URL: ${url} STATUS: ${status} JSON: ${JSON.stringify(json, null, 4)}`;

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
      const res = await this.request.get(path);
      return await this.handleResult(res, options?.assertErr);
   }
   protected async post(
      path: string,
      options?: { payload?: any; assertErr?: boolean },
   ): Promise<TApiRes> {
      const res = await this.request.post(path, { data: options?.payload || {} });
      return await this.handleResult(res, options?.assertErr);
   }
}
