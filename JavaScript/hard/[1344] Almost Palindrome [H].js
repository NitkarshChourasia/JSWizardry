/*
####  Almost Palindrome  ####

A string is an almost-palindrome if, by changing only one character, you can make it a palindrome. Create a function that returns true if a string is an almost-palindrome and false otherwise.


[Examples]

___
almostPalindrome("abcdcbg") ➞ true
// Transformed to "abcdcba" by changing "g" to "a".

almostPalindrome("abccia") ➞ true
// Transformed to "abccba" by changing "i" to "b".

almostPalindrome("abcdaaa") ➞ false
// Can't be transformed to a palindrome in exactly 1 turn.

almostPalindrome("1234312") ➞ false
_____



[Notes]

Return false if the string is already a palindrome.


[strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.replace()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
_________

*/
//Your code should go here:

