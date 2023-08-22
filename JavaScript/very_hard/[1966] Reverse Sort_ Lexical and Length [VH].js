/*
####  Reverse Sort: Lexical and Length  ####

Write a function that sorts the words in a given string lexicographically (lexical sort) and by length in reverse order.


[Examples]

___
reverseSort("You've rocked the pragmatic world in the making!") 
 ➞ "pragmatic making! You've rocked world the the in"

reverseSort("Tesh makes my world worth enjoying and living for.")
 ➞ "enjoying living worth world makes Tesh for. and my"

reverseSort("Shaken by the bloody truth and crazy lies.")
 ➞ "Shaken bloody truth lies. crazy the and by"

reverseSort("Java streams and collections are fun to program with!")
 ➞ "collections streams program with! Java fun are and to"
_____



[Notes]

___
*) Special characters, punctuation marks and symbols are part of the word that directly precedes it.
*) The space character separates each word in the given string.
*) Case insensitive sorting is required.
___



[sorting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.localeCompare()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
Returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________

*/
//Your code should go here:

