/*
####  Sample Points from a Curve  ####

Create a function that given a type of curve will generate an array containing a samples amount of numbers calculated from said curve.
It's easier to see with a visual representation:

If samples = 3 and curve = "pow", we would sample 3 points along the x axis [0, 0.5, 1] and figure out the value of y, in the case of the pow curve the values are [0, 0.25, 1].


[Examples]

___
samplesFromCurve(3, "linear") ➞ [0, 0.5, 1]

samplesFromCurve(3, "pow") ➞ [0, 0.25, 1]

samplesFromCurve(3, "sqrt") ➞ [0, 0.71, 1]

samplesFromCurve(5, "linear") ➞ [0, 0.25, 0.5, 0.75, 1]
_____



[Notes]

___
*) The available curves are linear, pow, sqrt as shown in the picture.
*) All values returned must have a maximum of 2 decimals to avoid floating point problems in the tests.
*) All values returned must be between 0 and 1 (inclusive).
*) The samples parameter will always be ≥ 2.
*) The samples are evenly distributed along the x axis.
___



[algebra] [arrays] [math] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
_________

*/
//Your code should go here:

