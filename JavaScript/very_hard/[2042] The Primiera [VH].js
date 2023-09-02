/*
####  The Primiera  ####

Primiera (from the french word prime, "prize") is a combination of cards of Scopa, a popular Italian card game.
For establishing the value of the Primiera, a separate point scale is used for selecting the best cards in the player's deck, in each of the four suits and totaling those four cards point values. A Primiera requires at least one card for each suit, otherwise, it can't be calculated.
This is the Primiera points scale:
___
*) 7 is worth 21 points.
*) 6 is worth 18 points.
*) Ace is worth 16 points.
*) Cards from 2 to 5 are worth 10 points plus the card value.
*) Face cards (Jack, Queen and King) are worth 10 points.
___

Create a function that takes in an array representing a cards deck and returns the value of the Primiera.


[Examples]

___
getPrimieraScore(["Ad", "7d", "5h", "2c", "Ks"]) ➞ 58
// In the diamonds set 7 is higher than Ace (21 > 16).

getPrimieraScore(["2d", "Jd", "7h", "Qc", "5s", "As"]) ➞ 59
// In the diamonds set 2 is higher than Jack (12 > 10), while in
// the spades set Ace is higher than 5 (16 > 15 ).

getPrimieraScore(["2d", "Jd", "Qc", "5s", "As"]) ➞ 0
// There aren't cards in the hearts set, so Primiera can't be
// calculated.
_____



[Notes]

___
*) Notation: Ace, card numbers from 2 to 7, Jack, Queen or King + diamonds, hearts, clubs or spades.
*) If one or more seeds are missing from the deck the value of the Primiera is equal to 0.
___



[arrays] [conditions] [games] 



-------------------------------------------------------------------
[Resources]
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of zero or more numbers.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Scopa
https://en.wikipedia.org/wiki/Scopa
An Italian card game, and one of the two major national card games in Italy.[1] It is also popular in Brazil, brought in by Italian immigrants, mostly in the Scopa di Q …
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________

*/
//Your code should go here:

