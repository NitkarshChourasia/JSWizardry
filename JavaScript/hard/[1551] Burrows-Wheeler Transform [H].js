/*
####  Burrows-Wheeler Transform  ####

Burrows-Wheeler transform (BWT) is an algorithm which is used in data compression. Given a string text, BWT of text is a modified version of the string with same length as text. It can then be used to efficiently find substrings of text (which won't be covered here). We will just find the BWT of text.

___
// Example with text = "banana$"

// BWM (all rotations of text):
banana$
anana$b
nana$ba
ana$ban
na$bana
a$banan
$banana

// BWM sorted lexicographically:
$banana
a$banan
ana$ban
anana$b
banana$
na$bana
nana$ba

// BWT (last coloumn of BWM):
annb$aa
_____



[Examples]

___
bwTransform("banana$") ➞ "annb$aa"

bwTransform("mississippi$") ➞ "ipssm$pissii"

bwTransform("acccgtttgtttcaatagatccatcaa$") ➞ "aacc$tacgttctaccatcaatatttgg"
_____



[Notes]

Consider $ as the terminator character at the end of every input text.


[cryptography] [formatting] [sorting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Burrows–Wheeler Transform
https://en.wikipedia.org/wiki/Burrows%E2%80%93Wheeler_transform
Rearranges a character string into runs of similar characters. This is useful for compression, since it tends to be easy to compress a string that has runs of repeated …
_________
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________

*/
//Your code should go here:

