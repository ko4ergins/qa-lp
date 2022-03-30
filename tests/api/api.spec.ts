import { expect, test } from '@playwright/test';
import { request } from '../../src/api/client';
import { getNewPokemon, getNewUserCreds } from '../../src/api/test-data';

test.describe('@API tests, playwright/request', () => {
   test(`API-1 GET /pockemons, User can get Pokemons`, async () => {
      const { status, message } = await request.pokemons.getPokemons();

      await expect(status, message).toBe(200);
   });

   test(`API-2 GET /pockemon/{id}, User can not get Pokemon details when id is wrong`, async () => {
      const { status, ok, message } = await request.pokemonById.getPokemon('23');

      await expect(status, message).toBe(404);
      await expect(ok, message).toBe(false);
   });

   test(`API-3 GET /pockemon/{id}, User can get Pokemon details by id`, async () => {
      const { ok, json, message } = await request.pokemonById.getPokemon('1');

      await expect(ok, message).toBe(true);
      await expect(json.data, message).toMatchObject({
         color: '#98B2D1',
         id: 1,
         name: 'cerulean',
         pantone_value: '15-4020',
         year: 2000,
      });
   });

   test(`API-4 POST /pockemons, User can create new Pokemon`, async () => {
      const newPokemonPayload = getNewPokemon();
      const { json, status, message } = await request.pokemons.createPokemon(newPokemonPayload);

      await expect(status, message).toBe(201);
      await expect(json, message).toMatchObject(newPokemonPayload);
      await expect(json.id.length, message).toBeGreaterThan(1);
   });

   test(`API-5 POST /users, User can create new account`, async () => {
      const newUserPayload = getNewUserCreds();
      const { json, status, message } = await request.users.createUser(newUserPayload);

      await expect(status, message).toBe(201);
      await expect(+json.id, message).toBeGreaterThan(1);
      await expect(json.createdAt.length, message).toBeGreaterThan(1);
   });

   test(`API-6 PUT /users, User can update password`, async () => {
      const newUserPayload = getNewUserCreds();
      const { json: newUserRes } = await request.users.createUser(newUserPayload);
      const updatedUserRes = await request.userById.updateUser(newUserRes.id, {
         password: 'newPassword',
      });

      await expect(updatedUserRes.status, updatedUserRes.message).toBe(201);
      await expect(updatedUserRes.json.password, updatedUserRes.message).toBe('newPassword');

      const loginWithOldPasswordRes = await request.login.loginUser({
         password: newUserPayload.password,
         email: newUserPayload.email,
      });

      await expect(loginWithOldPasswordRes.status, updatedUserRes.message).toBe(400);
      await expect(loginWithOldPasswordRes.json, updatedUserRes.message).toMatchObject({
         error: 'user not found',
      });
   });

   test(`API-7 GET /pokemons, User can compare two pokemons`, async () => {
      const { json, message } = await request.pokemons.getPokemons();

      await expect(json.data[0], message).toMatchObject({
         id: json.data[1].id - 1,
         name: json.data[1].name,
      });
   });
});
