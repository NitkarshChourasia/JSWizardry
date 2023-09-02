/*
####  Pascal's Triangle  ####

The goal of this challenge is to return Pascal's triangle up to number 29. Pascal's triangle is the sum of the two upper corners.
___
   1 1
  1 2 1
 1 3 3 1

// There will always be the 1 in the first
// place and the row in the second.
_____


Create a function that returns a row from Pascal's triangle. To find the row and column you can use n!/(k!*(n-k)!) where n is the row down and k is the column.


[Examples]

___
pascalsTriangle(1) ➞ "1 1"

pascalsTriangle(4) ➞ "1 4 6 4 1"

pascalsTriangle(6) ➞ "1 6 15 20 15 6 1"

pascalsTriangle(8) ➞ "1 8 28 56 70 56 28 8 1"
_____



[Notes]

N/A


[algebra] [algorithms] [loops] [math] 



-------------------------------------------------------------------
[Resources]
_________
Algorithms 101: Pascal’s Triangle in JavaScript
https://medium.com/javascript-in-plain-english/algorithms-101-pascals-triangle-in-javascript-9fbd9032871
To build out this triangle, we need to take note of a few things. Each row starts and ends with a 1. Inside each row, between the 1s, each digit is the sum of the two d …
_________
_________
Pascal's Triangle
https://en.wikipedia.org/wiki/Pascal%27s_triangle
A triangular array of the binomial coefficients. In much of the Western world, it is named after the French mathematician Blaise Pascal, although other mathematicians s …
_________
_________
Guide to Pascal’s Triangle
https://www.geeksforgeeks.org/pascal-triangle/
Pascal’s triangle is a triangular array of the binomial coefficients. Write a function that takes an integer value n as input and prints first n lines of the Pascal’s t …
_________
_________
Factorial
https://en.wikipedia.org/wiki/Factorial
The factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n.
_________

*/
//Your code should go here:

