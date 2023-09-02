/*
####  Adding Both Ends Together  ####

Given an array of numbers, of any length, create a function which counts how many of those numbers pass the following criteria:
___
*) The first and last digits of a number must add to 10.
___



[Examples]

___
endsAddTo10([19, 46, 2098]) ➞ 3

endsAddTo10([33, 44, -55]) ➞ 1

endsAddTo10([]) ➞ 0
_____



[Notes]

___
*) All items in the array will be numbers.
*) Ignore negative signs (see example #2).
*) If the number contains only one digit, that digit will be the first and the last digit.
*) If given an empty array, return 0.
___



[arrays] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where …
_________
_________
Object.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
Returns a string representing the object.
_________

*/
//Your code should go here:

