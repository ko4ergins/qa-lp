import { BaseRequest } from '../../controller';
import { TPokemonList } from './types';

export class PokemonsRequest extends BaseRequest {
   async getPokemons() {
      const res = await this.get('/api/pokemons');

      return { ...res, json: res.json as TPokemonList };
   }
}
