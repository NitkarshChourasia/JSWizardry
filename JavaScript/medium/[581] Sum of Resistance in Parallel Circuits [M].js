/*
####  Sum of Resistance in Parallel Circuits  ####

If two or more resistors are connected in parallel, the overall resistance of the circuit reduces. It is possible to calculate the total resistance of a parallel circuit by using this formula:

Create a function that takes an array of parallel resistance values, and calculates the total resistance of the circuit.


[Worked Example]

___
parallelResistance([6, 3, 6]) ➞ 1.5

// 1/RTotal = 1/6 + 1/3 + 1/6
// 1/RTotal = 2/3
// RTotal = 3/2 = 1.5
_____



[Examples]

___
parallelResistance([6, 3]) ➞ 2

parallelResistance([10, 20, 10]) ➞ 4

parallelResistance([500, 500, 500]) ➞ 166.6
// Round to the nearest decimal place
_____



[Notes]

___
*) Note that you should rearrange to return the Resistance Total, not 1 / Resistance Total.
*) Round to the nearest decimal place.
*) All inputs will be valid.
___



[arrays] [loops] [math] [physics] 



-------------------------------------------------------------------
[Resources]
_________
Resistors in Parallel
https://www.electronics-tutorials.ws/resistor/res_4.html
Resistors are said to be connected together in parallel when both of their terminals are respectively connected to each terminal of the other resistor or resistors.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
_________
_________
Calculating resistance in parallel
https://www.youtube.com/watch?v=aBIdFS0jwuU
A worked example of how to calculate resistance in parallel circuits.
_________
_________
Number Constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
Contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.
_________

*/
//Your code should go here:

