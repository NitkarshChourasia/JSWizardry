/*
####  To Adjust the Time  ####

In this challenge, you have to add a variable amount of hours, minutes and seconds to a given time, obtaining, in turn, a new adjusted time.
Given a string now being a timestamp in the format hh:mm:ss, and three integers hrs, min and sec being the hours, minutes and seconds to add, implement a function that returns a string being the newly adjusted timestamp (maintaining the same format).


[Examples]

___
timeAdjust("01:00:00", 1, 30, 10) ➞ "02:30:10"

timeAdjust("18:22:30", 4, 60, 30) ➞ "23:23:00"

timeAdjust("00:00:00", 72, 120, 120) ➞ "02:02:00"
_____



[Notes]

___
*) The amounts of hrs, min and sec can be any positive integer, and you have to correctly add them to the corresponding unit if they exceed their scale. See example #2: sixty minutes is one hour, and sixty seconds (30 + 30) is one minute.
*) If the amount of time to add exceeds the 24 hours, then the time will start again from "00:00:00". See example #3: 72 hours are 3 exact days so that after three cycles of 24 hours, the hour will be again "00" (and becomes "02" because we are adding also 120 minutes or 2 hours).
___



[dates] [formatting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Date.prototype.toTimeString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString
Returns the time portion of a Date object in human readable form in American English.
_________
_________
Date.prototype.setUTCHours()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
Sets the hour for a specified date according to universal time, and returns the number of milliseconds since  January 1, 1970 00:00:00 UTC until the time represented by …
_________

*/
//Your code should go here:

