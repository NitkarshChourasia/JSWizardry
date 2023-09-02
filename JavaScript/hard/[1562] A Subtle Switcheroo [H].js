/*
####  A Subtle Switcheroo  ####

Create a function which replaces all instances of "nts" with "nce" and vice versa if they are at the end of a word.


[Examples]

___
switcheroo("The elephants in France were chased by ants!") ➞ "The elephance in Frants were chased by ance!"

switcheroo("While he rants, I fall into a trance...") ➞ "While he rance, I fall into a trants..."

switcheroo("Bounced over the fence!") ➞ "Bounced over the fents!"
_____



[Notes]

___
*) Empty strings should return just an empty string (see example #2).
*) Ignore punctuation and any instances where "nts" or "nce" are not at the end of a word (see example #3).
___



[regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
String.prototype.endsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
_________
_________
TypedArray.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join
Joins all elements of an array into a string. This method has the same algorithm as Array.prototype.join(). TypedArray is one of the typed array types here.
_________

*/
//Your code should go here:

