/*
####  Break Point  ####

A number has a breakpoint if it can be split in a way where the digits on the left side and the digits on the right side sum to the same number.
For instance, the number 35190 can be sliced between the digits 351 and 90, since 3 + 5 + 1 = 9 and 9 + 0 = 9. On the other hand, the number 555 does not have a breakpoint (you must split between digits).
Create a function that returns true if a number has a breakpoint, and false otherwise.


[Examples]

___
breakPoint(159780) ➞ true

breakPoint(112) ➞ true

breakPoint(1034) ➞ true

breakPoint(10) ➞ false

breakPoint(343) ➞ false
_____



[Notes]

___
*) Read each digit as only one number.
*) Check the Resources tab for a hint.
___



[arrays] [loops] [validation] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.substring()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
_________
_________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#Examples
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________

*/
//Your code should go here:

