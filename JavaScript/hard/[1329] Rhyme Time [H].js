/*
####  Rhyme Time  ####

Create a function that returns true if two lines rhyme and false otherwise. For the purposes of this exercise, two lines rhyme if the last word from each sentence contains the same vowels.


[Examples]

___
doesRhyme("Sam I am!", "Green eggs and ham.") ➞ true

doesRhyme("Sam I am!", "Green eggs and HAM.") ➞ true
// Capitalization and punctuation should not matter.

doesRhyme("You are off to the races", "a splendid day.") ➞ false

doesRhyme("and frequently do?", "you gotta move.") ➞ false
_____



[Notes]

___
*) Case insensitive.
*) Here we are disregarding cases like "thyme" and "lime".
*) We are also disregarding cases like "away" and "today" (which technically rhyme, even though they contain different vowels).
___



[regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
replace() Method
https://www.w3schools.com/jsref/jsref_replace.asp
Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
_________
_________
String.prototype.search()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
Executes a search for a match between a regular expression and this String object.
_________
_________
Regular Expression Tester
https://regex101.com/
With syntax highlighting, explanation, cheat sheet for PHP/PCRE, Python, GO, JavaScript, Java. Features a regex quiz & library.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________

*/
//Your code should go here:

