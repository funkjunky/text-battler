import { createKnight, createThief } from './data/static/characterCreators.js';
import twoCharactersFighting from './scripts/twoCharactersFighting.js';

const knightPerson = createKnight();
const thiefPerson = createThief();

console.log('1v1 Battle - version 1 - late March?, 2022');
console.log('knight: ', knightPerson);
console.log('thief: ', thiefPerson);

console.log('...');
console.log('then they fight!!!!');
console.log('...');

const result = twoCharactersFighting({knightPerson, thiefPerson});

console.log('After the fight, the status of the two characters:');
console.log('knight: ', result.knightPerson);
console.log('thief: ', result.thiefPerson);
