/*
####  Modified Kaprekar Numbers  ####

A modified Kaprekar number is a positive whole number with a special property. If you square it, then split the number into two integers and sum those integers, you have the same value you started with.
Consider a positive whole number n with d digits. We square n to arrive at a number that is either 2 * d digits long or (2 * d) - 1 digits long. Split the string representation of the square into two parts, l and r. The right-hand part, r must be d digits long. The left is the remaining substring. Convert those two substrings back to integers, add them and see if you get n.
For example, if n=5, d=1, then n squared = 25 . We split that into two strings and convert them back to integers 2 and 5. We test 2+5=7=5, so this is not a modified Kaprekar number. If n=9, d=1, and n squared = 81. This gives us 1+8=9, the original n.
Note that r may have leading zeros.
Complete the kaprekarNumbers() method. It should return the list of modified Kaprekar numbers in ascending order. kaprekarNumbers() has the following parameter(s):
___
*) p: an integer representing the lower integer limit.
*) q: an integer representing the upper integer limit.
___



[Examples]

___
kaprekarNumbers(1, 10) ➞ "1 9"

kaprekarNumbers(100, 300) ➞ "297"

kaprekarNumbers(1, 100) ➞ "1 9 45 55 99"
_____



[Notes]

___
*) Upper and lower ranges should be inclusive of the limits.
*) If no modified Kaprekar numbers exist in the given range, return "INVALID RANGE".
___



[algorithms] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Kaprekar Numbers
https://www.numbersaplenty.com/set/Kaprekar_number/
A number $n$ whose square can be partitioned into two parts whose sum is $n$ itself is called Kaprekar number. For example, $45$ is a Kaprekar number, because $4 …
_________
_________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________
_________
String.prototype.substring()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
_________

*/
//Your code should go here:

