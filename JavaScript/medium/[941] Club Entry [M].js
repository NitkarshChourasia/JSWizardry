/*
####  Club Entry  ####

A night club will give you a word. For entrance, you need to provide the right number according to the provided word.
Every given word will have a doubled letter, like "dd" in addiction. To answer the right number you need to find the doubled letter's position in the alphabet and multiply this number with 4.
Create a function that takes the argument of word and returns the right number.


[Examples]

___
clubEntry("hill") ➞ 48
// 'l' is 12th in the alphabet
// 12*4 = 48

clubEntry("apple") ➞ 64

clubEntry("bee") ➞ 20
_____



[Notes]

N/A


[logic] [numbers] [regex] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
ASCII - Binary Character Table
http://sticksandstones.kstrom.com/appen.html
ASCII - Binary Character Table
_________
_________
String.prototype.charAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
_________
_________
Regular Expression to Check for Repeating Characters
https://stackoverflow.com/questions/12258622/regular-expression-to-check-for-repeating-characters
I had to create a regular expression that allows in either the text "*ALL" (case independent) OR characters in the ranges a-z, A-Z and 0-9 which must be 17 characters l …
_________
_________
split() Method
https://www.w3schools.com/jsref/jsref_split.asp
Is used to split a string into an array of substrings, and returns the new array. Tip: If an empty string ("") is used as the separator, the string is split between ea …
_________
_________
Convert Character to ASCII Code
https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript
For opposite use String.fromCharCode(10) that convert numbers to equal ASCII character. This function can accept multiple numbers and join all the characters then retur …
_________
_________
Match a Character Repetition With Regex
https://stackoverflow.com/questions/1023902/it-is-possible-to-match-a-character-repetition-with-regex-how
Match consecutive occurrences of any character.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified …
_________

*/
//Your code should go here:

