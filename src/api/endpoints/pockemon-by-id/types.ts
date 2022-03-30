import type { TPokemon } from '../pockemons/types';

export type TPokemonId = {
   data: TPokemon;
   support: {
      url: string;
      text: string;
   };
};
