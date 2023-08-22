/*
####  Cup Swapping  ####

There are three cups on a table, at positions A, B, and C. At the start, there is a ball hidden under the cup at position B.

However, I perform several swaps on the cups, which is notated as two letters. For example, if I swap the cups at positions A and B, I could notate this as AB or BA.
Create a function that returns the letter position that the ball is at, once I finish swapping the cups. The swaps will be given to you as an array.


[Worked Example]

___
cupSwapping(["AB", "CA", "AB"]) ➞ "C"

// Ball begins at position B.
// Cups A and B swap, so the ball is at position A.
// Cups C and A swap, so the ball is at position C.
// Cups A and B swap, but the ball is at position C, so it doesn't move.
_____



[Examples]

___
cupSwapping(["AB", "CA"]) ➞ "C"

cupSwapping(["AC", "CA", "CA", "AC"]) ➞ "B"

cupSwapping(["BA", "AC", "CA", "BC"]) ➞ "A"
_____



[Notes]

___
*) A swap could be notated in two different ways, since both ways end up with the same outcome.
*) All swaps will be notated as capital letters and will be valid.
*) You cannot swap a cup with itself.
___



[algorithms] [interview] [logic] 



-------------------------------------------------------------------
[Resources]
_________
includes() Method
https://www.w3schools.com/jsref/jsref_includes.asp
Determines whether a string contains the characters of a specified string. This method returns true if the string contains the characters, and false if not. Note: The …
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string …
_________

*/
//Your code should go here:

