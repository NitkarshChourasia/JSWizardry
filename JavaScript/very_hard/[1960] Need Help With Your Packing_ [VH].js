/*
####  Need Help With Your Packing?  ####

You arrive at the supermarket checkout and you've only got a limited number of shopping bags with you. Miser that you are, you hate buying extra bags when you've got dozens at home that you forgot to bring with you!! Can you fit all your shopping into the bags you've got with you?
Each bag can carry a maximum of 10kg and each item you've purchased weighs between 1 and 10kg.
Create a function that takes two parameters, a list of the weights of each item and the number of bags you are carrying. Return true if there are enough bags to contain all the items, otherwise false.


[Example]

___
canFit([2, 1, 2, 5, 4, 3, 6, 1, 1, 9, 3, 2], 4) ➞ true
// Bag 1 = [2, 1, 2, 5] (10kg)
// Bag 2 = [4, 3, 3] (10kg)
// Bag 3 = [6, 2, 1, 1] (10kg)
// Bag 4 = [9] (9kg)

canFit([2, 7, 1, 3, 3, 4, 7, 4, 1, 8, 2], 4) ➞ false
// Bag 1 = [2, 8] (10kg)
// Bag 2 = [3, 7] (10kg)
// Bag 3 = [2, 4, 4] (10kg)
// Bag 4 = [7, 3] (10kg)
// two 1kg items left over!
_____



[Notes]

___
*) All weights will be integers between 1 and 10kg inclusive
*) Items can be packed in any order
*) There may be more than one way to fit all the items in the available bags
___

Based on an easier challenge How Many Boxes? by @zatoichi49.


[algorithms] [logic] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see …
_________

*/
//Your code should go here:

