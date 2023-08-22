/*
####  Uno (Part 1)  ####

This question is inspired by the popular Uno card game.
Write a function that takes in two arguments: (1) a player's current hand and (2) the current face-up card on the table. The function will return true if the player can make a play, or false if the player has to draw from the deck.
A player can make a play if either:
___
*) They have a card that is the same color as the face-up card.
*) They have a card that is the same number as the face-up card.
___

___
canPlay(["yellow 3", "yellow 7", "blue 8", "red 9", "red 2"], "red 1") => true
// Since the player has two red cards, and the face-up card is red.

canPlay(["yellow 3", "yellow 7"], "blue 7") => true
// Since the player has a 7, and the face-up card is a 7.
_____



[Examples]

___
canPlay(["yellow 3", "yellow 5", "red 8"], "red 2") ➞ true

canPlay(["yellow 3", "yellow 5", "red 8"], "blue 5") ➞ true

canPlay(["yellow 3", "blue 5", "red 8", "red 9"], "green 4") ➞ false

canPlay(["yellow 3", "red 8"], "green 2") ➞ false
_____



[Notes]

___
*) Return false if the player is not holding any cards (an empty array).
*) There are no special cards or wild cards in this deck.
___



[arrays] [games] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an el …
_________
_________
Array.prototype.map()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

