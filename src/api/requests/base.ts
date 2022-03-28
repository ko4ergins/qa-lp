import type { APIRequestContext } from 'playwright';
import { IApiRes } from '../interfaces';

export abstract class BaseRequest {
   private apiPath = '/api';

   constructor(readonly request: APIRequestContext) {}

   async get(route: string): Promise<IApiRes> {
      const res = await this.request.get(this.apiPath + route);

      return { ok: res.ok(), json: await res.json(), status: res.status() };
   }
}
