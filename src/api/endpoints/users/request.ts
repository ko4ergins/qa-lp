import { RequestController } from '../../controller';
import { TUserData, TCreateUserRes } from './types';

export class UsersRequest extends RequestController {
   async createUser(data: TUserData) {
      const res = await this.post('/api/users', { payload: data });
      return {
         ...res,
         json: res.json as TCreateUserRes,
      };
   }
}
