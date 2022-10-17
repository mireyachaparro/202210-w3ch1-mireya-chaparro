import { Character } from './character.js';
export class squire extends Character {
    constructor(name, family, age, protector, makeBall) {
        super(name, family, age);
        this.protector = protector;
        this.makeBall = makeBall;
        this.message = 'Soy un loser';
    }
}
