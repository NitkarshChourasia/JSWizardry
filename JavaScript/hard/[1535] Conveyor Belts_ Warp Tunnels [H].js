/*
####  Conveyor Belts, Warp Tunnels  ####

In this challenge, you have to deal with a matrix that is moving from the left to the right by a given amount of times, shifting its items as in a conveyor belt. At the end of the last array inside the matrix, there's a warp tunnel. The warp tunnel made appear the elements pushed through by the shifts at the beginning of the matrix, in the same order as they were before the shift. Look at the example below:
___
// Before the movement.
mtx = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
n = 2

// After the movement (2 shifts to the right).
mtx = [[8, 9, 1], [2, 3, 4], [5, 6, 7]]

// Shifting 2 times to the right, "8" and "9" are pushed through the warp tunnel.
// The warped elements appear at the start.
_____

Given a matrix mtx and an integer n, implement a function that returns the same matrix with its elements shifted n times.


[Examples]

___
warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2) ➞ [[8, 9, 1], [2, 3, 4], [5, 6, 7]]

warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 8) ➞ [[2, 3, 4], [5, 6, 7], [8, 9, 1]]

warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9) ➞ [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 18) ➞ [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
_____



[Notes]

___
*) The given matrices are regular (each array shares the same number of elements contained) with variable lengths and the number of arrays contained.
*) The returned matrix must have the same dimensions as the original.
*) The given n can be greater than the total number of elements inside the matrix (see example #4). Each time you reach a complete shift cycle (so that every element is back in its original position, see example #3), you have to start again.
___



[arrays] [data_structures] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
_________
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________
_________
Modular Arithmetic
https://en.wikipedia.org/wiki/Modular_arithmetic
A system of arithmetic for integers, where numbers "wrap around" when reaching a certain value—the modulus (plural moduli). The modern approach to modular arithmetic wa …
_________

*/
//Your code should go here:

