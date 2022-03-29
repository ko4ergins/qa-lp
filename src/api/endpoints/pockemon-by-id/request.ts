import { RequestController } from '../../controller';
import { TPokemonId } from './types';

export class PokemonByIdRequest extends RequestController {
   async getPokemon(id: string) {
      const res = await this.get(`/api/pokemon/${id}`);
      return { ...res, json: res.json as TPokemonId };
   }
}