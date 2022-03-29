import { expect, test } from '@playwright/test';
import { PokemonsRequest } from '../../src/api/endpoints/pockemons/request';
import { PokemonByIdRequest } from '../../src/api/endpoints/pockemon-by-id/request';
import { getNewPokemon } from '../../src/api/test-data';

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

   test(`API-3 GET /pockemon/{id}, User can get Pokemon details by id`, async ({ request }) => {
      const pokemonByIdRequest = new PokemonByIdRequest(request);
      const { ok, json } = await pokemonByIdRequest.getPokemon('1');

      await expect.soft(ok).toBe(true);
      await expect.soft(json.data).toMatchObject({
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
      const { ok, json, status } = await pokemonsRequest.createPokemon(newPokemonPayload);

      await expect.soft(ok).toBe(true);
      await expect.soft(status).toBe(201);
      await expect.soft(json.data).toMatchObject(newPokemonPayload);
      await expect.soft(json.id.length).toBeGreaterThan(1);
   });
});
