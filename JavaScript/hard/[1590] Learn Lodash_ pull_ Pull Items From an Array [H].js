/*
####  Learn Lodash: _.pull, Pull Items From an Array  ####

According to the lodash documentation, _.pull Removes all given values from array using SameValueZero for equality comparisons. Note that unlike _.without, this method mutates array.


[Arguments]

___
*) array (Array): The array to modify.
*) values: The values to remove.
___



[Example]

You work in a car dealership. A government inspector is coming to visit and wants to ensure you are only selling electric cars. Your boss asks you to pull all the cars that aren't electric off the lot.
___
pull("electric", "gas", "electric", "gas", "gas", "electric", "gas")
➞ ["electric", "electric", "electric"]
_____

The challenege of this function is that it mutates the array so methods like filter and map can't be used.


[Notes]

___
*) Do not attempt to import lodash; you are simply writing your own version.
*) This entire series of challenges can be found here.
___



[arrays] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________

*/
//Your code should go here:

