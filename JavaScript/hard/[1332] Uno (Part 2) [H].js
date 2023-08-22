/*
####  Uno (Part 2)  ####

This problem is a continuation of Uno Part 1 (although you don't need to complete that problem to complete this one).
It's your turn to play again. Create a function that takes as its arguments (1) your hand (an array of cards), and (2) the face-up card. In Uno, you are able to play a card from your hand if either:
___
*) One of the card colors in your hand matches the face-up card's color.
*) One of the card numbers in your hand matches the face-up card's number.
___

Write a function that will return:



[Examples]

___
decision(["yellow 3", "red 3"], "red 10") ➞ "Uno!"

decision(["blue 1"], "blue 5") ➞ "You won!"

decision(["blue 1", "green 2", "yellow 4", "red 2"], "blue 5") ➞ "Keep going..."
_____



[Notes]

There will not be more than one playable card in each hand.


[arrays] [conditions] [games] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
_________
_________
Uno
https://en.wikipedia.org/wiki/Uno_(card_game)
Is an American shedding-type card game that is played with a specially printed deck. The game's general principles put it into the Crazy Eights family of card games, an …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

