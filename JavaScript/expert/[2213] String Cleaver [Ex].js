/*
####  String Cleaver  ####

Create a function that takes a string (without spaces) and a word array, cleaves the string into words based on the array, and returns the correctly spaced version of the string (a sentence). If a section of the string is encountered that can't be found on the word array, return "Cleaving stalled: Word not found".


[Examples]

___
const words = ["about", "be", "hell", "if", "is", "it", "me", "other", "outer", "people", "the", "to", "up", "where"]


cleave("ifitistobeitisuptome", words) ➞ "if it is to be it is up to me"

cleave("hellisotherpeople", words) ➞ "hell is other people"

cleave("hellisotterpeople", words) ➞ "Cleaving stalled: Word not found"
_____



[Notes]

Words in the words array can appear more than once in the string. The words array is a reference guide, kind of like a dictionary that lists which words are allowed.


[strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.substring()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
_________

*/
//Your code should go here:

