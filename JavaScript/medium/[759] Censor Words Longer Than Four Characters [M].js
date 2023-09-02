/*
####  Censor Words Longer Than Four Characters  ####

Create a function that takes a string and censors words over four characters with *.


[Examples]

___
censor("The code is fourty") ➞ "The code is ******"

censor("Two plus three is five") ➞ "Two plus ***** is five"

censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"
_____



[Notes]

___
*) Don't censor words with exactly four characters.
*) If all words have four characters or less, return the original string.
*) The amount of * is the same as the length of the word.
___



[conditions] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/split
Turns a String into an array of strings, by separating the string at each instance of a specified separator string.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________

*/
//Your code should go here:

