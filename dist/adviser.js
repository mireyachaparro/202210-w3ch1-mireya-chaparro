import { Character } from './character.js';
export class adviser extends Character {
    constructor(name, family, age, adviser) {
        super(name, family, age);
        this.advise = adviser;
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
    }
}
