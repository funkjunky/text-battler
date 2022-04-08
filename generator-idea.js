// So initially I thought of "yielding" a number, to say how many ticks, or how much time to wait till we do the next thing in the generator
// Then I thought of other pieces, like yielding a generator function, until the generator finishes
// Or yield a boolean, which could perhaps pause the generator?
// Or perhaps a string that could add to a tally, like if you're waiting for various generators to return 10 tokens
//
// Honestly the numebr is the most interesting probably

const knight = { ticksToWait: 10, ticksToSwing: 5, ticksToRecover: 2 };
const knightAttack = enemy =>* {
  yield knight.ticksToWait; //So we wouldn't continue this generator until after 10 ticks
  swing(knight, enemy); //The immediate effect.
  yield knight.ticksToSwing; //We wouldn't continue this until after 5 ticks
  hit(knight, enemy);
  yield* hpDrain(knight, enemy); //This could then run this generator until it exits, perhaps for a DoT
  // What's extra fun, is that hpDrain could have an unrelated condition, like keep draining until the enemy is no longer in range.
  // So in the above case it could go on forever... maybe the enemy wants the knight to be locked in...
  // because the drains effects are weaker then what the enemy will do to the knight
  yield knight.ticksToRecover;
  return knight; // this could perhaps release the knight, so it can take another action. Or release the "attack" option.
}

// This could be handyb for like planetarion with many ships slowly moving through space, or waiting an hour for a new report of space battles. or resource collection
//
// TODO: compare this to how I made 'effect-tick'

// Another idea. Use this kinda stuff for a code camp kinda game!
// students are provided with functions and resources and they can program interactions and results.
// So it would always be in the form of a function, like "({ weapons, characters, fireballSpell })"
// Perhaps they could console log to see what's inside?? Like a simulate
// OH AND maybe we could error and say "you need to provide a value"  if we have a function that requires a value, like guessing the side effect of an enemya.... hmmmm maybe when we provide a "response" function or something??
// another example ({ ingredients, recipe, utensils, kitchen }) :p Cooking a meal would be a good example of how explicit one needs to be
// Cooking could also be a good example of reducing a problem down to one it's already solved. Ie. the boiling water scenario
//
// Then the students could have fun playing a sort of PvE MMO through javascript!!!!! Wouldn't that be rad?!
// text based JS evaled MMO w their friends!! It could maybe even be non-fighting... like running a resto, or a market village or something!
