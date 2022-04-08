import { produce } from 'immer';

import { attack, logAttack } from './mutations/attack.js';

const isTickToAttack = (ticksPassed, { spd }) => ticksPassed % (spd + 5) === 0;

// TODO do engage later... for now just attack enemies.
// returns all non-allies as one array
const possibleTargets = (allies, groups) =>
  Object.values(groups).filter(group => group !== allies).map(({ members }) => members).flat().filter(p => !hasFainted(p));

const chooseRandomTarget = (possibleTargets) =>
  possibleTargets[Math.floor(Math.random() * possibleTargets.length)];

//cloned from scenario teambattle
const hasFainted = ({ hp }) => hp <= 0;

export default (groups, log, duration = 50) => produce(groups, groups => {
  // TODO: this is too many loops, I should break this up into functions
  for(let ticksPassed=1; ticksPassed <= duration; ++ticksPassed) {
    Object.values(groups).forEach(({ members }) =>
      members.forEach(person => {
        if(!hasFainted(person) && isTickToAttack(ticksPassed, person)) {
          const target = chooseRandomTarget(possibleTargets(members, groups));
          logAttack(attack(person, target), log);
        }
      })
    );
  }
});
