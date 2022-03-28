export interface IPokemon {
   name: string;
   number: string;
}
export interface IPokemons {
   [key: string]: IPokemon;
}

export interface IUser {
   name: string;
   password: string;
}
export interface IUsers {
   [key: string]: IUser;
}
