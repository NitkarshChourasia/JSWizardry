/*
####  Look and Say Numbers  ####

Given an integer, return a new integer according to the rules below:
___
*) Split the number into groups of two digit numbers. If the number has an odd number of digits, return "invalid".
*) For each group of two digit numbers, concatenate the last digit to a new string the same number of times as the value of the first digit.
*) Return the result as an integer.
___

___
lookAndSay(3132) ➞ 111222

// By reading the number digit by digit, you get three "1" and three "2".
// Therefore, you put three ones and three two's together.
// Remember to return an integer.
_____



[Examples]

___
lookAndSay(95) ➞ 555555555

lookAndSay(1213141516171819) ➞ 23456789

lookAndSay(120520) ➞ 200

lookAndSay(231) ➞ "invalid"
_____



[Notes]

___
*) Note that the number 0 can be included (see example #3).
*) Check the Resources tab for a TED-Ed video for extra clarity.
___



[algorithms] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
Look and Say Sequences
https://www.youtube.com/watch?v=LpjX3kHXcR0
1, 11, 21, 1211, 111221. These are the first five elements of a number sequence. Can you figure out what comes next? Alex Gendler reveals the answer and explains how be …
_________
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
String.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString
Returns a string representing the specified object.
_________

*/
//Your code should go here:

