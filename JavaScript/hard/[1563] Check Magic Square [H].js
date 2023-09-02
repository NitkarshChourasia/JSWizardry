/*
####  Check Magic Square  ####

A "magic square" is a square divided into smaller squares each containing a number, such that the numbers in each vertical, horizontal, and diagonal row add up to the same value.

Write a function that takes a 2D array, checks if it's a magic square and returns either true or false depending on the result.


[Examples]

___
isMagicSquare([
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2]
]) ➞ true

isMagicSquare([
  [16,  3,  2, 13],
  [ 5, 10, 11,  8],
  [ 9,  6,  7, 12],
  [ 4, 15, 14,  1]
]) ➞ true

isMagicSquare([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ false
_____



[Notes]

___
*) Check diagonals as well.
*) Test input will always be square.
*) Check the Resources tab for additional info on magic squares.
___



[algorithms] [arrays] [data_structures] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Magic Square
https://en.wikipedia.org/wiki/Magic_square
A square where the sum of each columns, rows and diagonals of the square are equals. An n times n square grid (where n is the number of cells on each side) filled with …
_________
_________
Magic Square Guide
https://www.geeksforgeeks.org/magic-square/
A magic square of order n is an arrangement of n^2 numbers, usually distinct integers, in a square, such that the n numbers in all rows, all columns, and both diagonals …
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________

*/
//Your code should go here:

