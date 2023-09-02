/*
####  Yahtzee Score Calculator  ####

In a Yahtzee game, the player has to score points rolling five dice trying to obtain a specific combination in every of the thirteen turns of the game.

If during a turn the rolled dice don't give a valid combination, the score for that turn will be equal to 0. If the total points scored during the first six turns are equal or greater than 63, an additional 35 points are added to the final score.
You are given an array arr that contains 13 arrays; each array is representing a set of five dice to check for the turn combination, accordingly to the order and to the description given in the above table. You have to implement a function that returns an integer being the final score made by the player.


[Example]

___
yahtzeeScoreCalc([
  [1, 3, 1, 1, 2], // Aces
  [1, 2, 4, 5, 6], // Twos
  [6, 3, 4, 3, 4], // Threes
  [3, 1, 1, 4, 4], // Fours
  [5, 5, 5, 5, 3], // Fives
  [6, 2, 6, 6, 6], // Sixes
  [1, 4, 4, 2, 1], // Three of a Kind
  [3, 3, 3, 3, 3], // Four of a Kind
  [2, 2, 1, 1, 2], // Full House
  [6, 1, 2, 3, 4], // Lower Straight
  [2, 3, 5, 4, 1], // Higher Straight
  [4, 4, 4, 4, 4], // Yahtzee
  [3, 3, 4, 5, 6], // Chance
]) ➞ 279

// Turn 1 ➞ There are 3 dice showing "1" ➞ 3 pts.
// Turn 2 ➞ There is 1 die showing "2" ➞ 2 pts.
// Turn 3 ➞ There are 2 dice showing "3" ➞ 6 pts.
// Turn 4 ➞ There are 2 dice showing "4" ➞ 8 pts.
// Turn 5 ➞ There are 4 dice showing "5" ➞ 20 pts.
// Turn 6 ➞ There are 4 dice showing "6" ➞ 24 pts.
// Turn 7 ➞ There aren't at least 3 dice the same ➞ 0 pts.
// Turn 8 ➞ There are 4 dice the same ➞ 15 pts. (sum of all dice)
// Turn 9 ➞ There is a Full House (two "1" and three "2") ➞ 25 pts.
// Turn 10 ➞ There is a Lower Straight (1,2,3,4) ➞ 30 pts.
// Turn 11 ➞ There is a Higher Straight (1,2,3,4,5) ➞ 40 pts.
// Turn 12 ➞ Yahtzee!!! There are 5 dice the same ➞ 50 pts.
// Turn 13 ➞ Sum of all dice ➞ 21 pts.

// The sum of the points made in the first six turns is:
// 3 + 2 + 6 + 8 + 20 + 24 = 63
// There is a bonus of 35 points
// The sum of the points made in the other seven turns is:
// 0 + 15 + 25 + 30 + 40 + 50 + 21 = 181

// The total is equal to:
// 63 + 35 + 181 = 279
_____



[Notes]

___
*) When playing to obtain a Three of a Kind, you have to search for at least three dice the same, and not exactly three. The same rule is applied to the Four of a Kind combination and to the Lower Straight combination (that is valid also if is obtained through a Higher Straight)
*) A Full House is valid if it's obtained with a combination of two different values: five dice the same are not a Full House.
*) Obviously, this is a version of Yahtzee adapted for this specific challenge: you can find the official rules (and a clearer table) in the Resources tab.
___



[arrays] [data_structures] [games] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Yahtzee
https://en.wikipedia.org/wiki/Yahtzee
A dice game made by Milton Bradley (now owned by Hasbro), which was first marketed as Yatzie by the National Association Service of Toledo, Ohio, in the early 1940s. Ya …
_________

*/
//Your code should go here:

