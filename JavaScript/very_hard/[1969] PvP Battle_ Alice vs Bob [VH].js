/*
####  PvP Battle: Alice vs Bob  ####

Having gotten rather sick of always being paired together in sciency literature, Alice and Bob have decided to finally settle their differences with a magical duel. They'll each learn some skills and then battle it out.


[Your Goal]

Your job is to write the class Player which will handle all the combat mechanics.


[Properties]

Let's look at the Player class's properties first. You'll need:
___
*) A private health variable hp. Make sure it's private!
*) A private maxHealth variable maxHp. Again, make sure it's private.
*) A private energy variable en. Again, make sure it's private.
*) A private maxEnergy variable maxEn. You know the drill by now.
*) Getters and setters for health and energy:
These should be named hp and en, respectively.
They should be "capped". That is, you cannot have less than 0 health or energy, and your health and/or energy cannot be greater than their respective "max" values.
*) An armor value. This is public.
*) A name. This is also public.
*) A getter for health percent, called hpPerc. Please return this value rounded to two decimal places.
___

Now that that's out of the way, let's look at our single method (other than the aforementioned getters and setters):



[learnSkill() Method]

Your class must implement a single method called learnSkill.


[Basics/Functionality]

This method takes two parameters: a skill name (e.g., "fireball"), and an object containing skill statistics (more on that below!).
Most importantly, after adding a skill:
___
alice.learnSkill("fireball",{ //stats (see below)})
_____

you should then be able to call that skill as you'd normally call a method on your Player instance, with the target passed as a parameter:
___
alice.fireball(bob);
_____

where the name of the method is merely the skill name passed in. Keep in mind that some skills may have two-part names, so you'll need to factor that in when creating your method.
In general, using the skill should return a string describing what happened, as well as changing the relevant numbers on both the target and "caster".


[stats Object]

Your stats object has the following properties:
___
{
    damage: the raw damage done (assuming 0 effective armor),
    description: the description of the attack (for humans to read),
    penetration: Armor penetration amount (see "Armor" below),
    cost: Cost, in energy points,
    heal: Optional heal value (some skills heal the caster on cast!)
}
_____



[Logic]

Armor: Your learnSkill method will start out by subtracting an armor penetration stat from the target's armor value to get an "effective armor" value. That is, if Alice attacks Bob with a skill with 5 armor penetration, and Bob's armor is 50, then Bob's effective armor for this attack is 50-5 = 45.
Energy: If the skill costs more energy than the character currently has, return (player name) attempted to use (skill name), but didn't have enough energy!. Otherwise, subtract the energy cost from the character's energy, and continue.
Damage: Damage here is pretty easy. Consider that the minimum armor value is 0, the maximum is 100, and each percent effective armor decreases damage by one percent. An example:
___
Alice attacks Bob for 50 damage. Bob's effective armor rating is 25.
Alice does 50*((100-25)/100) = 37.5 damage.
_____

Attack String: You'll need to return a string describing what happened. The first part of the returned string should describe the attack itself, and should look like this: (attacking player name) used skill (skill name), (skill description), against (target name), doing (calculated damage) damage!. For the damage calculation, please round your value to two decimal places.
Next, if the skill healed, append (attacking player name) healed for (heal amount) health..
Finally, if the target player died, append (target name) died.. Otherwise, append (target name is at (targ hpPerc) % health.
Return this string, and don't forget to actually apply the damage/health changes!


[Example]

___
const alice = new Player("Alice", 110, 50, 10)
const bob = new Player("Bob", 100, 60, 20)

alice.learnSkill("fireball", {
    damage: 23,
    penetration: 1.2,
    heal: 5,
    cost: 15,
    desc: "a firey magical attack"
})

console.log(alice.fireball(bob))
// Alice used fireball, a firey magical attack, against Bob, doing
// 18.68 damage! Alice healed for 5 health! Bob is at 81.32% health.

bob.learnSkill("superbeam", {
  damage:200,
  penetration:50,
  heal:50,
  cost:75,
  desc: "an overpowered attack, pls nerf"
})

console.log(bob.superbeam(alice))
// Bob attempted to use superbeam, but didn't have enough energy!
_____



[Notes]

___
*) In many fighting games, skills "pick" from a range of possible damage values. For the sake of simplicity (and testing!), assume that each skill does a specific, set damage number (factoring everything else in, of course).
*) Don't worry about preventing a "dead" player from attacking.
*) Pay very close attention to the exact format of the returned "attack" string! I'm comparing that directly with an expected result string, so even something like a missing space could ruin your answer.
*) Your Player instances will be constructed as new Player(name,health,energy,armor)
___



[classes] [games] [logic] [objects] [scope] 



-------------------------------------------------------------------
[Resources]
_________
Private Class Fields
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
Class properties are public by default and can be examined or modified outside the class. There is however a stage 3 proposal to allow defining private class fields usi …
_________
_________
Classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
Are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics …
_________
_________
ES6 Class Syntax
https://coryrylan.com/blog/javascript-es6-class-syntax
A beginner overview tutorial of the ES6/ES2015 JavaScript Class syntax.
_________

*/
//Your code should go here:

