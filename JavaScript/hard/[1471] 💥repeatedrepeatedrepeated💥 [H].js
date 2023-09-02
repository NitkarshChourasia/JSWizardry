/*
####  💥repeatedrepeatedrepeated💥  ####

This challenge concerns strings such as:
___
"repeatedrepeatedrepeated"
_____

... that are obtained by repeating a smaller string, which in this case is the string "repeated".
On a related note, since the string above is made of 3 repetitions, one way to produce this string is via the code "repeated".repeat(3).
Write a function that, given a string, either:
___
*) Returns false if the string isn't made by repeating a smaller string or ...
*) Returns the number of repetitions if the string repeats a smaller string.
___



[Examples]

___
isRepeated("repeatedrepeatedrepeated") ➞ 3

isRepeated("overintellectualizations") ➞ False

isRepeated("nononononononononononono") ➞ 12

isRepeated("moremoremoremoremoremore") ➞ 6

isRepeated(",,,,,,,,,,,,,,,,,,,,,,,,") ➞ 24
_____



[Notes]

To keep things a little simpler, all strings in the tests will have length exactly 24, just as in all the examples above. In particular, the answers will always be divisors of 24.


[language_fundamentals] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
For Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________

*/
//Your code should go here:

