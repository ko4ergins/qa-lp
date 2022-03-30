import { expect, test } from '@playwright/test';
import { PokemonsRequest } from '../../src/api/endpoints/pockemons/request';
import { PokemonByIdRequest } from '../../src/api/endpoints/pockemon-by-id/request';
import { RegisterRequest } from '../../src/api/endpoints/register/request';
import { getNewPokemon, getNewUserCreds } from '../../src/api/test-data';

test.describe('@API tests, playwright/request', () => {
   test(`API-1 GET /pockemons, User can get Pokemons`, async ({ request }) => {
      const pokemonsRequest = new PokemonsRequest(request);
      const { status, ok, message } = await pokemonsRequest.getPokemons();

      await expect(status, message).toBe(200);
      await expect(ok, message).toBe(true);
   });

   test(`API-2 GET /pockemon/{id}, User can not get Pokemon details when id is wrong`, async ({
      request,
   }) => {
      const pokemonByIdRequest = new PokemonByIdRequest(request);
      const { status, ok, message } = await pokemonByIdRequest.getPokemon('23');

      await expect(status, message).toBe(404);
      await expect(ok, message).toBe(false);
   });

   test(`API-3 GET /pockemon/{id}, User can get Pokemon details by id`, async ({ request }) => {
      const pokemonByIdRequest = new PokemonByIdRequest(request);
      const { ok, json, message } = await pokemonByIdRequest.getPokemon('1');

      await expect(ok, message).toBe(true);
      await expect(json.data, message).toMatchObject({
         color: '#98B2D1',
         id: 1,
         name: 'cerulean',
         pantone_value: '15-4020',
         year: 2000,
      });
   });

   test(`API-4 POST /pockemons, User can create new Pokemon`, async ({ request }) => {
      const pokemonsRequest = new PokemonsRequest(request);
      const newPokemonPayload = getNewPokemon();
      const { ok, json, status, message } = await pokemonsRequest.createPokemon(
         newPokemonPayload,
      );

      await expect(ok, message).toBe(true);
      await expect(status, message).toBe(201);
      await expect(json, message).toMatchObject(newPokemonPayload);
      await expect(json.id.length, message).toBeGreaterThan(1);
   });

   test(`API-5 POST /register, User can create new account`, async ({ request }) => {
      const registerRequest = new RegisterRequest(request);
      const newUserPayload = getNewUserCreds();

      const { ok, json, status, message } = await registerRequest.registerUser(newUserPayload);

      await expect(ok, message).toBe(true);
      await expect(status, message).toBe(200);
      await expect(json.id, message).toBeGreaterThan(1);
      await expect(json.token.length, message).toBeGreaterThan(1);
   });
});
