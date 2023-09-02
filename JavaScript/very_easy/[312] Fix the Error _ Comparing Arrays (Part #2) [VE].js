/*
####  Fix the Error / Comparing Arrays (Part #2)  ####

Create a function that returns true if two arrays sharing the same length have identical numerical values at every index, and false otherwise.
To solve this question, your friend initially wrote the following code (see this challenge):
___
function checkEquals(arr1, arr2) {
  if (arr1 === arr2) {
    return true
   } else {
    return false
   }
}
_____

If you're unsure why the above code doesn't work, I recommend doing that challenge first.
Your friend did some more research and he fixed the code into the following:
___
function checkEquals(arr1, arr2) {
  if (arr1.join("") === arr2.join("")) {
    return true
   } else {
    return false
   }
}
_____

It works in most cases, but on some cases it fails. This confuses him, can you spot the error and fix it?


[Examples]

___
checkEquals([1, 2], [1, 3]) ➞ false

checkEquals([1, 2], [1, 2]) ➞ true

checkEquals([4, 5, 6], [4, 5, 6]) ➞ true

checkEquals([4, 7, 6], [4, 5, 6]) ➞ false

checkEquals([1, 12], [11, 2]) ➞ false
_____



[Notes]

N/A


[arrays] [bugs] [validation] 



-------------------------------------------------------------------
[Resources]
_________
JSON.stringify()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified prope …
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________
_________
Comparison Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type and the contents match. Th …
_________
_________
Array.join()
https://www.w3schools.com/jsref/jsref_join.asp
Returns the array as a string. The elements will be separated by a specified separator. The default separator is comma (,).
_________

*/
//Your code should go here:

