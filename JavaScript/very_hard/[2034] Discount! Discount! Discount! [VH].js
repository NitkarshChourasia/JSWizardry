/*
####  Discount! Discount! Discount!  ####

We all love a little bargain.
Your function will get a price, and a load of discounts. Your job is to write the function so that it calculates the maximum discount.
___
*) The price is a Number.
*) The load of discounts is a string like: 15%, 8, 50%.
*) So, percentages, with %, and amounts, without %.
*) You have to think about the order of applying the discounts.
*) Round the output amount to the nearest hundreth.
*) Output a Number.
___



[Examples]

___
discount(64, "50%, 50%") ➞ 16
// You have to reduce with 50% twice.

discount(24, "20, 2") ➞ 2
// You have to subtract 20 and 2.

discount(20, "10%, 10") ➞ 8
// You have to reduce with 10% and subtract 10.
_____



[Notes]

N/A


[algorithms] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________

*/
//Your code should go here:

