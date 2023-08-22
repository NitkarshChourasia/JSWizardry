/*
####  How Close to the Speed of Light?  ####

An ultrarelativistic particle is one whose speed v is very close to the speed of light c (or equivalently, one whose β = v/c is very close to 1). But a number like 0.9999999999999999999 is inconvenient to work with: calculators round it to 1, and trying to write it in scientific notation does the same (because any 9 you stop at gets rounded up by the following 9). It's better to work with the quantity (1 - β) instead.
Fortunately, we don't need to deal directly with β to calculate an ultrarelativistic particle's (1 - β). There are some other wieldier quantities that we can use to approximate (1 - β) with great precision. One of them is the particle's rapidity φ, which is related to β by the equation:
___
tanh φ = β
_____

(where tanh is the hyperbolic tangent function).
For an ultrarelativistic particle, the rapidity lets us approximate (1 - β) like this:
___
1 - β ≈ sech(2φ)
_____

(where sech is the hyperbolic secant).
Write a function that takes an ultrarelativistic particle's rapidity (a number) and uses the approximation formula given above to return the particle's (1 - β) to three significant figures. The output should be a string in scientific notation, formatted like "6.63e-34".


[Examples]

___
howCloseToC(3.14) ➞ "3.75e-3"

howCloseToC(42) ➞ "6.61e-37"

howCloseToC(355) ➞ "8.95e-309"
_____



[Notes]

N/A


[algebra] [math] [physics] 



-------------------------------------------------------------------
[Resources]
_________
Hyperbolic Functions
https://en.wikipedia.org/wiki/Hyperbolic_functions
Analogs of the ordinary trigonometric functions defined for the hyperbola rather than on the circle: just as the points (cos t, sin t) form a circle with a unit radius, …
_________
_________
Math.cosh()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh
Returns the hyperbolic cosine of a number, that can be expressed using the constant e.
_________
_________
Number.prototype.toExponential()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential
Returns a string representing the Number object in exponential notation.
_________
_________
Hyperbolic Functions
https://www.mathsisfun.com/sets/function-hyperbolic.html
The two basic hyperbolic functions are "sinh" and "cosh".
_________
_________
Rapidity
https://en.wikipedia.org/wiki/Rapidity
Commonly used as a measure for relativistic velocity. Mathematically, rapidity can be defined as the hyperbolic angle that differentiates two frames of reference in rel …
_________
_________
Ultrarelativistic Limit
https://en.wikipedia.org/wiki/Ultrarelativistic_limit
The energy of an ultrarelativistic particle is almost completely due to its momentum (pc ≫ mc2), and thus can be approximated by E = pc. This can result from holding t …
_________
_________
Ultrarelativistic Particles
https://phys.libretexts.org/Bookshelves/Relativity/Book%3A_Special_Relativity_(Crowell)/04%3A_Dynamics/4.01%3A_Ultrarelativistic_particles
A typical 22 -caliber rifle shoots a bullet with a mass of about 3g at a speed of about 400m/s . Now consider the firing of such a rifle as seen through an ultra-po …
_________

*/
//Your code should go here:

