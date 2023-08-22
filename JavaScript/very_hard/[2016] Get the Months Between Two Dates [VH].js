/*
####  Get the Months Between Two Dates  ####

Create a function that, given 2 dates, returns the names of the months that are present between them (inclusive).

Input
___
var january = new Date(2017, 0, 1);
var march = new Date(2017, 2, 1);

monthsInterval(january, march)
_____

Output
___
['January', 'February', 'March']
_____

Input
___
var december = new Date(2017, 11, 1);
var january = new Date(2018, 0, 1);

monthsInterval(december, january)
_____

Output
___
['January', 'December']
_____

Input
___
var january2017 = new Date(2017, 0, 1);
var january2018 = new Date(2018, 0, 1);

monthsInterval(january2017, january2018)
_____

Output
___
['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
_____

(Notice that January is not duplicated!)

___
*) The returned array should include the months of dateStart and dateEnd (inclusive)
*) The returned array must not include duplicate values
*) The month names returned by the function should be sorted (not alphabetically, but ordered by which comes first (January = 1st month, February = 2nd month, … , December = 12th month))
*) The function should produce the same output even if dateStart is greater than dateEnd
___



[arrays] [dates] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Date Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1 …
_________

*/
//Your code should go here:

