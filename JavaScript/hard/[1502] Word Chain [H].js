/*
####  Word Chain  ####

A word-chain is an array of words, where the next word is formed by changing exactly one letter from the previous word. We do not add or subtract letters from words, only change them.
Create a function that returns true if an array is a word-chain and false otherwise.


[Examples]

___
isWordChain(["meal", "seal", "seat", "beat", "beet"]) ➞ true
// Change "m" in "meal" to get "seal", "l" to get "seat", etc.

isWordChain(["red", "bed", "bet", "bat", "sat"]) ➞ true

isWordChain(["red", "bat", "cat", "sat"]) ➞ false
// Do not change more than one letter ("red" and "bat").

isWordChain(["read", "red", "led", "lad", "lady"]) ➞ false
// Do not add or subtract letters.
_____



[Notes]

___
*) Each word in a word chain has equal length.
*) All words will be in lower case.
___



[arrays] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________

*/
//Your code should go here:

