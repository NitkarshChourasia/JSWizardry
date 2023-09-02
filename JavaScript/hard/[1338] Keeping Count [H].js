/*
####  Keeping Count  ####

Given a number, create a function which returns a new number based on the following rules:
___
*) For each digit, replace it by the number of times it appears in the number.
*) The final instance of the number will be an integer, not a string.
___

The following is a working example:
___
digitCount(136116) ➞ 312332
// The number 1 appears thrice, so replace all 1s with 3s.
// The number 3 appears only once, so replace all 3s with 1s.
// The number 6 appears twice, so replace all 6s with 2s.
_____



[Examples]

___
digitCount(221333) ➞ 221333

digitCount(136116) ➞ 312332

digitCount(2) ➞ 1
_____



[Notes]

Each test will have a positive whole number in its parameter.


[arrays] [language_fundamentals] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
Is a global object that is used in the construction of arrays; which are high-level, list-like objects.
_________
_________
RegExp() constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
Creates a regular expression object for matching text with a pattern.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________

*/
//Your code should go here:

