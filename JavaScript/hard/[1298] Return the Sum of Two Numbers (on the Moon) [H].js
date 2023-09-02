/*
####  Return the Sum of Two Numbers (on the Moon)  ####

When two numbers are added together, the strange Lunar arithmetic is used on the Moon. The Lunar sum of two numbers is not determined by the sum of their individual digits, but by the highest digit of the two taken into account at each step, in columnar form.
___
2  4  6  +
3  1  7  =
--------
3  4  7

// 3 > 2 | 4 > 1 | 7 > 6

1  3  4  +
   5  4  =
--------
1  5  4

//  1 > 0 | 5 > 3 | 4 == 4
// Blank spots in the columnar form are equals to 0

   2  0  +
1  4  0  =
-------
1  4  0

// 1 > 0 | 4 > 2 | 0 == 0
_____

Given two positive integers number1 and number2, implement a function that returns their sum as a new integer.


[Examples]

___
lunarSum(246, 317) ➞ 347

lunarSum(134, 54) ➞ 154

lunarSum(20, 140) ➞ 140
_____



[Notes]

The given numbers will be always positive integers: no exceptions to handle.


[arrays] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.from()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Lunar Arithmetic
http://mathematics-in-europe.eu/?p=1656
One of the most popular expressions in Italy for giving strength to numbers is mathematics is not an opinion. The expression is exclusively Italian and mathematicians d …
_________
_________
Array.prototype.unshift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
Adds one or more elements to the beginning of an array and returns the new length of the array.
_________
_________
Number.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
Returns a string representing the specified Number object.
_________
_________
String.prototype.padStart()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
_________
_________
JavaScript Switch Statement
https://www.w3schools.com/js/js_switch.asp
The switch statement is used to perform different actions based on different conditions.
_________
_________
digits to array
https://stackoverflow.com/questions/19182266/how-to-convert-an-integer-into-an-array-of-digits/19182309
How to convert an integer into an array of digits
_________
_________
JavaScript For Loop
https://www.w3schools.com/js/js_loop_for.asp
Loops are handy, if you want to run the same code over and over again, each time with a different value.
_________
_________
Arrow Function
https://www.w3schools.com/js/js_arrow_function.asp
Arrow functions allow us to write shorter function syntax:
_________

*/
//Your code should go here:

