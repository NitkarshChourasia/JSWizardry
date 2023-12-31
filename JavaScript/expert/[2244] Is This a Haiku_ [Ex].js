/*
####  Is This a Haiku?  ####

Haikus are poems formed by three lines of 5, 7, and 5 syllables. Your task is to write a function that determines if a given poem scans as a Haiku.
How to count syllables:
___
*) Every syllable must contain at least one vowel.
*) If two or more vowels appear back to back, they should be counted as a single vowel (e.g. "fair").
*) If an "e" appears at the end of a word, it shouldn't be counted, as those aren't usually pronounced. That extends to words ending in es or e's.
*) An exception to the previous point is a word whose only vowel appears at the end (e.g. "the" or "She's").
*) "Y" counts as a vowel.
___



[Examples]

___
haiku("New vids ev'ry day / Never skipped a single day / I'll see you in March") ➞ true

haiku("Delightful display / Snowdrops bow their pure white heads / To the sun's glory") ➞ true

haiku("Superman's my fav / Wonder Woman is pretty dope / Don't forget Rorschach") ➞ false
_____



[Notes]

___
*) Each new line of the poem will be marked with a /.
*) You may find commas, apostrophes, and other punctuation marks.
___



[regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.endsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. …
_________

*/
//Your code should go here:

