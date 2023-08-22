/*
####  Water Balloon  ####

Once a water balloon pops, is soaks the area around it. The ground gets drier the further away you travel from the balloon.
The effect of a water balloon popping can be modeled using an array. Create a function that takes an array which takes the pre-pop state and returns the state after the balloon is popped. The pre-pop state will contain at most a single balloon, whose size is represented by the only non-zero element.


[Examples]

___
pop([0, 0, 0, 0, 4, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4, 3, 2, 1, 0]

pop([0, 0, 0, 3, 0, 0, 0]) ➞ [0, 1, 2, 3, 2, 1, 0]

pop([0, 0, 2, 0, 0]) ➞ [0, 1, 2, 1, 0]

pop([0]) ➞ [0]
_____



[Notes]

___
*) Length of input array is always odd.
*) The input array will always be the exact length it takes for there to be exactly one border zero.
*) If the input array consists only of zeroes, return the same array.
___



[arrays] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
For Loop
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Array.length
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that  …
_________

*/
//Your code should go here:

