import { produce } from 'immer';

import { attack, logAttack } from './mutations/attack.js';

export default (combatants, duration = 100) => produce(combatants, ({ knightPerson, thiefPerson }) => {
  // loop counting to *duration*, and if mod the characters speed (+5) is 0, then they attack!
  for(let ticksPassed=1; ticksPassed <= duration; ++ticksPassed) {
    if (ticksPassed % (knightPerson.spd + 5) === 0) {
      logAttack(attack(knightPerson, thiefPerson));
    }
    if (ticksPassed % (thiefPerson.spd + 5) === 0) {
      logAttack(attack(thiefPerson, knightPerson));
    }
  }
});
