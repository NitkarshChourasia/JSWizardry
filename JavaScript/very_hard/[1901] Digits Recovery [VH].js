/*
####  Digits Recovery  ####

Mubashir shuffled a given string of letters by mistake. Some letters in the input string are representing a digit (from zero to nine). Help him to recover all the digits.
___
*) Only consecutive letters can be used. "OTNE" cannot be recovered to 1.
*) Every letter has to start with an increasing index. "ONENO" results to 11, because E can be used two times.
*) You can ignore all letters in the string if they don't end-up in a digit.
*) If no digits can be found, return "No digits found"
*) Take care about the order! "ENOWT" will be recovered to 12 and not to 21.
*) The input string consists only UpperCase letters.
___



[Examples]

___
digitsRecovery("NEO") ➞ "1"

digitsRecovery("ONETWO") ➞ "12"

digitsRecovery("ZYX") ➞ "No digits found"

digitsRecovery("NEOTWONEINEIGHTOWSVEEN") ➞ "12219827"
_____



[Notes]

You can use dictionary in the code tab.


[algorithms] [logic] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________

*/
//Your code should go here:

