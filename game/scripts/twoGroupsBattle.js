import { produce } from 'immer';

import { attack, logAttack } from './mutations/attack.js';

const isTickToAttack = (ticksPassed, { spd }) => ticksPassed % (spd + 5) === 0;

// returns all non-allies as one array
const possibleTargets = (allies, groups) => // Note: I need to compare base refs, because Immer returns a new draft
  Object.values(groups).filter(({ members }) => members !== allies).map(({ members }) => members).flat().filter(p => !hasFainted(p));

// this is the default attack priority compare function
const defaultChooseTarget = (possibleTargets) => possibleTargets?.[0]

//cloned from scenario teambattle
const hasFainted = ({ hp }) => hp <= 0;

export default (groups, log, duration = 70) => produce(groups, groups => {
  for(let ticksPassed=1; ticksPassed <= duration; ++ticksPassed) {
    Object.values(groups).forEach(({ members }) => {
      members.forEach(person => {
        if(hasFainted(person)) return;

        if(isTickToAttack(ticksPassed, person)) {
          if(ticksPassed - person.tickLastHitByCrit < 5) {
            log(`* ${person.name} attack was cancelled *`);
            return;
          }

          const enemies = possibleTargets(members, groups);
          const target = person.chooseTarget?.(enemies) ?? defaultChooseTarget(enemies);
          logAttack(attack(person, target), log);
          // TODO: feels out of place...
          if (target.tickLastHitByCrit === 'FILL_IN_TICK') { //TODO: use const in attack.js
            target.tickLastHitByCrit = ticksPassed;
          }
        }
      })
    });
  }
});
