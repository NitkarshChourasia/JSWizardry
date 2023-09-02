/*
####  Card Counting (BlackJack)  ####

In BlackJack, cards are counted with -1, 0, 1 values:
___
*) 2, 3, 4, 5, 6 are counted as +1
*) 7, 8, 9 are counted as 0
*) 10, J, Q, K, A are counted as -1
___

Create a function that counts the number and returns it from the array of cards provided.


[Examples]

___
count([5, 9, 10, 3, "J", "A", 4, 8, 5]) ➞ 1

count(["A", "A", "K", "Q", "Q", "J"]) ➞ -6

count(["A", 5, 5, 2, 6, 2, 3, 8, 9, 7]) ➞ 5
_____



[Notes]

___
*) String inputs will always be upper case.
*) You do not need to consider case sensitivity.
*) If the argument is empty, return 0.
*) No input other than: 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A".
___



[algebra] [conditions] [games] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Object initializer
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
Objects can be initialized using new Object(), Object.create(), or using the literal notation (initializer notation). An object initializer is a comma-delimited list of …
_________
_________
For Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement to be executed in the loop.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________

*/
//Your code should go here:

