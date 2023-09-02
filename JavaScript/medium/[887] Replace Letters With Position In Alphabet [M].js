/*
####  Replace Letters With Position In Alphabet  ####

Create a function that takes a string and replaces each letter with its appropriate position in the alphabet. "a" is 1, "b" is 2, "c" is 3, etc, etc.


[Examples]

___
alphabetIndex("Wow, does that work?")
➞ "23 15 23 4 15 5 19 20 8 1 20 23 15 18 11"

alphabetIndex("The river stole the gods.")
➞ "20 8 5 18 9 22 5 18 19 20 15 12 5 20 8 5 7 15 4 19"

alphabetIndex("We have a lot of rain in June.")
➞ "23 5 8 1 22 5 1 12 15 20 15 6 18 1 9 14 9 14 10 21 14 5"
_____



[Notes]

___
*) If any character in the string isn't a letter, ignore it.
*) Return numbers as a string seperated by single spaces.
___



[formatting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Replace Letters with Position in Alphabet
https://stackoverflow.com/questions/40515254/replace-letters-with-position-in-alphabet-regex
This challenge's description is to take a string and replace the letters with the letters position in the alphabet starting from 1-index. Requires you to skip all non-c …
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
String.prototype.toLowerCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
Returns the calling string value converted to lower case.
_________

*/
//Your code should go here:

