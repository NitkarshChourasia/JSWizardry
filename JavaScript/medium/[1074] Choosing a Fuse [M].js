/*
####  Choosing a Fuse  ####

A fuse melts when a current in an electrical device exceeds the fuse's rating, breaking the circuit and preventing the heat from building up too much (which can cause a fire). The ideal fuse to choose is higher than the device's current output, yet as close as possible to it as well.
Given an array of fuse ratings, and the device's current output, return which of the fuses is the best for the device.


[Examples]

___
chooseFuse(["3V", "5V", "12V"], "4.5V") ➞ "5V"

chooseFuse(["5V", "14V", "2V"], "5.5V") ➞ "14V"

chooseFuse(["17V", "15V", "12V"], "9V") ➞ "12V"
_____



[Notes]

___
*) You will be given three possible ratings in voltage.
*) Fuses may not be in a sorted order.
*) Assume that there is a valid fuse in every test case
___



[algorithms] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Returns the value of the first element in the provided array that satisfies the provided testing function.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________

*/
//Your code should go here:

