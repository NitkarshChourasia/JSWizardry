/*
####  Changing Mixed Types  ####

Create a function that changes all the elements in an array as follows:
___
*) Add 1 to all even integers, nothing to odd integers.
*) Concatenates "!" to all strings and make the first letter of the word a capital letter.
*) Changes all boolean values to its opposite.
___



[Examples]

___
changeTypes(["a", 12, true]) ➞ ["A!", 13, false]

changeTypes([13, "13", "12", "twelve"]) ➞ [13, "13!", "12!", "Twelve!"]

changeTypes([false, "false", "true"]) ➞ [true, "False!", "True!"]
_____



[Notes]

___
*) There won't be any float values.
*) You won't get strings with both numbers and letters in them.
*) Although the task may be easy, try keeping your code as clean and as readable as possible!
___



[arrays] [conditions] 



-------------------------------------------------------------------
[Resources]
_________
typeof Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________
_________
String.prototype.toUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
Returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

