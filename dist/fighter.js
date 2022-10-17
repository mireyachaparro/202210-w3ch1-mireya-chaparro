import { Character } from './character.js';
export class fighter extends Character {
    constructor(name, family, age, weapon, skill) {
        super(name, family, age);
        this.weapon = weapon;
        this.skill = skill;
        this.message = 'Primero pego y luego pregunto';
    }
}
