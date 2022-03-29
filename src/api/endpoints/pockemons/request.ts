import { RequestController } from '../../controller';
import { TPokemon, TPokemons } from './types';

export class PokemonsRequest extends RequestController {
   async getPokemons() {
      const res = await this.get('/api/pokemons');
      return { ...res, json: res.json as TPokemons };
   }

   async createPokemon(data) {
      const res = await this.post('/api/pokemons', { data });
      return {
         ...res,
         json: res.json as { data: Omit<TPokemon, 'id'>; id: string; createdAt: string },
      };
   }
}
