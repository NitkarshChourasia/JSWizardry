/*
####  Shared vs. Unique Letters  ####

Create a function that takes in two words as input and returns an array of three elements, in the following order:

Each element should have unique letters, and have each letter be alphabetically sorted.


[Examples]

___
letters("sharp", "soap") ➞ ["aps", "hr", "o"]

letters("board", "bored") ➞ ["bdor", "a", "e"]

letters("happiness", "envelope") ➞ ["enp", "ahis", "lov"]

letters("kerfuffle", "fluffy") ➞ ["flu", "ekr", "y"]
// Even with multiple matching letters (e.g. 3 f's), there should 
// only exist a single "f" in your first element.

letters("match", "ham") ➞ ["ahm", "ct", ""]
// "ham" does not contain any letters that are not found already 
// in "match".
_____



[Notes]

___
*) Both words will be in lower case.
*) You do not have to worry about punctuation, all words only have letters from [a-z].
*) If an element contains no letters, return an empty string (see last example).
___



[arrays] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings.
_________
_________
Set
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
String.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
Performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
_________

*/
//Your code should go here:

