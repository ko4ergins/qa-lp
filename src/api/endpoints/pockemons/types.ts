export type TPokemon = {
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
   data: TPokemon[];
   support: {
      url: string;
      text: string;
   };
};
