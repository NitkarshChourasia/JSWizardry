/*
####  Find the Shortest Word(s) in a Sentence  ####

Create a function that accepts a string as an argument. Find its shortest word(s) and return them as an array sorted alphabetically (if there are multiple shortest words).


[Examples]

___
findShortestWords("I think the solution is fairly obvious.") ➞ ["i"]

findShortestWords("Chase two rabbits, catch none.") ➞ ["two"]

findShortestWords("We become what we think about.") ➞ ["we", "we"]

findShortestWords("The quick brown fox jumped over the lazy dogs back.") ➞ ["fox", "the", "the"]
_____



[Notes]

___
*) Periods, commas and other special characters don't count as part of a word's length.
*) Remember to sort the array of words alphabetically before returning your result.
*) Return words in lowercase only.
___



[language_fundamentals] [loops] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in this array.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
_________

*/
//Your code should go here:

