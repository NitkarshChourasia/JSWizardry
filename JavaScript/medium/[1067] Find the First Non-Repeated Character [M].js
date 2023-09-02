/*
####  Find the First Non-Repeated Character  ####

Create a function that accepts a string as an argument and returns the first non-repeated character.


[Examples]

___
firstNonRepeatedCharacter("g") ➞ "g"

firstNonRepeatedCharacter("it was then the frothy word met the round night") ➞ "a"

firstNonRepeatedCharacter("the quick brown fox jumps then quickly blows air") ➞ "f"

firstNonRepeatedCharacter("hheelloo") ➞ false

firstNonRepeatedCharacter("") ➞ false
_____



[Notes]

___
*) An empty string should return false.
*) If every character repeats, return false.
*) Don't worry about case sensitivity or non-alphanumeric characters.
___



[interview] [language_fundamentals] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
_________
_________
String.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
_________
_________
String.prototype.charAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
_________
_________
Write a function to find the first non-repeated character in a string?
https://codereview.stackexchange.com/questions/45228/write-a-function-to-find-the-first-non-repeated-character-in-a-string
Here is a practice question I am solving: Write a function to find the first non-repeated character in a string. For instance, the first non-repeated character in 'tota …
_________
_________
Given a String, Find Its First Non-Repeating Character
https://www.geeksforgeeks.org/given-a-string-find-its-first-non-repeating-character/
Given a string, find the first non-repeating character in it. For example, if the input string is “GeeksforGeeks”, then output should be ‘f’ and if input string is “Gee …
_________

*/
//Your code should go here:

