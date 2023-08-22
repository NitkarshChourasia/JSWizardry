/*
####  Format Date String  ####

Create a function that takes a date object and return string in the following format:
___
YYYYMMDDHHmmSS
_____

The format should contain a 4 digit year, 2 digit month, 2 digit day, 2 digit hour(00-23), 2 digit minute and 2 digit second. If any of the value has only signle digit, you must use zero prefix, so that the result string length is always same.


[Examples]

___
formatDate(new Date(2020, 6, 4, 8, 0, 0)) ➞ "20200704080000"

formatDate(new Date(2019, 11, 31, 23, 59, 59)) ➞ "20191231235959"

formatDate(new Date(2020, 6, 4)) ➞ "20200704000000"
_____



[Notes]

___
*) Assume Date year input will always be greater than 1970.
*) Try not to rely on default Date.toString() output in your impelementation.
*) Be aware that the Date's month field is zero based (0 is January and 11 is December).
___



[dates] [formatting] 



-------------------------------------------------------------------
[Resources]
_________
Date
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
Is fundamentally specified as the number of milliseconds that have elapsed since midnight on January 1, 1970, UTC. This date and time is the same as the UNIX epoch, whi …
_________
_________
String.prototype.padStart()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of th …
_________
_________
Object.values() Method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop …
_________
_________
Template literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
_________

*/
//Your code should go here:

