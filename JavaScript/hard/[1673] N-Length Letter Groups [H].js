/*
####  N-Length Letter Groups  ####

Write a function that returns an array of strings populated from the slices of n-length characters of the given word (a slice after another while n-length applies onto the word).


[Examples]

___
collect("intercontinentalisationalism", 6) 
➞ ["ationa", "interc", "ntalis", "ontine"]

collect("strengths", 3) 
➞ ["eng", "str", "ths"]

collect("pneumonoultramicroscopicsilicovolcanoconiosis", 15) 
➞ ["croscopicsilico", "pneumonoultrami", "volcanoconiosis"]
_____



[Notes]

___
*) Ensure that the resulting array is lexicographically ordered.
*) Return an empty array if the given string is less than n.
*) A recursive version of this challenge can be found via this link.
___



[arrays] [sorting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Sort Array Lexicographically
https://stackoverflow.com/questions/53688028/sort-array-lexicographically-in-javascript
How to sort array lexicographically in javascript.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________
_________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
RegExp() Constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
Creates a regular expression object for matching text with a pattern.
_________
_________
Regex Tester and Debugger
https://regex101.com/
Regular expression tester with syntax highlighting, explanation and cheat sheet.
_________

*/
//Your code should go here:

