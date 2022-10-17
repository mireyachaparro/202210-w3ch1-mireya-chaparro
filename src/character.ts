import { king } from './king.js';
import { adviser } from './adviser.js';
import { fighter } from './fighter.js';
import { squire } from './squire.js';

export class Character {
    name: string;
    family: string;
    age: number;
    lifeStatus: boolean;
    message: string;
    static serie = 'Game of Thrones';
    adviser: king | fighter | adviser | squire | null;
    protect: fighter | null;
    constructor(name: string, family: string, age: number) {
        //no se le pasa el estado porque al principio siempre va a estar vivo
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = '';
        this.adviser = null;
        this.protect = null;
    }
    comunicate() {
        return this.message;
    }

    dead() {
        this.lifeStatus = false;
    }
}

//comunicarse es un metodo, es un console log que es un return
