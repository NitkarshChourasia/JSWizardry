/*
####  Seven Ate Nine  ####

A number can eat the number to the right of it if it's smaller than itself. After eating that number, it becomes the sum of itself and that number. Your job is to create a function that returns the final array after the leftmost element has finished "eating".


[Examples]

___
[5, 3, 7] ➞ [8, 7] ➞ [15]

// 5 eats 3 to become 8
// 8 eats 7 to become 15
_____

___
[5, 3, 9] ➞ [8, 9]

// 5 eats 3 to become 8
// 8 cannot eat 9, since 8 < 9
_____

___
nomNom([1, 2, 3]) ➞ [1, 2, 3]

nomNom([2, 1, 3]) ➞ [3, 3]

nomNom([8, 5, 9]) ➞ [22]
_____



[Notes]

Test input contains only an array of numbers.


[arrays] [logic] [math] 



-------------------------------------------------------------------
[Resources]
_________
For Loop
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Conditionally Adding Entries Inside Array Literals
https://2ality.com/2017/04/conditional-literal-entries.html#conditionally-adding-elements-inside-array-literals
This blog post shows how you can conditionally add elements inside Array literals and properties inside object literals. The following code shows how a boolean cond det …
_________
_________
Rest Parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
Allows us to represent an indefinite number of arguments as an array.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
_________
_________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
Makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
_________

*/
//Your code should go here:

