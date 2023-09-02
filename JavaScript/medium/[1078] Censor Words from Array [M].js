/*
####  Censor Words from Array  ####

Create a function that takes a string str and censors any word from a given array arr. The text removed must be replaced by the given character char.


[Examples]

___
censorString("Today is a Wednesday!", ["Today", "a"], "-") ➞ "----- is - Wednesday!"

censorString("The cow jumped over the moon.", ["cow", "over"], "*"), "The *** jumped **** the moon.")

censorString("Why did the chicken cross the road?", ["Did", "chicken", "road"], "*") ➞ "Why *** the ******* cross the ****?"
_____



[Notes]

N/A


[formatting] [language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/split
Turns a String into an array of strings, by separating the string at each instance of a specified separator string.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string that contains the specified number of copies of the string on which it was called, concatenated together.
_________

*/
//Your code should go here:

