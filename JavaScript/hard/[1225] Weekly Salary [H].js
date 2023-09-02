/*
####  Weekly Salary  ####

Write a function that takes a list of hours and returns the total weekly salary.
___
*) The input list hours is listed sequentially, ordered from Monday to Sunday.
*) A worker earns $10 an hour for the first 8 hours.
*) For every overtime hour, he earns $15.
*) On weekends, the employer pays double the usual rate, regardless how many hours were worked previously that week. For instance, 10 hours worked on a weekday would pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.
___



[Examples]

___
weeklySalary([8, 8, 8, 8, 8, 0, 0]) ➞ 400

weeklySalary([10, 10, 10, 0, 8, 0, 0]) ➞ 410

weeklySalary([0, 0, 0, 0, 0, 12, 0]) ➞ 280
_____



[Notes]

Every element in the array is greater than or equal to 0.


[algebra] [arrays] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

