/*
####  Maximum Edge of a Triangle  ####

Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.


[Examples]

___
nextEdge(8, 10) ➞ 17

nextEdge(5, 7) ➞ 11

nextEdge(9, 2) ➞ 10
_____



[Notes]

___
*) (side1 + side2) - 1 = maximum range of third edge.
*) The side lengths of the triangle are positive integers.
*) Don't forget to return the result.
___



[algorithms] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
The JavaScript Arithmetic Operators
https://flaviocopes.com/javascript-math-operators/
Performing math operations and calculus is a very common thing to do with any programming language. JavaScript offers several operators to help us work with numbers
_________
_________
Find Possible Lengths of Third Side in a Triangle
https://www.youtube.com/watch?v=VW0UM88eLYY
Learn how to find the interval of possible lengths of the third side in a triangle given the two other sides in this free math video tutorial by Mario's Math ...
_________
_________
Minimum and Maximum Possible Length of the Third Side of a Triangle
https://www.geeksforgeeks.org/minimum-and-maximum-possible-length-of-the-third-side-of-a-triangle/
Given two sides of a triangle s1 and s2, the task is to find the minimum and maximum possible length of the third side of the given triangle. Print -1 if it is not poss …
_________
_________
Triangle Inequality
https://en.wikipedia.org/wiki/Triangle_inequality
This explains the math behind the triangle inequality.
_________
_________
Pythagorean Theorem
http://mathworld.wolfram.com/PythagoreanTheorem.html
Many different proofs exist for this most fundamental of all geometric theorems. The theorem can also be generalized from a plane triangle to a trirectangular tetrahedr …
_________
_________
How many ways are there to prove the Pythagorean theorem?
https://youtu.be/YompsDlEdtc
What do Euclid, 12-year-old Einstein, and American President James Garfield have in common? They all came up with elegant proofs for the famous Pythagorean theorem, one …
_________

*/
//Your code should go here:

function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
}


if (require.main == module) {
    console.log(nextEdge(8, 10))
    console.log(nextEdge(5, 7))
    console.log(nextEdge(9, 2))
}