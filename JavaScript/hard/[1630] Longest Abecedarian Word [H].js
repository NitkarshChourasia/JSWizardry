/*
####  Longest Abecedarian Word  ####

An abecedarian word is a word where all of its letters are arranged in alphabetical order. Examples of these words include:
___
*) Empty
*) Forty
*) Almost
___

Given an array of words, create a function which returns the longest abecedarian word. If no word in an array matches the criterea, return an empty string.


[Examples]

___
longestAbecedarian(["ace", "spades", "hearts", "clubs"]) ➞ "ace"

longestAbecedarian(["forty", "choppy", "ghost"]) ➞ "choppy"

longestAbecedarian(["one", "two", "three"]) ➞ ""
_____



[Notes]

___
*) All words will be given in lowercase.
*) If two abecedarian words have the same length, return the word which appeared first in the array.
___



[arrays] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________

*/
//Your code should go here:

