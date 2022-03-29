import { expect, test } from '@playwright/test';
import { PokemonsRequest } from '../../src/api/endpoints/pockemons/request';

test.describe('@API tests, playwright/request', () => {
   test.only(`API-1 GET /pockemons, User can get Pokemons`, async ({ request }) => {
      const pokemonsRequest = new PokemonsRequest(request);
      const { status, ok } = await pokemonsRequest.getPokemons();

      await expect.soft(status).toBe(200);
      await expect.soft(ok).toBe(true);
   });
});
