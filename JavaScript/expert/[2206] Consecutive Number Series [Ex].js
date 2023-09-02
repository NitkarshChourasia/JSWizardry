/*
####  Consecutive Number Series  ####

Write a function that will return true if a given string (divided and grouped into a size) will contain a set of consecutive numbers (regardless of orientation: whether ascending or descending), otherwise, return false.


[Examples]

___
isConsecutive("121314151617") ➞ true
// Contains a set of consecutive ascending numbers
// if grouped into 2's : 12, 13, 14, 15, 16, 17

isConsecutive("123124125") ➞ true
// Contains a set of consecutive ascending numbers
// if grouped into 3's : 123, 124, 125

isConsecutive("32332432536") ➞ false
// Regardless of the grouping size, the numbers can't be consecutive.

isConsecutive("326325324323") ➞ true
// Contains a set of consecutive descending numbers
// if grouped into 3's : 326, 325, 324, 323

isConsecutive("667666") ➞ true
// Consecutive descending numbers: 667 and 666.

isConsecutive("999897959493") ➞ false
_____



[Notes]

___
*) A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
*) A recursive version of this challenge can be found via this link.
___



[arrays] [loops] [numbers] [sorting] [validation] 



-------------------------------------------------------------------
[Resources]
_________
For Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________

*/
//Your code should go here:

