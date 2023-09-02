/*
####  Consonant-Vowel Coding  ####

Create a function that takes in a sentence and returns a running list of consonants per word and vowels per word.


[Examples]

___
stringCode("Happy Birthday To Me!")
➞ ["4 6 1 1", "1 2 1 1"]

// Consonants - 4 : [H, p, p, y], 6 : [B, r, t, h, d, y], 1: [T], 1 : [M]
// Vowels - 1: [a], 2 : [i, a], 1: [o], 1: [e]

stringCode("I'd like to drink my first glass of champagne.")
➞ [ "1 2 1 4 2 4 4 1 6', '1 2 1 1 0 1 1 1 3"]

stringCode("The first man to walk on the moon was Neil Armstrong.")
➞ [ "2 4 2 1 3 1 2 2 2 2 7", "1 1 1 1 1 1 1 2 1 2 2" ]
_____



[Notes]

___
*) Count y as a consonant.
*) Capitalization does not matter.
*) Only count letters and disregard all other characters (e.g. numbers, punctuation, etc).
*) A space between numbers is required (["1 2 3", "4 5 6"] vs. ["1,2,3", "4,5,6"]).
___



[higher_order_functions] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
String.prototype.trim()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
Removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminato …
_________

*/
//Your code should go here:

