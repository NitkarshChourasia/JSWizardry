/*
####  Lexicographically First and Last  ####

Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:
___
firstAndLast(string) ➞ [first, last]
_____



[Examples]

___
firstAndLast("marmite") ➞ ["aeimmrt", "trmmiea"]

firstAndLast("bench") ➞ ["bcehn", "nhecb"]

firstAndLast("scoop") ➞ ["coops", "spooc"]
_____



[Notes]

___
*) Lexicographically first: the permutation of the string that would appear first in the English dictionary (if the word existed).
*) Lexicographically last: the permutation of the string that would appear last in the English dictionary (if the word existed).
___



[arrays] [sorting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
_________
_________
Array.prototype.join()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Array.prototype.sort()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences …
_________
_________
String.prototype.split()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
_________
_________
Hacks for Creating JavaScript Arrays
https://www.freecodecamp.org/news/https-medium-com-gladchinda-hacks-for-creating-javascript-arrays-a1b80cb372b/
A very important aspect of every programming language is the data types and structures available in the language. Most programming languages provide data types for repr …
_________
_________
String.prototype.charCodeAt()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________

*/
//Your code should go here:

