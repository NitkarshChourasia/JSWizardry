/*
####  Digitaldrome  ####

In this challenge, you have to establish if the digits of a given number form a sequence (ascending or descending).
Given an integer n, implement a function that returns a string:
___
*) "Metadrome" if the digits of n form an ascending sequence without repeating digits.
*) "Plaindrome" if the digits of n form an ascending sequence with repeating digits.
*) "Katadrome" if the digits of n form a descending sequence without repeating digits.
*) "Nialpdrome" if the digits of n form a descending sequence with repeating digits.
*) "Repdrome" if n contains a single repeating digit.
*) "Nondrome" if none of the above conditions is true.
___



[Examples]

___
digitaldrome(1357) ➞ "Metadrome"
// Ascending sequence without repeating digits

digitaldrome(12344) ➞ "Plaindrome"
// Ascending sequence with repeating digits

digitaldrome(7531) ➞ "Katadrome"
// Descending sequence without repeating digits

digitaldrome(9874441) ➞ "Nialpdrome"
// Descending sequence with  repeating digits

digitaldrome(666) ➞ "Repdrome"
// There's only a single repeating digit

digitaldrome(1985) ➞ "Nondrome"
// This is not a sequence
_____



[Notes]

___
*) Any given n will be a positive integer.
*) The word "drome" comes from the Greek suffix for "run", while "kata" and "meta" are the prefixes for "down" (or "into") and "after" (or "through").
___



[conditions] [numbers] [sorting] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
JSON.stringify()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified p …
_________

*/
//Your code should go here:

