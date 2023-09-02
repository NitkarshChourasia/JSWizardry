/*
####  Digits Battle!  ####

Starting from the left side of an integer, adjacent digits pair up in "battle" and the larger digit wins. If two digits are the same, they both lose. A lone digit automatically wins.
Create a function that returns the victorious digits.
To illustrate:
___
battleOutcome(578921445) ➞ 7925
// [57]: 7 wins; [89] 9 wins; [21] 2 wins;
// [44] neither wins; 5 (automatically) wins
_____



[Examples]

___
battleOutcome(32531) ➞ 351
// 3 deffeats 2, 5 defeats 3, 1 is a single.

battleOutcome(111) ➞ 1
// 1 and 1 tie, so neither move on, last 1 is a single.

battleOutcome(78925) ➞ 895
_____



[Notes]

___
*) There are no winners in a battle with equal digits (neither should be printed).
*) If the length of the number is odd, the lone digit should be printed at the end of the number.
___



[games] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Used to return the largest of zero or more numbers.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of i …
_________

*/
//Your code should go here:

