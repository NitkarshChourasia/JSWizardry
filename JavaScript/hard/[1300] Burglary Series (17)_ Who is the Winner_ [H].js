/*
####  Burglary Series (17): Who is the Winner?  ####

The fight between you and your spouse is over. Based on your perception of how the fight went, determine who won.
Given an object with three rounds, with nested objects as your points per round, determine the winner by counting who won the most rounds. The winner of the round is whoever scored the most points in that round. Draws are possible, both in rounds as in the final result.
___
*) If you won more rounds than your spouse, return "ME!"
*) If your spouse won more rounds, return "SPOUSE!"
*) If you are tied, return "NOBODY!"
___



[Examples]

___
determineWinnerOfFight({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 20,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
}) ➞ "NOBODY!"


determineWinnerOfFight({
  round1: {
    me: 40,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 10,
  },
  round3: {
    me: 9,
    spouse: 10,
  },
}) ➞ "SPOUSE!"
_____



[Notes]

N/A


[arrays] [loops] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop …
_________
_________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
_________
_________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
_________
_________
Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in …
_________
_________
Object Destructuring
https://www.javascripttutorial.net/es6/javascript-object-destructuring/
This tutorial introduces you to the JavaScript object destructuring that assigns properties of an object to individual variables.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final …
_________

*/
//Your code should go here:

