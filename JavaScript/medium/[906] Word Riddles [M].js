/*
####  Word Riddles  ####

What does the word LFAND represent? It represents the word Finland, because F is in LAND!
Create a function which replicates this to create brand new original word riddles! For the purposes of this challenge, take the string of letters before the word "in", and insert it into the 2nd letter position of the word formed after the word "in".
See the examples below for further clarity :)


[Examples]

___
makeWordRiddle("Finland") ➞ "LFAND"

makeWordRiddle("dinner") ➞ "NDER"

makeWordRiddle("tkinter") ➞ "TTKER"

makeWordRiddle("STRINGS") ➞ "GSTRS"
_____



[Notes]

___
*) All words given will contain only one occurence of "in" (so no occurences of the words Insulin, Infinity, etc).
*) There will be no examples of Interest, Pin, or Ping, etc... as there is no clear way to insert the strings into one another.
*) Return in all CAPS.
___



[language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.substring()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
Capturing Groups
https://javascript.info/regexp-groups
Without parentheses, the pattern go+ means g character, followed by o repeated one or more times. For instance, goooo or gooooooooo.
_________

*/
//Your code should go here:

