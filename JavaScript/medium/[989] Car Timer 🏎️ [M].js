/*
####  Car Timer 🏎️  ####

A built-in timer inside your car can count the length of your ride in minutes and you have started your ride at 00:00.
Given the number of minutes n at the end of the ride, calculate the current time. Return the sum of digits that the digital timer in the format hh:mm will show at the end of the ride.


[Examples]

___
carTimer(240) ➞ 4
// 240 minutes have passed since 00:00, the current time is 04:00
// Digits sum up is 0 + 4 + 0 + 0 = 4

carTimer(14) ➞ 5
// Digits sum up is 0 + 0 + 1 + 4

carTimer(808) ➞ 14
_____



[Notes]

N/A


[algorithms] [conditions] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
String.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString
Returns a string representing the specified object.
_________
_________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Math.trunc()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
Returns the integer part of a number by removing any fractional digits.
_________

*/
//Your code should go here:

