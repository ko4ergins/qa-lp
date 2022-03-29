import type { APIRequestContext, APIResponse } from 'playwright';

export type TApiRes = { ok: boolean; json: any; status: number };
export type TApiErr = Omit<TApiRes, 'json'> & {
   json: { detail: string };
};

export class RequestController {
   constructor(private request: APIRequestContext) {}

   private async handleResult(data: APIResponse): Promise<TApiRes> {
      let json;

      try {
         json = await data.json();
      } catch (err) {
         json = { message: 'Received HTML instead JSON', error: err, text: await data.text() };
      }

      return { ok: data.ok(), status: data.status(), json };
   }

   async get(path: string): Promise<TApiRes> {
      const res = await this.request.get(path);
      return await this.handleResult(res);
   }
   async post(path: string, payload?: any): Promise<TApiRes> {
      const res = await this.request.post(path, { data: payload || {} });
      return await this.handleResult(res);
   }
}
