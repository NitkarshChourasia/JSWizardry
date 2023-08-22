/*
####  Blackjack  ####

Create a function that takes an array of card numbers and checks if the sum of their value exceeds 21. If the sum exceeds 21, return true and if the sum is under or equal to 21, return false. Values of the cards are as follows:
___
*) 2-10 are their value.
*) J-K (face cards) count as 10.
*) Aces count either as 1 or 11 - play conservatively, so that if giving an ace a value of 11 causes you to lose and 1 allows you to win, then go with 1.
___



[Examples]

___
overTwentyOne([2, 8, "J"]) ➞ false

overTwentyOne(["A", "J", "K"]) ➞ false

overTwentyOne([5, 5, 3, 9]) ➞ true

overTwentyOne([2, 6, 4, 4, 5]) ➞ false

overTwentyOne(["J", "Q", "K"]) ➞ true
_____



[Notes]

There will be a maximum of one ace in each hand.


[arrays] [conditions] [games] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Blackjack Rules
https://bicyclecards.com/how-to-play/blackjack/
If you don't know when the user wins or not, see the "Object of the Game" section, so you can understand how to use Aces.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

