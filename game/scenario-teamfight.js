import { createKnight, createThief, createWarrior } from './data/static/characterCreators.js';
import twoGroupsBattle from './scripts/twoGroupsBattle.js';

// TODO: put these other functions into another file or files
const createGroup = (name, members) => ({ name, members });

//Group 1
const ToughGary = createKnight('Tough Gary', {
  hp: 60,
});
const SlipperySusan = createThief('Slippery Susan', {
  hp: 15,
  eva: 70,
});
const FuriousHelen = createWarrior('Furious Helen', {
  hp: 45,
  str: 15,
  spd: 7,
  eva: 0,
  crit: 5,
});
const rebels = createGroup('rebels', [ToughGary, SlipperySusan, FuriousHelen]);

//Group 2
const soldiers = createGroup('soldiers', [createKnight(), createKnight(), createKnight()]);

const report = (log = console.log) => {
  log('---');
  return log;
};

const hasFainted = ({ hp }) => hp <= 0;

const logGroupStatus = (group, log = report()) => {
  log('Group "' + group.name  + '":');
  const howManyFainted = group.members.filter(hasFainted).length;
  log(group.members.length + ' members - ' + (howManyFainted === 0 ? 'all well' : `${howManyFainted} Fainted!`));
  group.members.forEach(({ name, hp }) => log(name + ' - hp: ' + hp));
};

// TODO: The script is below... eventually, probably move most, if not everything above, out of this file
console.log('Group Battle - version 1 - April 7th, 2022');
logGroupStatus(rebels);
logGroupStatus(soldiers);

console.log('...');
console.log('then they fight!!!!');
console.log('...');

const result = twoGroupsBattle({rebels, soldiers}, report());

console.log('After the fight, the status of the two groups:');
logGroupStatus(result.rebels);
logGroupStatus(result.soldiers);
