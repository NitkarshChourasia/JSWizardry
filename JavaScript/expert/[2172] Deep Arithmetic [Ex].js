/*
####  Deep Arithmetic  ####

Write a function that takes an array of strings of arbitrary dimensionality ([], [][], [][][], etc.) and returns the sum of every separate number in each string in the array.


[Examples]

___
sum(["1", "five", "2wenty", "thr33"]) ➞ 36

sum([["1X2", "t3n"],["1024", "5", "64"]]) ➞ 1099

sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) ➞ 759
_____



[Notes]

___
*) Numbers in strings can be negative, but will all be base-10 integers.
*) Negative numbers may directly follow another number.
*) The hyphen or minus character ("-") does not only occur in numbers.
*) Arrays may be ragged or empty.
___



[arrays] [language_fundamentals] [objects] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
_________
_________
JSON.stringify()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Converts a JavaScript object or value to a JSON string.
_________

*/
//Your code should go here:

