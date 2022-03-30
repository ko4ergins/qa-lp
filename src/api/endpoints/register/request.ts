import { RequestController } from '../../controller';
import { TUserData, TCreateRes } from './types';

export class RegisterRequest extends RequestController {
   async registerUser(data: TUserData) {
      const res = await this.post('/api/register', { payload: data });
      return {
         ...res,
         json: res.json as TCreateRes,
      };
   }
}
