import crypto from 'crypto';
import { IPokemons, IUsers } from './interfaces';

const id = crypto.randomBytes(8).toString('hex');

export const pokemons: IPokemons = {
   pikachu: { name: 'Pikachu', number: '#025' },
   sentret: { name: 'Sentret', number: '#161' },
   dewott: { name: 'Dewott', number: '#502' },
   jigglypuff: { name: 'Jigglypuff', number: '#039' },
};

export const users: IUsers = {
   invalid: { name: `Incorrect_${id}`, password: 'INCO@@94' },
};
