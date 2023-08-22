/*
####  Generating Words from Names  ####

Write a function that returns true if a given name can generate an array of words.


[Examples]

___
anagram("Justin Bieber", ["injures", "ebb", "it"]) ➞ true

anagram("Natalie Portman", ["ornamental", "pita"]) ➞ true

anagram("Chris Pratt", ["chirps", "rat"]) ➞ false
// Not all letters are used 

anagram("Jeff Goldblum", ["jog", "meld", "bluffs"]) ➞ false
// "s" does not exist in the original name
_____



[Notes]

___
*) Each letter in the name may only be used once.
*) All letters in the name must be used.
___



[arrays] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. …
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then com …
_________
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________

*/
//Your code should go here:

