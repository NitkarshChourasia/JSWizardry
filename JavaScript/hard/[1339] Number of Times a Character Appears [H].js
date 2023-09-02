/*
####  Number of Times a Character Appears  ####

Create a function that returns the number of times a character appears in each word in a sentence. Treat upper and lower case characters of the same letter as being identical (e.g. a exists in Anna twice, not once).


[Examples]

___
charAppears("She sells sea shells by the seashore.", "s")
➞ [1, 2, 1, 2, 0, 0, 2]
// "s" shows up once in "She", twice in "sells", once in "sea", twice in "shells", etc.

charAppears("Peter Piper picked a peck of pickled peppers.", "P")
➞ [1, 2, 1, 0, 1, 0, 1, 3]
// "p" shows up once in "Peter", ... 3 times in "peppers".

charAppears("She hiked in the morning, then swam in the river.", "t")
➞ [0, 0, 0, 1, 0, 1, 0, 0, 1, 0]
_____



[Notes]

Ignore case (note that capitalization, in both the sentence and character itself, in examples #1 & #2).


[arrays] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where …
_________
_________
Higher-Order Functions
https://eloquentjavascript.net/05_higher_order.html
A large program is a costly program, and not just because of the time it takes to build. Size almost always involves complexity, and complexity confuses programmers. Co …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
RegExp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
Is used for matching text with a pattern.
_________

*/
//Your code should go here:

