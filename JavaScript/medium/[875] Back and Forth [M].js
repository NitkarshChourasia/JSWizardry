/*
####  Back and Forth  ####

In a board game, a player may pick up a card with several left or right facing arrows, with the number of arrows indicating the number of tiles to move. The player should move either left or right, depending on the arrow's direction.
Given an array of the arrows contained on a player's cards, return a singular string of arrowheads that are equivalent to all of the arrowheads.


[Worked Example]

___
calculateArrowhead([">>", "<<", "<<<"]) ➞ "<<<"
// >> means to move 2 places right
// << means to move 2 places left (cancelling out >>)
// <<< means to move a further 3 places left
// overall, the movement can be written as <<<
_____



[Examples]

___
calculateArrowhead([">>>>", "<", "<", "<"]) ➞ ">"

calculateArrowhead([">", "<", ">>", "<", "<<<"]) ➞ "<<"

calculateArrowhead([">>>", "<<<"]) ➞ ""
_____



[Notes]

Return an empty string if all the arrowheads cancel out.


[algorithms] [arrays] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
String.prototype.matchAll()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
Returns an iterator of all results matching a string against a regular expression, including capturing groups.
_________

*/
//Your code should go here:

