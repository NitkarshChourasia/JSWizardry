/*
####  Crop Fields  ####

You're given a 2D array / matrix of a crop field. Each crop needs to be hydrated. Each water source hydrates the 8 tiles around it. With "w" representing a water source, and "c" representing a crop, is every crop hydrated?


[Examples]

___
cropHydrated([
  [ "w", "c" ],
  [ "w", "c" ],
  [ "c", "c" ]
]) ➞ true

cropHydrated([
  [ "c", "c", "c" ]
]) ➞ false
// There isn"t even a water source.

cropHydrated([
  [ "c", "c", "c", "c" ],
  [ "w", "c", "c", "c" ],
  [ "c", "c", "c", "c" ],
  [ "c", "w", "c", "c" ]
]) ➞ false
_____



[Notes]

"w" on its own should return true, and "c" on its own should return false.


[arrays] [conditions] [loops] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________

*/
//Your code should go here:

