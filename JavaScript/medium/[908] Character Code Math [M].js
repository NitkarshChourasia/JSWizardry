/*
####  Character Code Math  ####

Turn each character in a string str into its ASCII character code and join them together to create a number.
For example, for string "abc", the number is 979899. We will call this number "num1".
___
"abc" ➞ "a" = 97, "b" = 98, "c" = 99 ➞ 979899
_____

Then replace any incidence of the number 7 with the number 1, and call this number "num2":
___
num1 = 979899

num2 = 919899
_____

Return the difference between the sum of the digits in num1 and num2:
___
  (9 + 7 + 9 + 8 + 9 + 9)
- (9 + 1 + 9 + 8 + 9 + 9)
-------------------------
         ➞  6
_____



[Examples]

___
calc("ABCDabcd") ➞ 12

calc("cdefgh") ➞ 0

calc("ifkhchlhfde") ➞ 6
_____



[Notes]

Lowercase and uppercase characters have different ASCII character codes.


[algorithms] [language_fundamentals] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a patter …
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator stri …
_________

*/
//Your code should go here:

