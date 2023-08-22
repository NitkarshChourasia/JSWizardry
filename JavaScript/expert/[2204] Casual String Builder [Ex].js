/*
####  Casual String Builder  ####

The function is given a string with some square brackets in it. You need to build the outcome string using the rule: k[substring] is replaced by the substring inside the square brackets being repeated exactly k times.


[Examples]

___
stringBuilder("3[a]2[bc]") ➞ "aaabcbc"

stringBuilder("3[a2[c]]") ➞ "accaccacc"

stringBuilder("2[abc]3[cd]ef") ➞ "abcabccdcdcdef"
_____



[Notes]

k is a positive integer.


[conditions] [formatting] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________

*/
//Your code should go here:

