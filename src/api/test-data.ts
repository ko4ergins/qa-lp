import crypto from 'crypto';
import { TPokemon } from './endpoints/pockemons/types';

export function getNewPokemon(): Omit<TPokemon, 'id'> {
   return {
      name: crypto.randomBytes(8).toString('hex'),
      year: crypto.randomInt(4),
      color: crypto.randomBytes(3).toString('hex'),
      pantone_value: crypto.randomBytes(4).toString('hex'),
   };
}
