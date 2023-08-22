/*
####  Minimum Removals to Make Two Strings Anagrams  ####

Create a function that returns the smallest number of letter removals so that two strings are anagrams of each other.


[Examples]

___
minRemovals("abcde", "cab") ➞ 2
// Remove "d", "e" to make "abc" and "cab".

minRemovals("deafk", "kfeap") ➞ 2
// Remove "d" and "p" from the first and second word, respectively.

minRemovals("acb", "ghi") ➞ 6
// Remove all letters from both words to get "" and "".
_____



[Notes]

___
*) An anagram is any string that can be formed by shuffling the characters of the original string. For example: baedc is an anagram of abcde.
*) An empty string can be considered an anagram of itself.
*) Characters won't be used more than once per string.
___



[data_structures] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________

*/
//Your code should go here:

