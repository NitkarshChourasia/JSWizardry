/*
####  Word Game Using First/Last Letter  ####

Create a function that takes an array of player 1's words p1 and an array of player 2's words p2. Player 1 will always play first and will give a word. Player 2 must then give another word that begins with the end letter of the last word used. The first player to use a duplicate word, or use a word that does not begin with the last word's end, loses.


[Examples]

___
wordGame(["edabit", "yellow", "growing"], ["tangy", "wedding", "round"]) ➞ "Player 1 wins!"
// Round does not begin with "g".

wordGame(["edabit", "yellow", "growing", "dart", "tangy"], ["tangy", "wedding", "ground", "toast", "yellow"]) ➞ "Player 2 wins!"
// Although player 2 repeated "yellow", player 1 repeated "tangy" first.

wordGame(["edabit", "yellow", "growing"], ["tangy", "wedding", "ground"]) ➞ "Game Continues..."
// No winner yet.
_____



[Notes]

All words will be lowercase and there will be equal words used by each player, regardless of whether a player has won.


[arrays] [games] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.findIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/findindex
Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
_________
_________
String.prototype.endsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
_________
_________
String.prototype.startsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
_________

*/
//Your code should go here:

