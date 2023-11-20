export default {
  class: 'thief',

  hp: 20,

  str: 3,
  spd: 5,
  eva: 30,
  crit: 50,
  // choose target with the least health
  chooseTarget: function([first, second, ...otherTargets]) {
    if (second === undefined) return first; //we've filtered out all higher hp targets

    return this.chooseTarget([first.hp < second.hp ? first : second, ...otherTargets]) },
}
