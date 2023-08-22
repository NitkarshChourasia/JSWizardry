/*
####  When to Sleep?  ####

Given a series of arrays, with each individual array containing the time of the alarm set and the sleep duration, return what time to sleep.


[Examples]

___
bedTime(["07:50", "07:50"]) ➞ ["00:00"]
// The second argument means 7 hours, 50 minutes sleep duration.

bedTime(["06:15", "10:00"], ["08:00", "10:00"], ["09:30", "10:00"]) ➞ ["20:15", "22:00", "23:30"]
// The second argument of each sub list means 10 hours sleep duration.

bedTime(["05:45", "04:00"], ["07:10", "04:30"]) ➞ ["01:45", "02:40"]
// Sleep duration can be different among the arrays.
_____



[Notes]

___
*) Times should be given in 24-hrs (i.e. "23:25" as opposed to "11:25PM").
*) Return an array of strings.
___



[arrays] [logic] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
The Arguments Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
An Array-like object accessible inside functions that contains the values of the arguments passed to that function.
_________
_________
Date.prototype.toTimeString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString
Returns the time portion of a Date object in human readable form in American English.
_________
_________
Array.prototype.forEach()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
_________
_________
Date.prototype.setUTCHours()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
Sets the hour for a specified date according to universal time, and returns the number of milliseconds since  January 1, 1970 00:00:00 UTC until the time represented by …
_________

*/
//Your code should go here:

