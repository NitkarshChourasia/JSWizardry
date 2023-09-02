/*
####  Consecutive Numbers  ####

Given an array of random digits of any length, return true if the number n appears times times in a row, and false otherwise.


[Worked Example]

___
isThereConsecutive([1, 3, 5, 5, 3, 3, 1], 3, 2) ➞ true
// Second parameter is the number to look out for (3).
// Third parameter means you need to find the number 3 twice in a row.
// Return true if it can be found.
_____



[Examples]

___
isThereConsecutive([1, 2, 3, 4, 5], 1, 1) ➞ true

isThereConsecutive([3], 1, 0) ➞ true

isThereConsecutive([2, 2, 3, 2, 2, 2, 2, 3, 4, 1, 5], 3, 2) ➞ false

isThereConsecutive([5, 5, 5, 5, 5], 5, 7) ➞ false
_____



[Notes]

___
*) Arrays will only contain positive single digit numbers.
*) Expect all parameters to be valid.
___



[arrays] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________

*/
//Your code should go here:

