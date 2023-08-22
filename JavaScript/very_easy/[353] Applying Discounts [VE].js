/*
####  Applying Discounts  ####

Create a function that applies a discount d to every number in the array.


[Examples]

___
getDiscounts([2, 4, 6, 11], "50%") ➞ [1, 2, 3, 5.5]

getDiscounts([10, 20, 40, 80], "75%") ➞ [7.5, 15, 30, 60]

getDiscounts([100], "45%") ➞ [45]
_____



[Notes]

___
*) The discount is the percentage of the original price (i.e the discount of "75%" to 12 would be 9 as opposed to taking off 75% (making 3)).
*) There won't be any awkward decimal numbers, only 0.5 to deal with.
___



[algorithms] [arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
How to convert percent into a decimal?
https://stackoverflow.com/questions/11088562/convert-percent-into-a-decimal-in-html-javascript/11088597
If you use parseFloat, it will read the string up until the first non-number character (the %) var x = '20.1%'; var y = parseFloat(x); // 20.1 Then you can check if it' …
_________
_________
parseInt and parseFloat
https://javascript.info/number#parseint-and-parsefloat
Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails.
_________
_________
parseInt() Method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
_________

*/
//Your code should go here:

