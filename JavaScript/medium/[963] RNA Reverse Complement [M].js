/*
####  RNA Reverse Complement  ####

Create a function that finds the reverse complement of a ribonucleic acid (RNA) strand. The RNA will be represented as a string containing only the characters "A", "C", "G" and "U". Since RNA can only (canonically) allow pairings of A/U and G/C, the complement of an RNA would be as follows:
___
original -> complement
"AAA" -> "UUU"
"UUU" -> "AAA"
"GGG" -> "CCC"
"CCC" -> "GGG"
"GGAACC" -> "CCUUGG"
_____

Your function should find the complement on the right AND also reverse the resulting string.


[Examples]

___
reverseComplement("GUGU") ➞ "ACAC"

reverseComplement("UCUCG") ➞ "CGAGA"

reverseComplement("CAGGU") ➞ "ACCUG"
_____



[Notes]

Assume all input seqeuences are valid.


[algorithms] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place.
_________

*/
//Your code should go here:

