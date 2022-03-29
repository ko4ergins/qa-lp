import { expect, test } from '@playwright/test';
import { PokemonsRequest } from '../../src/api/endpoints/pockemons/request';
import { PokemonByIdRequest } from '../../src/api/endpoints/pockemon-by-id/request';

test.describe('@API tests, playwright/request', () => {
   test(`API-1 GET /pockemons, User can get Pokemons`, async ({ request }) => {
      const pokemonsRequest = new PokemonsRequest(request);
      const { status, ok } = await pokemonsRequest.getPokemons();

      await expect.soft(status).toBe(200);
      await expect.soft(ok).toBe(true);
   });

   test(`API-2 GET /pockemon/{id}, User can not get Pokemon details when id is wrong`, async ({
      request,
   }) => {
      const pokemonByIdRequest = new PokemonByIdRequest(request);
      const { status, ok } = await pokemonByIdRequest.getPokemon('23');

      await expect.soft(status).toBe(404);
      await expect.soft(ok).toBe(false);
   });
});
