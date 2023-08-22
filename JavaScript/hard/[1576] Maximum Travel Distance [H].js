/*
####  Maximum Travel Distance  ####

Write a function that takes fuel (liters), fuelUsage (liters/100km), passengers, airCon (boolean) and returns maximum distance that car can travel.
___
*) fuel is the number of liters of fuel in the fuel tank.
*) fuelUsage is basic fuel consumption per 100 km (with the driver inside only).
*) Every additional passenger is increasing basic fuel consumption by 5%.
*) If the air conditioner is ON true, its increasing total (not basic) fuel consumption by 10%.
___



[Examples]

___
totalDistance(70.0, 7.0, 0, false) ➞ 1000.0

totalDistance(36.1, 8.6, 3, true) ➞ 331.8

totalDistance(55.5, 5.5, 5, false) ➞ 807.3
_____



[Notes]

___
*) fuel and fuelUsage are always greater than 1.
*) passengers are always greater or equal to 0.
*) Round your answer to the nearest tenth.
___



[algebra] [algorithms] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
_________

*/
//Your code should go here:

