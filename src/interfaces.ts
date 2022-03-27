export interface IPokemon {
   name: string;
   number: string;
}

export interface IPokemons {
   [key: string]: IPokemon;
}
