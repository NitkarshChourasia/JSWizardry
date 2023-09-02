/*
####  Find the Bug: Checking Even Numbers  ####

Create a function that takes in an array and returns true if all its values are even, and false otherwise.
Not a big deal, your friend says. He writes the following code:
___
function checkAllEven(arr) {
  return arr.every(x % 2 === 0)
}
_____

The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:


[Examples]

___
checkAllEven([1, 2, 3, 4]) ➞ false

checkAllEven([2, 4, 6]) ➞ true

checkAllEven([5, 6, 8, 10]) ➞ false

checkAllEven([-2, 2, -2, 2]) ➞ true
_____



[Notes]

For help, check Resources or ask a question in the Comments.


[arrays] [bugs] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function.
_________
_________
Arrow Functions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, o …
_________
_________
Math.min
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the smallest of zero or more numbers.
_________
_________
Math.max
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of zero or more numbers.
_________

*/
//Your code should go here:

