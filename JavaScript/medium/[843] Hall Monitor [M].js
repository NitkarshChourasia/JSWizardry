/*
####  Hall Monitor  ####

A floor plan is arranged as follows:
___
*) Four rooms, which all lead into the hallway.
*) It's impossible to move between rooms without first going into the hallway.
___


Create a function which validates whether the path between rooms is possible. The hallway will be given as the letter 'H'.


[Examples]

___
possiblePath([1, "H", 2, "H", 3, "H", 4]) ➞ true

possiblePath(["H", 3, "H"]) ➞ true

possiblePath([1, 2, "H", 3]) ➞ false
_____



[Notes]

___
*) A route may begin or end in a hallway.
*) All inputs are either numbers 1-4, or the letter "H".
*) No rooms will repeat.
___



[algorithms] [loops] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of i …
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________
_________
typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
_________
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
The test() method executes a search for a match between a regular expression and a specified string. Returns true if there is a match; false otherwise.
_________

*/
//Your code should go here:

