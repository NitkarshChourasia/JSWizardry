/*
####  Calculate Next Position of One Point Moving Towards Another  ####

A point on the screen (pt1) wants to move a certain distance (dist) closer to another point on the screen (pt2) The function has three arguments, two of which are objects with x & y values, and the third being the distance, e.g. {x:50, y:60}, {x: 100, y: 100}, 10. The expected result is a similar object with the new co-ordinate.


[Examples]

___
getNextPosition({x: 50, y: 60}, {x: 100, y: 100}, 10) ➞ {x: 58, y: 66}

getNextPosition({x: 0, y: 0}, {x: 100, y: 0}, 10) ➞ {x: 10, y: 0}

getNextPosition({x: 0, y: 0}, {x: 100, y: 100}, 10) ➞ {x: 7, y: 7}

getNextPosition({x: 250, y: 10}, {x: -20, y: 35}, 55) ➞ {x: 195, y: 15}
_____



[Notes]

___
*) The returned x & y values should be rounded to the closest integer
*) If the distance between the two points is less than distance wanting to be traveled, then the returned co-ordinate should overshoot the mark, e.g. {x: 50, y: 0}, {x: 70, y: 0}, 30) ➞ {x: 80, y: 0}.
___



[algebra] [games] [math] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Finding a point along a line a certain distance away from another point!
https://math.stackexchange.com/questions/175896/finding-a-point-along-a-line-a-certain-distance-away-from-another-point
Let's say you have two points, (𝑥0,𝑦0) and (𝑥1,𝑦1). The gradient of the line between them is: 𝑚=(𝑦1−𝑦0)/(𝑥1−𝑥0) And therefore the equation of the line betwee …
_________
_________
Math.pow()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
Returns the base to the exponent power, that is, baseexponent.
_________
_________
Math.round()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
Returns the value of a number rounded to the nearest integer.
_________
_________
Vectors - Normalizing
http://www.fundza.com/vectors/normalize/
Normalize a vector in order to multiply by a magnitude to find a new vector.
_________
_________
Math.sqrt()
https://www.w3schools.com/jsref/jsref_sqrt.asp
Returns the square root of the entered value
_________

*/
//Your code should go here:

