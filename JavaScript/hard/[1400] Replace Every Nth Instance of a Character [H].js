/*
####  Replace Every Nth Instance of a Character  ####

Create a function that takes a string and replaces every nth instance of oldChar with newChar. Your function will have four parameters:
___
*) str — The original input text to be processed.
*) nth — The nth instance to be replaced.
*) oldChar — The character being replaced.
*) newChar — The character replacing oldChar.
___

In other words, if str is "abababa", nth is 3, oldChar is "a" and newChar is "Z", you would replace the 3rd insrtance of "a" with "Z", returning "ababZba".


[Examples]

___
replaceNth("A glittering gem is not enough.", 0, "o", "-")
➞ "A glittering gem is not enough."

replaceNth("Vader said: No, I am your father!", 2, "a", "o")
➞ "Vader soid: No, I am your fother!"

replaceNth("Writing a list of random sentences is harder than I initially thought it would be.", 2, "i", "3")
➞ "Writ3ng a list of random sentences 3s harder than I in3tially thought 3t would be."
_____



[Notes]

___
*) If nth is 0, negative or larger than instances of oldChar, return the original string.
*) Tests are case sensitive.
___



[algorithms] [formatting] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
_________
_________
Arithmetic Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
Take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtract …
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________

*/
//Your code should go here:

