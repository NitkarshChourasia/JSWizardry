/*
####  Filter by Digit Length  ####

Create a function that filters out an array to include numbers that only have a certain number of digits.


[Examples]

___
filterDigitLength([88, 232, 4, 9721, 555], 3) ➞ [232, 555]
// Include only numbers with 3 digits.

filterDigitLength([2, 7, 8, 9, 1012], 1) ➞ [2, 7, 8, 9]
// Include only numbers with 1 digit.

filterDigitLength([32, 88, 74, 91, 300, 4050], 1) ➞ []
// No numbers with only 1 digit exist => return empty array.

filterDigitLength([5, 6, 8, 9], 1) ➞ [5, 6, 8, 9]
// All numbers in the array have 1 digit only => return original array.
_____



[Notes]

___
*) If no numbers of the specified digit length exist, return an empty array.
*) If all numbers in the array have the specified digit length, return the original array.
*) The sub-array returned should have the same relative order as the original array.
___



[arrays] [higher_order_functions] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
String.length
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
Indicates the length of a string, in UTF-16 code units.
_________
_________
Array.prototype.filter()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Object.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
Returns a string representing the object.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
How to get number of digits with JavaScript?
https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript
As the title of my post suggests, I would like to know how many digits var number has. For example: If number = 15; my function should return 2. Currently, it looks lik …
_________
_________
parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
_________

*/
//Your code should go here:

