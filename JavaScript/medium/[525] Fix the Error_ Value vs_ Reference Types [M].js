/*
####  Fix the Error: Value vs. Reference Types  ####

Create a function that returns true if two arrays contain identical values, and false otherwise.
To solve this question, your friend writes the following code:
___
function checkEquals(arr1, arr2) {
if (arr1 === arr2) {
  return true
 } else {
  return false
 }
}
_____

But testing the code, you see that something is not quite right. Running the code yields the following results:
___
checkEquals([1, 2], [1, 3]) ➞ false
// Good so far...

checkEquals([1, 2], [1, 2]) ➞ false
// Yikes! What happened?
_____

Rewrite your friend's code so that it correctly checks if two arrays are equal. To be equal, the arrays must have the same elements in the same order. The tests below should pass:


[Examples]

___
checkEquals([1, 2], [1, 3]) ➞ false

checkEquals([1, 2], [1, 2]) ➞ true

checkEquals([4, 5, 6], [4, 5, 6]) ➞ true

checkEquals([4, 7, 6], [4, 5, 6]) ➞ false

checkEquals([4, 7, 6], [4, 6, 7]) ➞ false
_____



[Notes]

Hint: This has to do with value vs. reference types.


[bugs] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.toString()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
Returns a string representing the specified array and its elements.
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function.
_________
_________
Explaining Value vs. Reference in JavaScript
https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
JavaScript has 5 data types that are passed by value: Boolean, null, undefined, String, and Number. We’ll call these primitive types. JavaScript has 3 data types that a …
_________
_________
JSON.stringify()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified prope …
_________
_________
Array.prototype.join()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Check If Two Arrays or Objects Are Equal with JavaScript
https://gomakethings.com/check-if-two-arrays-or-objects-are-equal-with-javascript/
Yesterday, we looked at a way to tell if two arrays are equal with JavaScript. The approach is fast and simple, but falls apart pretty quickly for all but the most basi …
_________
_________
Explaining Value vs. Reference
https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
Understand the concept of value vs. reference in JavaScript through a simple yet complete walkthrough. Learn about objects, arrays, functions, and primitives.
_________
_________
Array​.prototype​.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
How to check for array equality using javascript?
https://flexiple.com/javascript/javascript-array-equality/
Equality is a tricky subject when it comes to javascript. Even more when it comes to comparing objects in javascript. Let's take a look at the various methods to compar …
_________

*/
//Your code should go here:

