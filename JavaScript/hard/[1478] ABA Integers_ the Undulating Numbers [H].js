/*
####  ABA Integers: the Undulating Numbers  ####

In this challenge, you have to establish if a given number is undulating. A number n is undulating when the following conditions are all true:
___
*) n has at least three digits.
*) n has exactly two different digits.
*) The two digits of n are alternating without repeating groups.
___

If we think at the first digit of an undulating number as an "A", and to its second digit as a "B", we can notice a sequence of the form "ABA", that can repeat infinite times and ends either with an "A" or with a "B", but without clusters of "AA" or "BB" into it.
Given a positive integer n, implement a function that returns true if n is an Undulating number, or false if it's not.


[Examples]

___
isUndulating(121) ➞ true
// A = 1, B = 2
// The sequence ABA is valid

isUndulating(373737) ➞ true
// A = 3, B = 7
// The sequence ABABABAB is valid

isUndulating(12) ➞ false
// Less than three digits

isUndulating(12122) ➞ false
// The sequence ABABB is not valid

isUndulating(85856) ➞ false
// More than two different digits
_____



[Notes]

N/A


[conditions] [numbers] [regex] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Undulating Number
https://en.wikipedia.org/wiki/Undulating_number
A number that has the digit form ABABAB... when in the base 10 number system. It is sometimes restricted to non-trivial undulating numbers which are required to have at …
_________
_________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
_________

*/
//Your code should go here:

