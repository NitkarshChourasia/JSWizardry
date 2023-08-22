/*
####  Tally Marks  ####

Create a function that can convert from normal notation to tally-mark notation and vice versa. In tally-mark notation, a number can be decomposed as the sum of 5s + remainder.
The function will look like this: switchNotation([current scores], desired notation)
___
Ex.1 Normal: 3, 24, 4, 9
Ex.1 Tally: 3, 55554, 4, 54

Ex.2 Normal: 2, 12, 2, 4
Ex.2 Tally: 2, 552, 2, 4
_____



[Examples]

___
switchNotation([51], "normal") ➞ [6]

switchNotation([3, 55, 55551], "normal") ➞ [3, 10, 21]

switchNotation([15, 29, 5, 3], "tally") ➞ [555, 555554, 5, 3]
_____



[Notes]

N/A


[arrays] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Number.prototype.toString()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
Returns a string representing the specified Number object.
_________
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Math.floor()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
_________

*/
//Your code should go here:

