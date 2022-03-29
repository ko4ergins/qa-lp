import { RequestController } from '../../controller';
import { TPokemons } from './types';

export class PokemonsRequest extends RequestController {
   async getPokemons() {
      const res = await this.get('/api/pokemons');
      return { ...res, json: res.json as TPokemons };
   }
}
