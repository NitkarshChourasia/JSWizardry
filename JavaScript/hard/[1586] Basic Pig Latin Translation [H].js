/*
####  Basic Pig Latin Translation  ####

Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds "ay" to the end of the word. This is called "Pig Latin" and it gets more complicated than the rules in this particular challenge. I've intentionally kept things simple, otherwise this would turn into an extremely tedious challenge.
___
*) Move the first letter of each word to the end of the word.
*) Add "ay" to the end of the word.
*) Words starting with a vowel (A, E, I, O, U) simply have "WAY" appended to the end.
___



[Examples]

___
pigLatin("Cats are great pets.")
➞ "Atscay areway reatgay etspay."

pigLatin("Tom got a small piece of pie.")
➞ "Omtay otgay away mallsay iecepay ofway iepay."

pigLatin("He told us a very exciting tale.")
➞ "Ehay oldtay usway away eryvay excitingway aletay."
_____



[Notes]

Be sure to preserve proper capitalization and punctuation.


[algorithms] [formatting] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________
_________
Pig Latin (JavaScript Intermediate Algorithm)
https://www.brav3.net/blog/freecodecamp/frontend/javascript/fcc-pig-latin-javascript-intermediate-algorithm/
We need to convert English dictionary words to pig latin using the following rules: Move the first set of consonants up to the first vowel to the end of the word. Then …
_________
_________
Pig Latin Translator
https://stackoverflow.com/questions/10306899/pig-latin-translator-javascript
So for my cit class I have to write a pig Latin converter program and I'm really confused on how to use arrays and strings together. The rules for the conversion are si …
_________
_________
Pig Latin
https://en.wikipedia.org/wiki/Pig_Latin
Pig Latin is a language game in which words in English are altered. The objective is to conceal the words from others not familiar with the rules. The reference to Lati …
_________
_________
Regular Expressions Cheat Sheet By DaveChild
https://www.cheatography.com/davechild/cheat-sheets/regular-expressions/
Regular Expressions Cheat Sheet from DaveChild. A quick reference guide for regular expressions (regex), including symbols, ranges, grouping, assertions and some sample …
_________

*/
//Your code should go here:

