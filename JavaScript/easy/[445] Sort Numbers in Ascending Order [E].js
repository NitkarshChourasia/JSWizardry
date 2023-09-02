/*
####  Sort Numbers in Ascending Order  ####

Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
___
*) Sort numbers array in ascending order.
*) If the function's argument is null, an empty array, or undefined; return an empty array.
*) Return a new array of sorted numbers.
___



[Examples]

___
sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]

sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]

sortNumsAscending(null) ➞ []

sortNumsAscending([]) ➞ []
_____



[Notes]

Test input can be positive or negative.


[arrays] [numbers] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Sorting A JavaScript Array Using Array.sort()
http://www.javascriptkit.com/javatutors/arraysort.shtml
Sorting arrays in JavaScript is done via the method array.sort(), a method that's probably as much misunderstood as it is underestimated. While calling sort() by it …
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.
_________
_________
Array.isArray()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
Determines whether the passed value is an Array.
_________
_________
JavaScript If...Else Statements
https://www.w3schools.com/js/js_if_else.asp
In JavaScript we have the following conditional statements: Use if to specify a block of code to be executed, if a specified condition is true. Use else to specify a bl …
_________
_________
The Conditional (Ternary) Operator Explained
https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff
Using a conditional, like an if statement, allows us to specify that a certain block of code should be executed if a certain condition is met. We want to test if the ag …
_________
_________
How to Sort an Array Numerically in JavaScript
https://medium.com/coding-at-dawn/how-to-sort-an-array-numerically-in-javascript-2b22710e3958#:~:text=We%20can%20use%20.,%3Eb%2Da)%20for%20descending%20order.
Ever try to sort an array of integers in JavaScript using .sort() and get a weird result, where the order was not numeric? [3, 8, -10, 23, 19, -4, -14, 27].sort() // Ou …
_________

*/
//Your code should go here:

