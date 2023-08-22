/*
####  Boolean Chain  ####

Write three functions:

These functions should evaluate an array of true and false values, starting from the leftmost element and evaluating pairwise.


[Examples]

___
and([true, true, false, true]) ➞ false
// and([true, true, false, true]) => and([true, false, true]) => and([false, true]) => false

or([true, true, false, false]) ➞ true
// or([true, true, false, true]) => or([true, false, false]) => or([true, false]) => true

xor([true, true, false, false]) ➞ false
// xor([true, true, false, false]) => xor([false, false, false]) => xor([false, false]) => false
_____



[Notes]

___
*) XOR is the same as OR, except that it excludes [true, true].
*) Each time you evaluate an element at 0 and at 1, you collapse it into the single result.
___



[arrays] [logic] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Bitwise Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal numbe …
_________
_________
XOR ( exclusive-OR ) Gate
https://whatis.techtarget.com/definition/logic-gate-AND-OR-XOR-NOT-NAND-NOR-and-XNOR?vgnextfmt=print#xor
Acts in the same way as the logical "either/or." The output is "true" if either, but not both, of the inputs are "true." The output is "false" if both inputs are "false …
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________
_________
logic gate (AND, OR, XOR, NOT, NAND, NOR and XNOR)
https://whatis.techtarget.com/definition/logic-gate-AND-OR-XOR-NOT-NAND-NOR-and-XNOR
A logic gate is an elementary building block of a digital circuit. Most logic gates have two inputs and one output. At any given moment, every terminal is in one of the …
_________
_________
Boolean
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
Is an object wrapper for a boolean value.
_________
_________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
_________
_________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________

*/
//Your code should go here:

