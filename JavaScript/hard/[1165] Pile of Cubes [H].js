/*
####  Pile of Cubes  ####

Mubashir needs your help to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
Given the total volume m of the building, can you find the number of cubes n required for the building?
In other words, you have to return an integer n such that:
___
n^3 + (n-1)^3 + ... + 1^3 == m
_____

Return null if there is no such number.


[Examples]

___
pileCubes(1071225) ➞ 45

pileCubes(4183059834009) ➞ 2022

pileCubes(16) ➞ null
_____



[Notes]

N/A


[algorithms] [loops] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
BigInt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
Is a built-in object that provides a way to represent whole numbers larger than 253 - 1, which is the largest number JavaScript can reliably represent with the Number p …
_________
_________
Is there a formula to add a sequence of cubes?
https://mathschallenge.net/library/number/sum_of_cubes
Using a similar method used to prove that formula for the Sum of Squares, we shall prove this result deductively; it is hoped that it will offer some insight into how f …
_________
_________
Sum of Cubes of n Natural Numbers - Formula, Proof, Examples
https://www.cuemath.com/algebra/sum-of-cubes-of-n-natural-numbers/
To find the sum of cubes of first n natural numbers means to add the cubes of a specific number of natural numbers starting from 1 and get the answer. Click to know the …
_________
_________
Building a Pile of Cubes
https://www.youtube.com/watch?v=NVA_YuRqscE
We'll count up to a set number of cubes, by taking the cube of each layer as we go.
_________

*/
//Your code should go here:

