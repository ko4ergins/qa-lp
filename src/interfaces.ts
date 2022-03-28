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

export interface IApiRes {
   ok: boolean;
   json: { [key: string]: any };
   status: number;
}
