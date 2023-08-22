/*
####  ASCII Charts (Part 1: Progress Bar)  ####

Given a character and a value between 0 and 100, return a string that represents a simple progress bar.
___
*) The value represents a percentage.
*) The bar should begin and end with "|"
*) Repeat the character to fill the bar, with each character equivalent to 10%
*) Use spaces to pad the bar to a length of 10 characters.
*) A single space comes after the bar, then a message with the % of completion (e.g. "Progress: 60%")
*) If the value is 100, the message should be "Completed!".
___



[Examples]

___
progressBar("#", 0) ➞ "|          | Progress: 0%"

progressBar("=", 40) ➞ "|====      | Progress: 40%"

progressBar("#", 60) ➞ "|######    | Progress: 60%"

progressBar(">", 100) ➞ "|>>>>>>>>>>| Completed!"
_____



[Notes]

N/A


[formatting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
Template literals (Template strings)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
String literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings" in prior …
_________
_________
String.prototype.padEnd()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the cu …
_________

*/
//Your code should go here:

