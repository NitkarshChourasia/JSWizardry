/*
####  Sort the Dates  ####

In this challenge, sort an array containing a series of dates given as strings. Each date is given in the format DD-MM-YYYY_HH:MM:
___
"12-02-2012_13:44"
_____

The priority of criteria used for sorting will be:
___
*) Year
*) Month
*) Day
*) Hours
*) Minutes
___

Given an array arr and a string type, implement a function that returns:
___
*) if type is equal to "ASC", the array arr sorted in ascending order.
*) if type is equal to "DSC", the array arr sorted in descending order.
___



[Examples]

___
sortDates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "ASC") ➞ [
  "10-02-2016_12:30", "10-02-2018_12:15", "10-02-2018_12:30"
]

sortDates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "DSC") ➞ [
  "10-02-2018_12:30", "10-02-2018_12:15", "10-02-2016_12:30"
]

sortDates(["09-02-2000_10:03", "10-02-2000_18:29", "01-01-1999_00:55"], "ASC") ➞ [
  "01-01-1999_00:55", "09-02-2000_10:03", "10-02-2000_18:29"
]
_____



[Notes]

___
*) Remember: the date is in the format DD-MM-YYYY_HH:MM.
*) You can expect only valid formatted dates, without exceptions to handle.
___



[dates] [sorting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.sort() - JavaScript | MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into str …
_________
_________
Destructuring assignment - JavaScript | MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
_________
_________
JavaScript Sort by Two Fields (Example)
https://coderwall.com/p/ebqhca/javascript-sort-by-two-fields
A protip by davidcollingwood about multiple, javascript, and sort.
_________
_________
String.prototype.match() - JavaScript | MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/match
The match() method retrieves the result of matching a string against a regular expression.
_________

*/
//Your code should go here:

