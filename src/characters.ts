import { adviser } from './adviser.js';
import { fighter } from './fighter.js';
import { king } from './king.js';
import { squire } from './squire.js';

const characters = [
    new king('Joffrey', 'Baratheon', 54, 4),
    new fighter('Jaime', 'Lannister', 35, 'AK47', 8),
    new fighter('Daenerys', 'Targaryen', 28, 'destornillador', 7),
    new adviser('Tyrion', 'Lannister', 60, 'Daenerys'),
    new squire('Bronn ', '', 60, 'Jaime', 6),
];

characters[3].adviser = characters[2];

//characters[4].protector = characters[1];
//jof se ha hecho amigo de pepe, pepe no es amigo de joff

//console.log(characters); eso lo importamos en el index.html
