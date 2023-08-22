/*
####  Sentence Searcher  ####

Create a function that returns the whole of the first sentence which contains a specific word. Include the full stop at the end of the sentence.


[Examples]

___
const str = "I have a cat. I have a mat. Things are going swell."

sentenceSearcher(str, "have") ➞ "I have a cat."

sentenceSearcher(str, "MAT") ➞ "I have a mat."

sentenceSearcher(str, "things") ➞ "Things are going swell."

sentenceSearcher(str, "flat") ➞ ""
_____



[Notes]

___
*) Sentences will always end with a period.
*) Your function should not be case sensitive.
*) Return an empty string if the word isn't found in the sentence.
___



[loops] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
String.prototype.toUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
Returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Regular Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the …
_________
_________
Array.prototype.find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________

*/
//Your code should go here:

