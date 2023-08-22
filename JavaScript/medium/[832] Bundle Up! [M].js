/*
####  Bundle Up!  ####

Let's assume for the purposes of this challenge that for every layer of fabric you wear when it's cold outside (coats, cardigans, etc), the temperature increases by a tenth of the total.
Given n number of layers and a given temperature, return the temperature inside of all those warm fuzzy layers. Round to the nearest tenth of a degree.
___
calcBundledTemp(2, "10*C") ➞ "12.1*C"
// 10 * 1.1 = 11
// 11 * 1.1 = 12.1
_____



[Examples]

___
calcBundledTemp(1, "2*C") ➞ "2.2*C"

calcBundledTemp(4, "6*C") ➞ "8.8*C"

calcBundledTemp(20, "4*C") ➞ "26.9*C"
_____



[Notes]

___
*) The temperature will be given in Celsius and as a string.
*) Note that the degrees sign is given as an asterisk.
___



[loops] [math] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
_________

*/
//Your code should go here:

