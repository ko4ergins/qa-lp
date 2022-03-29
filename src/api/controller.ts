import type { APIRequestContext, APIResponse } from 'playwright';

export type IApiRes = { ok: boolean; json: any; status: number };
export type IApiErr = Omit<IApiRes, 'json'> & {
   json: { detail: string };
};

export class BaseRequest {
   constructor(private request: APIRequestContext) {}

   private async makeRes(data: Pick<APIResponse, 'ok' | 'json' | 'status'>): Promise<IApiRes> {
      try {
         return { ok: data.ok(), status: data.status(), json: await data.json() };
      } catch (e) {
         throw new Error(e);
      }
   }

   async get(path: string): Promise<IApiRes> {
      const res = await this.request.get(path);
      console.log(await res.json(), 'QAQAQA');
      return await this.makeRes({ ...res });
   }
}
