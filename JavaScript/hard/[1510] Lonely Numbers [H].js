/*
####  Lonely Numbers  ####

Given a number, insert duplicate digits on both sides of all digits which appear in a group of 1.


[Worked Example]

___
numbersNeedFriendsToo(22733) ➞ 2277733

// The number can be split into groups 22, 7, and 33.
// 7 appears on its own.
// Put 7s on both sides to create 777.
// Put the numbers together and return the result.
_____



[Examples]

___
numbersNeedFriendsToo(123) ➞ 111222333

numbersNeedFriendsToo(56657) ➞ 55566555777

numbersNeedFriendsToo(33) ➞ 33
_____



[Notes]

All tests will include positive integers.


[loops] [numbers] [regex] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
The Map object holds key-value pairs and remembers the original insertion order of the keys.
_________
_________
Array.prototype.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
_________
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________

*/
//Your code should go here:

