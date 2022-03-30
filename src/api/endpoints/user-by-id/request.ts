import { RequestController } from '../../controller';
import { TUserData, TCreateUserRes } from '../users/types';

export class UserByIdRequest extends RequestController {
   async updateUser(id: number | string, data: Partial<TUserData>) {
      const res = await this.post(`/api/users/${id}`, { payload: data });
      return {
         ...res,
         json: res.json as TCreateUserRes,
      };
   }
   async getUser(id: number | string) {
      const res = await this.get(`/api/users/${id}`);
      return {
         ...res,
         json: res.json as TCreateUserRes,
      };
   }
}
