/*
####  Alphabetically Sorted  ####

A word is alphabetically sorted if all of the letters in it are in consecutive alphabetical order. Some examples of alphabetically sorted words: abhors (a is before b, b is before h, h is before o, etc.), ghost, accent, hoop.
Create a function that takes in a sentence as input and returns true if there is at least one alphabetically sorted word inside that has a minimum length of 3.


[Examples]

___
isAlphabeticallySorted("Paula has a French accent.") ➞ true
// "accent" is alphabetically sorted.

isAlphabeticallySorted("The biopsy returned negative results.") ➞ true
// "biopsy" is alphabetically sorted.

isAlphabeticallySorted("She sells sea shells by the sea shore.") ➞ false
// Although "by" is alphabetically sorted, it is only 2 letters long.
_____



[Notes]

___
*) Do not count words with 2 or fewer characters.
*) Ignore punctuation (periods, commas, etc).
___



[regex] [sorting] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.toLowerCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
Returns the calling string value converted to lower case.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________
_________
String length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
_________

*/
//Your code should go here:

