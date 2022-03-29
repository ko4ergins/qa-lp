import type { TPokemonInList } from '../pockemons/types';

export type TPokemon = {
   data: TPokemonInList;
   support: {
      url: string;
      text: string;
   };
};
