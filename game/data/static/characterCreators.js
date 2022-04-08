import { knight, thief, warrior } from './characters.js';

let namelessCount = 1;
export const createCharacter = (Class, name, adjustments) => {
  if (!name) name = Class.class + namelessCount++;

  return {
    ...Class,
    name,
    ...adjustments,
  };
};

export const createKnight = (name, adjustments) => createCharacter(knight, name, adjustments);
export const createThief = (name, adjustments) => createCharacter(thief, name, adjustments);
export const createWarrior = (name, adjustments) => createCharacter(warrior, name, adjustments);
