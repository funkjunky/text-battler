// TODO: this is shady,.... cute but shady...
export const AttackResultType = {
  crit: (attacker, defender, dmg) => `${attacker.name} CRIT ${defender.name} for ${dmg} dmg (${defender.name} hp:${defender.hp})`,
  hit:  (attacker, defender, dmg) => `${attacker.name} hit ${defender.name} for ${dmg} dmg (${defender.name} hp:${defender.hp})`,
  miss: (attacker, defender) => `${attacker.name} ~missed~ ${defender.name}`,
}

// Prototype This is to tell another function to replace the value with the current tick.
const FILL_IN_TICK = 'FILL_IN_TICK';

export const logAttack = ({ attacker, defender, type, dmg }, log = console.log) => {
  log(type(attacker, defender, dmg));
  if (dmg && defender.hp <= 0) log('~~' + defender.name + ' HAS FAINTED!!');
};

export const attack = (attacker, defender) => {
  const result = { attacker, defender };

  if (doesAttackerCrit(attacker, defender))  {
    const dmg = attacker.str * 2;
    defender.hp -= dmg;
    defender.tickLastHitByCrit = FILL_IN_TICK;
    // TODO: return type seems wordy.... can i make it nicer?
    return { ...result, type: AttackResultType.crit, dmg };
  }
  else if (doesAttackerHit(attacker, defender)) {
    const dmg = attacker.str - Math.floor(Math.random() * (attacker.str / 2))
    defender.hp -= dmg;
    return { ...result, type: AttackResultType.hit, dmg };
  }

  return { ...result, type: AttackResultType.miss };
};

export const doesAttackerHit = (attacker, defender) => {
  return Math.random() * 100 / defender.eva > 1;
}

export const doesAttackerCrit = (attacker, defender) => {
  return Math.random() * 100 / attacker.crit < 1;
}
