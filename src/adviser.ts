import { Character } from './character.js';

export class adviser extends Character {
    advise: string;
    constructor(name: string, family: string, age: number, adviser: string) {
        super(name, family, age);
        this.advise = adviser;
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
    }
}
