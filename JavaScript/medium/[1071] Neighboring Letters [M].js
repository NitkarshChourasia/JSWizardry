/*
####  Neighboring Letters  ####

Create a function that takes a string and checks if every single character is preceded and followed by a character adjacent to it in the english alphabet.
Example: "b" should be preceded and followed by ether "a" or "c" (abc || cba || aba || cbc == true but abf || zbc == false).


[Examples]

___
neighboring("aba") ➞ true

neighboring("abcdedcba") ➞ true

neighboring("efghihfe") ➞ false

neighboring("abc") ➞ true

neighboring("qrstuv") ➞ true

neighboring("mnopqrstsrqponm") ➞ false
_____



[Notes]

All test cases will consist of lower case letters only.


[formatting] [higher_order_functions] [language_fundamentals] [loops] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________

*/
//Your code should go here:

