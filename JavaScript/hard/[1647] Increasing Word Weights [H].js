/*
####  Increasing Word Weights  ####

The weight of an English word can be calculated by summing the ASCII code point for each character in the word, excluding any punctuation:
___
"Wouldn't" = 87 + 111 + 117 + 108 + 100 + 110 + 116 = 749
_____

Write a function that takes a sentence as a string, returning true if all word weights increase for each word in the sentence, and false if any word weight decreases or remains the same.


[Examples]

___
increasingWordWeights("Why not try?") ➞ true
// 312 -> 337 -> 351 (weights increase)

increasingWordWeights("All other roads.") ➞ false
// 281 -> 546 -> 537 (537 is less than 546)
_____



[Notes]

N/A


[arrays] [language_fundamentals] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________

*/
//Your code should go here:

