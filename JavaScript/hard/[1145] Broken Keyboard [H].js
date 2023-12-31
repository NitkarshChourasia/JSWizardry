/*
####  Broken Keyboard  ####

Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:
___
findBrokenKeys(correct phrase, what you actually typed)
_____



[Examples]

___
findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]

findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]

findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]
_____



[Notes]

___
*) Broken keys should be ordered by when they first appear in the sentence.
*) Only one broken key per letter should be listed.
*) Letters will all be in lower case.
___



[arrays] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
String​.prototype​.split()
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
_________
_________
Spread syntax (...)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) …
_________
_________
JavaScript Array Distinct()
https://codeburst.io/javascript-array-distinct-5edc93501dc4
Ever wanted to get distinct elements from an array? Or wanted to get distinct objects from an array by a property? This blog post is for you.
_________

*/
//Your code should go here:

