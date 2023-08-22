/*
####  An Introduction to the Map-Reduce Pattern  ####

You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.
Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.


[Examples]

___
magnitude([3, 4]) ➞ 5

magnitude([0, 0, -10]) ➞ 10

magnitude([]) ➞ 0

magnitude([2, 3, 6, 1, 8] ) ➞ 10.677078252031311
_____



[Notes]

___
*) The array can have any length.
*) The input array will contain integers (except for empty array [] ➞ 0).
*) Use both .map() and .reduce().
*) Don't use Math.hypot().
___



[arrays] [functional_programming] [higher_order_functions] [math] 



-------------------------------------------------------------------
[Resources]
_________
Using Map and Reduce in Functional JavaScript
https://www.sitepoint.com/map-reduce-functional-javascript/
M. David Green demonstrates how using the functional programming techniques of mapping & reducing can lead to cleaner code which is easy to read & maintain.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
How to Calculate the Distance Between Two Points
http://www.mathwarehouse.com/algebra/distance_formula/index.php
The distance formula is derived from the Pythagorean theorem. To find the distance between two points (x1,y1) and (x2,y2), all that you need to do is use the coordinate …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
JavaScript Array Reference
https://www.w3schools.com/jsref/jsref_obj_array.asp
The Array object is used to store multiple values in a single variable.
_________
_________
Magnitude of a Vector
https://mathinsight.org/definition/magnitude_vector
The magnitude of a vector is the length of the vector. The magnitude of the vector a is denoted as ∥a∥. See the introduction to vectors for more about the magnitude of …
_________
_________
Math.hypot()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
Returns the square root of the sum of squares of its arguments.
_________
_________
Finding Magnitude or Length of a Vector
https://www.youtube.com/watch?v=6GoMXuE1FOw
I give the formula, and do a couple examples of finding the magitude, or length, or a vector.
_________
_________
Math.sqrt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
Returns the square root of a number.
_________
_________
Math.pow()
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/pow
Returns the base to the exponent power, that is, baseexponent.
_________

*/
//Your code should go here:

