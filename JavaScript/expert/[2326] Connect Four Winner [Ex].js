/*
####  Connect Four Winner  ####

Connect Four is a two-player connection board game, in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid.
The game has two players: yellow and red while columns are named from "A" to "G". The first player who connects four items of the same color is the winner.

Create a function that takes an array of player positions showing the order of the pieces which are dropped in columns. Function should return "Yellow", "Red" or "Draw" accordingly.


[Examples]

___
connectFourWinner([
  "A_Red",
  "B_Yellow",
  "A_Red",
  "B_Yellow",
  "A_Red",
  "B_Yellow",
  "G_Red",
  "B_Yellow"
]) ➞ "Yellow"

// Yellow has 4 conescutive discs in column B
_____

___
connectFourWinner([
  "A_Red",
  "B_Yellow",
  "A_Red",
  "E_Yellow",
  "F_Red",
  "G_Yellow",
  "A_Red",
  "G_Yellow"
]) ➞ "Draw"
_____



[Notes]

N/A


[algorithms] [games] [logic] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Connect Four
https://en.wikipedia.org/wiki/Connect_Four
A two-player connection board game, in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended gri …
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________

*/
//Your code should go here:

