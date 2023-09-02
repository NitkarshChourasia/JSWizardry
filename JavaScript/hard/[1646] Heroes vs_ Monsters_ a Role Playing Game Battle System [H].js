/*
####  Heroes vs. Monsters: a Role Playing Game Battle System  ####

You are implementing a battle system for a simple role-playing game. A hero is fighting various monsters, and you have to determine the battle's outcome for each engaged skirmish. Hero and monsters share some stats:
___
*) HP or Health Points: The amount of damage the character can sustain. If it reaches 0 (or less) the character dies.
*) ATT or Attack: The character offensive capacity.
*) DEF or Defense: The character defensive capacity.
___

For either hero and monster, the damage inflicted is calculated subtracting the opponent's defense score from the attacker doubled attack score.
In each round hero attacks first, and his damage rate is subtracted from the monster's HP. If the monster survives (HP > 0), it is his turn to attack. If the hero survives (HP > 0), a new round starts. The hero can also have some POT, or Healing Potions, in his backpack: only when his HP is equal to or lower than 10, a potion can (and must) be used for regaining 10 HP at the start of a new round. When the hero heals, he can't attack, but he receives only half damage from the monster's attack. Every potion can be used only once, then it must be discarded.
Given an object containing the character's stats (with p-prefix ones being the hero's stats and m-prefix ones being the monster's) you must return a string:
___
*) "Victory in x rounds" if the hero wins.
*) "Game Over in x rounds" if the monster wins.
___

(with x being the number of rounds elapsed)


[Examples]

___
battle({
  pHP: 12,
  pATT: 10,
  pDEF: 10,
  pPOT: 0,
  mHP: 20,
  mATT: 6,
  mDEF: 14
}) ➞ "Victory in 4 rounds"

// Hero's damage rate = (10 * 2) - 14 = 6
// Monster's damage rate = (6 * 2) - 10 = 2
// Round 1: mHP - 6 = 14, pHP - 2 = 10
// Round 2: No potions to use! mHP - 6 = 8, pHP - 2 = 8
// Round 3: mHP - 6 = 2, pHP - 2 = 6
// Round 4: mHP - 6 = -4 ... monster is dead

battle({
  pHP: 10,
  pATT: 10,
  pDEF: 10,
  pPOT: 2,
  mHP: 10,
  mATT: 8,
  mDEF: 14
}) ➞ "Victory in 3 rounds"

// Hero's damage = 6, monster's damage = 6
// Round 1: mHp - 6 = 4, pHP - 6 = 4
// Round 2: Player uses a potion, heals 10 HP, receive half the monster damage, pHP = 11
// Round 3: mHP - 6 = -2 ... monster is dead

battle({
  pHP: 12,
  pATT: 7,
  pDEF: 6,
  pPOT: 2,
  mHP: 30,
  mATT: 8,
  mDEF: 10
}) ➞ "Game Over in 5 rounds"

// Hero's damage rate = 4, Monster's damage rate = 10
// Round 1: mHP - 4 = 26, pHP - 10 = 2
// Round 2: Hero heals 10 hp, monster hit for 5 HP, pHP = 7
// Round 3: Hero heals 10 hp, monster hit for 5 HP, pHP = 12
// Round 4: mHP - 4 = 22, pHP - 10 = 2
// Round 5: No potions to use! mHP - 4 = 18, pHP - 10 = -8 ... hero is dead
_____



[Notes]

___
*) Hero attacks (or heals) first in each round.
*) A potion must be used when HP is equal to or less than 10, except on the first round.
*) When the hero uses a potion, he can't attack the monster in the same round, but he can defend from the monster's attack, receiving only half the damage.
*) Remember to discard the potion after using it.
___



[conditions] [games] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
_________
While Statement
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
_________
_________
JavaScript Object Literal
https://www.dyn-web.com/tutorials/object-literal/
A comma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global v …
_________

*/
//Your code should go here:

