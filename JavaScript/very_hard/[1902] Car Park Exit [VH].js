/*
####  Car Park Exit  ####

You are stuck in a multi-storey car parking lot. Your task is to exit the carpark using only the staircases. Exit is always at the bottom right of the ground floor.
Create a function that takes a two-dimensional array where:

... and returns an array of the quickest route out of the carpark.
___
arr = [
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]

// Starting from 2, move to left 4 times = "L4"
// Go down from stairs 1 step = "D1"
// Move to right 4 times to exit from right bottom corner = "R4"

result = ["L4", "D1", "R4"]
_____

See the below examples to better understand:


[Examples]

___
parking_exit([
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]) ➞ ["L4", "D1", "R4"]
_____

___
parking_exit([
  [2, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]) ➞ ["R3", "D2", "R1"]

// Starting from 2, move to right 3 times = "R3"
// Go down from stairs 2 steps = "D2"
// Move to right 1 step to exit from right bottom corner = "R1"
_____

___
parking_exit([[0, 0, 0, 0, 2]]) ➞ []
// You are already at right bottom corner.
_____



[Notes]

N/A


[arrays] [games] [logic] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.findIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
_________
_________
Conditional (ternary) Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator#:~:text=The%20conditional%20(ternary)%20operator%20is,if%20the%20condition%20is%20falsy.
The only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed b …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

