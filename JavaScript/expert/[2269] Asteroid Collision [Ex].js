/*
####  Asteroid Collision  ####

You are given an array asteroids of integers representing asteroids in a row.
For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.


[Examples]

___
asteroidCollision([-2, -1, 1, 2]) ➞ [-2, -1, 1, 2]

asteroidCollision([-2, 1, 1, -2]) ➞ [-2, -2]

asteroidCollision([1, 1, -2, -2]) ➞ [-2, -2]

asteroidCollision([10, 2, -5]) ➞ [10]

asteroidCollision([8, -8]) ➞ []
_____



[Notes]

BONUS: Use only one loop (either for or while).


[arrays] [games] [loops] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________

*/
//Your code should go here:

