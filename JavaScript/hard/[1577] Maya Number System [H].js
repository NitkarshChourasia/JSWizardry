/*
####  Maya Number System  ####

Maya numeral system was vigesimal (base 20) and positional: units, tens, hundreds (and so on) were read as descendant progressive powers of 20, instead of 10 like we do with our decimal system. Some examples:
___
- 39 => (1 x 20¹) + (19 x 20º)
- 815 => (2 x 20²) + (0 x 20¹) + (15 x 20º)
- 16125 => (2 x 20³) + (0 x 20²) + (6 x 20¹) + (5 x 20º)
_____

Every digit (as to say the number to be multiplied for the power of 20) was symbolized with a combination of pebbles (dots), woodsticks (lines) and shells (used for the number 0) following a base5 system. See the table below:

You must implement a function that, given a non-negative integer, returns an array of strings, with each string representing the symbolized single digit.
Symbols to use are "@" for shells, "—" for lines and "o" for dots. Dots have to be placed before the lines.


[Examples]

___
// Be careful, spaces between symbols are placed only for better
// readability! Don't use spaces in returned strings.

mayaNumber(39) ➞ ["o", "o o o o — — —"]

mayaNumber(815) ➞ ["o o", "@", "— — —"]

mayaNumber(16125) ➞ ["o o", "@", "o —", "—"]
_____



[Notes]

___
*) Check the Resources tab for more info on Maya numerals (and Maya arithmetic).
*) All given integers are valid, no exceptions to handle.
___



[formatting] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Maya Number System and Mathematics
https://mayaarchaeologist.co.uk/2016/12/28/maya-numbers/
Ancient Maya arithmetic and numeration system, with its Dot-and-Bar notation and concept of zero, is a fascinating topic. In this article, we will explain how to read t …
_________
_________
Modular Arithmetic
https://en.wikipedia.org/wiki/Modular_arithmetic
In mathematics, modular arithmetic is a system of arithmetic for integers, where numbers "wrap around" when reaching a certain value—the modulus (plural moduli). The mo …
_________
_________
parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
_________
_________
Arithmetic Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
Take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtract …
_________
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
Number.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
Returns a string representing the specified Number object.
_________

*/
//Your code should go here:

