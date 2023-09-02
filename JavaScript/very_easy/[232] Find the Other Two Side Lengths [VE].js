/*
####  Find the Other Two Side Lengths  ####

Given the shortest side of a 30° by 60° by 90° triangle, find out the other two sides. Return the longest side and medium-length side in that order.


[Examples]

___
otherSides(1) ➞ [2, 1.73]

otherSides(2) ➞ [4, 3.46]

otherSides(3) ➞ [6, 5.2]
_____



[Notes]

___
*) 30 60 90 triangles always follow this rule: let's say the shortest side length is x units, the hypotenuse would be 2x units and the other side would be x * square root of 3.
*) In the Tests, the decimal is rounded to 2 places.
*) Return the values as an array.
___



[geometry] [math] 



-------------------------------------------------------------------
[Resources]
_________
30-60-90 Degree Triangle
https://www.dummies.com/education/math/calculus/quick-guide-to-the-30-60-90-degree-triangle/
If you know the shortest side. Double shortest side to get middle side. To find the longest side multiply the shortest side by the square root of 3.
_________
_________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
_________
_________
Number.prototype.toPrecision()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
Returns a string representing the Number object to the specified precision.
_________
_________
Math.sqrt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
Returns the square root of a number.
_________
_________
Round a Number to 2 Decimal Places
https://www.delftstack.com/howto/javascript/javascript-round-to-2-decimal-places/
This tutorial teaches how to round a number to at most `2` decimal places in JavaScript?
_________

*/
//Your code should go here:

