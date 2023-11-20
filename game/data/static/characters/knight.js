export default {
  class: 'knight',

  hp: 40,

  str: 5,
  spd: 10,   // inverse, so lower is better
  eva: 1,   // random
  crit: 20,  // random
  // this is the default attack priority compare function
  //attackPriorityCompare: (entityA, entityB) => 1,
}
