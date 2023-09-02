/*
####  Calculate Elapsed Time  ####

Create a function that takes a timestamp for the start time sa and stop time st in HH:MM:SS format and returns the measured amount of elapsed time between start and stop times.


[Examples]

___
elapsedTime("11:00:00", "12:00:00") ➞ "01:00:00"

elapsedTime("13:01:43", "21:41:57") ➞ "08:40:14"

elapsedTime("17:34:43", "17:34:42") ➞ "23:59:59"
_____



[Notes]

___
*) All times will be provided in 24 Hrs format.
*) Consider Elapsed time will always be less than 24 Hrs.
___



[numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Date.prototype.setHours()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours
Sets the hours for a specified date according to local time, and returns the number of milliseconds since January 1, 1970 00:00:00 UTC until the time represented by the …
_________
_________
How to convert time milliseconds to hours, min, sec format?
https://stackoverflow.com/questions/19700283/how-to-convert-time-milliseconds-to-hours-min-sec-format-in-javascript
I have the time as milliseconds, but I want the time after conversion like 00:00:00. Ex: In milliseconds=86400000. I want how many hours in that milliseconds like, 00: …
_________

*/
//Your code should go here:

