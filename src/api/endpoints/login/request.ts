import { RequestController } from '../../controller';
import { TUserData } from '../users/types';
import { TLoginUserRes } from './types';

export class LoginRequest extends RequestController {
   async loginUser(data: Partial<TUserData>) {
      const res = await this.post('/api/login', { payload: data, assertErr: false });
      return {
         ...res,
         json: res.json as TLoginUserRes,
      };
   }
}
