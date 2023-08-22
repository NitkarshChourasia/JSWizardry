/*
####  Don't Roll Doubles!  ####

John is playing a dice game. The rules are as follows.

But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!
Create a function which takes in a matrix as input, and return John's score after his game has ended.


[Examples]

___
diceGame([[1, 2], [3, 4], [5, 6]]) ➞ 21

diceGame([[1, 1], [5, 6], [6, 4]]) ➞ 0

diceGame([[4, 5], [4, 5], [4, 5]]) ➞ 27
_____



[Notes]

___
*) Ignore all other arrays in the matrix if a throw happens to be doubles and go straight to returning 0.
*) John only has two dice and will always give you outcomes for three rounds.
___



[algorithms] [arrays] [games] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
_________
_________
Set.prototype.size
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
Returns the number of (unique) elements in a Set object.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
_________
_________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________

*/
//Your code should go here:

