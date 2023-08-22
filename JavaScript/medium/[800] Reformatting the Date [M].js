/*
####  Reformatting the Date  ####

Create a function that converts dates from one of five string formats:

The return value will be an array formatted like: [MM, DD, YYYY], where MM, DD, and YYYY are all integers. Using the examples above:


[Examples]

___
convertDate("January 9, 2019") ➞ [1, 9, 2019]

convertDate("Jan 9, 2019") ➞ [1, 9, 2019]

convertDate("01/09/2019") ➞ [1, 9, 2019]

convertDate("01-09-2019") ➞ [1, 9, 2019]

convertDate("01.09.2019") ➞ [1, 9, 2019]
_____



[Notes]

You can solve this any number of ways, but using JavaScript's new Date() method is probably the easiest. Check the Resources tab for documentation.


[dates] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
.getYear(), .getMonth() and .getDate() methods
https://www.w3schools.com/js/js_date_methods.asp
The `.getYear()` method counts the number of years from 1900. The `.getMonth()` method starts at 0 (NOT 1), so remember to increment by 1 when retrieving the month.
_________
_________
split() Method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
JavaScript Date Formats
https://www.w3schools.com/js/js_date_formats.asp
There are generally 3 types of JavaScript date input formats: ISO Date, Short Date and Long Date. Independent of input format, JavaScript will (by default) output dates …
_________
_________
Date
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
Represents a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
_________
_________
Date.prototype.toLocaleDateString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
Returns a string with a language sensitive representation of the date portion of this date. The new locales and options arguments let applications specify the language …
_________

*/
//Your code should go here:

