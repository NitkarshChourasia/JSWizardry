/*
####  Product of Two Largest Numbers  ####

Create a function that takes an array of numbers and returns the product of the largest and second largest UNIQUE numbers in the array. So, if there are multiple of the same highest integer, only count one towards the highest product -- see the examples below for more.


[Examples]

___
product([2, 3, 1, -1, 2]) ➞ 6
// 2 * 3 = 6

product([-2, -2, -1, -1]) ➞ 2
// -2 * - 1 = 2
// Not 1, because you can only use -1 one time.

product([8, 8, 8]) ➞ 64
// 8 * 8 = 64
// You can repeat here because there is only one value.

product([2, 8, 8, 8]) ➞ 16
// 2 * 8 = 16
// Not 64, because you can only use 8 one time.
_____



[Notes]

___
*) Numbers in the array are all integers.
*) Numbers can be both positive or negative.
___



[language_fundamentals] [math] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters.
_________
_________
Set
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
TypedArray.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
Reverses a typed array in place. The first typed array element becomes the last and the last becomes the first. This method has the same algorithm as Array.prototype.re …
_________
_________
Conditional Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followe …
_________
_________
Array.prototype.pop()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
Removes the last element from an array and returns that element. This method changes the length of the array.
_________
_________
Remove Duplicate Values From JS Array
https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
I have a very simple JavaScript array that may or may not contain duplicates. var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"]; I need to remove the d …
_________

*/
//Your code should go here:

