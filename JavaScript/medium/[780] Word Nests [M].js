/*
####  Word Nests  ####

A word nest is created by taking a starting word, and generating a new string by placing the word inside itself. This process is then repeated.
Nesting 3 times with the word "incredible":
___
start  = incredible
first  = incre|incredible|dible
second = increin|incredible|credibledible
third  = increinincr|incredible|ediblecredibledible
_____

The final nest is "increinincrincredibleediblecredibledible" (depth = 3).
Given a starting word and the final word nest, return the depth of the word nest.


[Examples]

___
wordNest("floor", "floor") ➞ 0

wordNest("code", "cocodccococodededeodeede") ➞ 5

wordNest("incredible", "increinincrincredibleediblecredibledible") ➞ 3
_____



[Notes]

N/A


[language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
Indicates the length of a string, in UTF-16 code units.
_________
_________
Recursion and Stack
https://javascript.info/recursion
Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can …
_________

*/
//Your code should go here:

