/*
####  Time Around the World  ####

In this challenge, the goal is to calculate what time it is in two different cities. You're given a string cityA and the related string timestamp (time in cityA) with the date formatted in full U.S. notation, as in this example:
___
"July 21, 1983 23:01"
_____

You have to return a new timestamp with date and corresponding time in cityB, formatted as in this example:
___
"1983-7-21 23:01"
_____

See the table below for a list of given cities and their GMT (Greenwich Mean Time) hours offsets.



[Examples]

___
timeDifference("Los Angeles", "April 1, 2011 23:23", "Canberra") ➞ "2011-4-2 17:23"
// Can be a new day.

timeDifference("London", "July 31, 1983 23:01", "Rome") ➞ "1983-8-1 00:01"
// Can be a new month.

timeDifference("New York", "December 31, 1970 13:40", "Beijing") ➞ "1971-1-1 02:40"
// Can be a new year.
_____



[Notes]

___
*) Pay attention to hours and minutes, a leading 0 is needed in the returned timestamp when they're a single digit (see examples #2 and #3).
*) Pay attention to cities with half hours offsets.
___



[dates] [formatting] 



-------------------------------------------------------------------
[Resources]
_________
Date Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
Creates a JavaScript Date instance that represents a single moment in time in a platform-independent format.
_________

*/
//Your code should go here:

