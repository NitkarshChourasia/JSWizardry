/*
####  Stock Picker  ####

Create a function that takes an array of integers that represent the amount in dollars that a single stock is worth, and return the maximum profit that could have been made by buying stock on day x and selling stock on day y where y>x.
If given the following array:
___
[44, 30, 24, 32, 35, 30, 40, 38, 15]
_____

... your program should return 16 because at index 2 the stock was worth $24 and at the index 6 the stock was then worth $40, so if you bought the stock at 24 and sold it on 40, you would have made a profit of $16, which is the maximum profit that could have been made with this list of stock prices.
If there is no profit that could have been made with the stock prices, then your program should return -1 (e.g. [[10, 9, 8, 2]] should return -1).


[Examples]

___
stockPicker([10, 12, 4, 5, 9]) ➞ 5

stockPicker([14, 20, 4, 12, 5, 11]) ➞ 8

stockPicker([80, 60, 10, 8]) ➞ -1
_____



[Notes]

N/A


[algorithms] [arrays] [data_structures] 



-------------------------------------------------------------------
[Resources]
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters.
_________
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
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

