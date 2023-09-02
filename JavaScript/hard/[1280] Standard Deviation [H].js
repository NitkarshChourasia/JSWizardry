/*
####  Standard Deviation  ####

The central tendency measures (mean, mode and median) sometimes aren't enough descriptives in a data set analysis. For example, given two arrays A=[15, 15, 15, 14, 16] and B=[2, 7, 14, 22, 30] the mean is μ=15 in both cases, however the values of second array are clearly more spread out from the average value. The standard deviation (also called sigma, the greek lowercase letter σ) measures the spread of the values in a data set and transform the "clearly more spread out than" assertion in a proofed statistical assertion. You can find more information in the Resources tab.
The standard deviation is calculated following five steps:

Given an array of values return the standard deviation rounded to the nearest hundredth.


[Examples]

___
standardDeviation([3, 5, 7]) ➞ 1.63
// |(3-5)|+|(5-5)|+|(7-5)| = 2² + 0 + 2² = 8 / 3 = square root of 2.66 = 1.63

standardDevition([5, 5, 5]) ➞ 0
// Values aren't deviating from the mean.

standardDeviation([-3, -5, -7]) ➞ 1.63
// Remember: absolute differences!
_____



[Notes]

___
*) All given arrays are valid, no exceptions to handle.
*) Arrays can contain either positive or negative integers.
*) Remember to round to the nearest hundredth at the end.
___



[arrays] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Standard Deviation
https://en.wikipedia.org/wiki/Standard_deviation
In statistics, the standard deviation (SD, also represented by the lower case Greek letter sigma σ for the population standard deviation or the Latin letter s for the s …
_________
_________
Math Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object.
_________
_________
Calculating Standard Deviation with Array.map and Array.reduce
https://derickbailey.com/2014/09/21/calculating-standard-deviation-with-array-map-and-array-reduce-in-javascript/
I’ve built a handful of reports for podcasters on SignalLeaf to see how large their audience is, how the audience is listening, etc. One report that I have been wanting …
_________

*/
//Your code should go here:

