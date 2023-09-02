/*
####  Magic Sigil Generator  ####

A magic sigil is a glyph which represents a desire one wishes to manifest in their lives. There are many ways to create a sigil, but the most common is to write out a specific desire (e.g. "I HAVE WONDERFUL FRIENDS WHO LOVE ME"), remove all vowels, remove any duplicate letters (keeping the last occurence), and then design a glyph from what remains.
Using the sentence above as an example, we would remove duplicate letters:
___
AUFRINDSWHLOVME
_____

And then remove all vowels, leaving us with:
___
FRNDSWHLVM
_____

Create a function that takes a string and removes its vowels and duplicate letters. The returned string should not contain any spaces and be in uppercase.


[Examples]

___
sigilize("i am healthy") ➞ "MLTHY"

sigilize("I FOUND MY SOULMATE") ➞ "FNDYSLMT"

sigilize("I have a job I enjoy and it pays well") ➞ "HVBJNDTPYSWL"
_____



[Notes]

___
*) For duplicate letters the last one is kept.
*) When performing actual sigil magic, you must make your sigils manually.
*) Check the Resources tab for more info on sigils if you're interested in the concept.
___



[formatting] [loops] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
RegExp Constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
Creates a regular expression object for matching text with a pattern.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Array.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
_________
_________
Sigil Magic: How to Manifest Your Desires
https://houseofintuitionla.com/blogs/news/sigil-magic-how-to-manifest-your-desires
Sigils are probably one of the most common kinds of magic we all see in the modern world, but no one seems to notice. Sigil magic is the art of using symbols and imager …
_________

*/
//Your code should go here:

