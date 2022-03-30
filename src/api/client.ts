import { PokemonByIdRequest } from './endpoints/pockemon-by-id/request';
import { PokemonsRequest } from './endpoints/pockemons/request';
import { UserByIdRequest } from './endpoints/user-by-id/request';
import { UsersRequest } from './endpoints/users/request';
import { LoginRequest } from './endpoints/login/request';

class RequestClient {
   pokemonById = new PokemonByIdRequest();
   pokemons = new PokemonsRequest();
   userById = new UserByIdRequest();
   users = new UsersRequest();
   login = new LoginRequest();
}

export const request = new RequestClient();
