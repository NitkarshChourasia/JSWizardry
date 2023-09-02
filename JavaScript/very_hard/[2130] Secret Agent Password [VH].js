/*
####  Secret Agent Password  ####

Mubashir is going on a secret mission. He needs your help but you have to learn how to encode a secret password to communicate safely with other agents. Create a function that takes an argument message and returns the encoded password.
There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
___
secretPassword("mubashirh") ➞ "hsajsi13u2"
_____

Step 1: Message length should be of nine characters containing only lowercase letters from 'a' to 'z'. If the argument doesn't meet this requirement you must return "BANG! BANG! BANG!" (Remember, there are no second chances in the spy world!)
Step 2: Divide the string into three equal parts of three characters each:
___
1 - mub
2 - ash
3 - irh
_____

Step 3: Convert the first and third letter to the corresponding number, according to the English alphabets (ex. a = 1, b = 2, c = 3 ... z = 26, etc).
___
mub = 13u2
_____

Step 4: Reverse the fourth, fifth, and sixth letters:
___
ash = hsa
_____

Step 5: Replace seventh, eighth, and ninth letter with next letter (z will be substituted with a).
___
irh = jsi
_____

Step 6: Return the string in the following order: "Part_2+Part_3+Part_1"
___
"hsajsi13u2"
_____

See the below examples for a better understanding:


[Examples]

___
secretPassword("mubashirh") ➞ "hsajsi13u2"

secretPassword("mattedabi") ➞ "detbcj13a20"

secretPassword("HeLen-eda") ➞ "BANG! BANG! BANG!"
// Length is not equal to 9
// Contains characters other than lower alphabets
_____



[Notes]

N/A


[algorithms] [cryptography] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
String.prototype.substring()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
_________
_________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
String.fromCharCode()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
Returns a string created from the specified sequence of UTF-16 code units.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________

*/
//Your code should go here:

