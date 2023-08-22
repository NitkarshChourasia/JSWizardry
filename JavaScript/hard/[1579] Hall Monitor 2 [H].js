/*
####  Hall Monitor 2  ####

A floor plan is arranged as follows:
___
*) You may freely move between rooms 1 and 2.
*) You may freely move between rooms 3 and 4.
*) However, you can enter the hallway to move between rooms 2 and 4.
___


Create a function that validates whether the route taken between rooms is possible. The hallway will be given as the letter "H".


[Examples]

___
possiblePath([1, 2, "H", 4, 3]) ➞ true

possiblePath(["H", 1, 2]) ➞ false

possiblePath([4, 3, 4, "H", 4, "H"]) ➞ true
_____



[Notes]

___
*) A route may begin or end in any room (including the hallway).
*) All inputs are either numbers 1-4 or the letter "H".
*) No rooms will repeat.
___



[algorithms] [interview] [objects] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of i …
_________

*/
//Your code should go here:

