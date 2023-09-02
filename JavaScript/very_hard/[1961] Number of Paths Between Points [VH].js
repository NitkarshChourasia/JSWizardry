/*
####  Number of Paths Between Points  ####

This challenge deals with finding and counting the number of paths between points on a rectilinear grid. A starting point (x, y) with non-negative integer coordinates is provided. You are only allowed to move horizontally and vertically along the grid. Hence, from (x, y) you may move to (x+1, y), (x-1, y), (x, y+1), or (x, y-1). Your goal is to return to the origin (0, 0) in such a way that you never increase the distance to the origin. The distance is counted as the minimum number of total vertical and horizontal steps to reach the origin.
Create a function that reads a starting location, (x, y) and returns the total number of different paths back to the origin. Two paths are different if there is at least one step on the path that is different even if most of the steps are the same.


[Examples]

___
paths(0, 0) ➞ 1

paths(2, 1) ➞ 3

paths(2, 2) ➞ 6
_____



[Notes]

___
*) This function can be easily written using recursion. It is STRONGLY recommended (though not necessary) that you use some form of recursion in your solution.
*) The return type for this function is a positive integer.
*) x and y will always be integers greater than or equal to 0.
___



[algorithms] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Lattice Path
https://mathworld.wolfram.com/LatticePath.html
The number of paths of length a+b from the origin (0,0) to a point (a,b) which are restricted to east and north steps is given by the binomial coefficient (a+b; a)
_________
_________
Lattice Paths
https://en.wikipedia.org/wiki/Lattice_path
The number of paths of length a+b from the origin (0,0) to a point (a,b) which are restricted to east and north steps is given by the binomial coefficient (a+b; a).
_________
_________
How to Find the Number of Ways
https://math.stackexchange.com/questions/103480/number-of-ways-of-reaching-a-point-from-origin
How to find the number of ways of reaching the point from origin (0,0).
_________
_________
Counting Lattice Paths - STEM hash
https://stemhash.com/counting-lattice-paths/
Let's take a taxicab ride through Manhattan in New York City. We're starting from a point in the upper west side down to the lower east side. On this trip, we want to s …
_________

*/
//Your code should go here:

