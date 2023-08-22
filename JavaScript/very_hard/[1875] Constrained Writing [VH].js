/*
####  Constrained Writing  ####

In this challenge, establish which type of constrained writing is applied to a sentence. There are four possible types to detect:
___
*) Pangram: the sentence contains all the 26 letters of the English alphabet.
*) Heterogram: the sentence doesn't have multiple instances of its letters (as to say that every letter is unique).
*) Tautogram: every word of the sentence starts with the same letter.
*) Transgram: all words of the sentence share at least a common letter.
___

Given a string txt being a sentence, implement a function that returns the strings "Pangram", "Heterogram", "Tautogram" or "Transgram" accordingly to the above definitions and following the same given order to establish the result. If no constrained writing is detected, return the string "Sentence".


[Examples]

___
constraint("The quick brown fox jumps over the lazy dog.") ➞ "Pangram"
// The sentence contains every letter of the alphabet.
// Repetitions are not considered.

constraint("The big dwarf only jumps.") ➞ "Heterogram"
// The sentence has only unique characters.

constraint("Todd told Tom to take the tiny turtles.") ➞ "Tautogram"
// Every word starts with the letter "t".

constraint("A cannibal alligator has attacked an unaware vegan alligator.") ➞ "Transgram"
// Every word contains the letter "a".

constraint("The unbearable lightness of coding...") ➞ "Sentence"
// No constraint is applied to the sentence.
_____



[Notes]

___
*) Remember to respect the given order to establish the result: a Pangram has to be detected before a Heterogram, and a Tautogram has to be detected before a Transgram.
*) Sentences will contain letters (either uppercase or lowercase) and punctuation. Your function must be case-insensitive.
___



[logic] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Constrained Writing
https://en.wikipedia.org/wiki/Constrained_writing
A literary technique in which the writer is bound by some condition that forbids certain things or imposes a pattern. Constraints are very common in poetry, which often …
_________
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function.
_________
_________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________

*/
//Your code should go here:

