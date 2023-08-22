/*
####  Abbreviating a Sentence  ####

Create a function which takes a sentence and returns its abbreviation. Get all of the words over or equal to n characters in length and return the first letter of each, capitalised and overall returned as a single string.


[Examples]

___
abbreviate("do it yourself") ➞ "Y"

abbreviate("do it yourself", 2) ➞ "DIY"
// "do" and "it" are included because the second parameter specified that word lengths 2 are allowed.

abbreviate("attention AND deficit OR hyperactivity THE disorder")➞ "ADHD"
// Words below the default 4 characters are not included in the abbreviation.

abbreviate("the acronym of long word lengths", 5) ➞ "AL"
// "acronym" and "lengths" have 5 or more characters.
_____



[Notes]

There may not be an argument given for n so set the default to 4.


[formatting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Default parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
Allow named parameters to be initialized with default values if no value or undefined is passed.
_________
_________
RegExp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
Is used for matching text with a pattern.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and return …
_________
_________
String length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length data property of a string contains the length of the string in UTF-16 code units.
_________

*/
//Your code should go here:

