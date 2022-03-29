export type TPokemonInList = {
   id: number;
   name: string;
   year: number;
   color: string;
   pantone_value: string;
};

export type TPokemons = {
   page: number;
   per_page: number;
   total: number;
   total_pages: number;
   data: TPokemonInList[];
   support: {
      url: string;
      text: string;
   };
};
