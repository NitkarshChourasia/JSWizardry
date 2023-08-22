/*
####  Coin Trouble  ####

Given an array of coins, father needs to distribute them amongst his three children. Write a function to determine if the coins can be distributed equally or not. Return true if each son receives the same amount of money, otherwise return false.
___
[1, 2, 3, 2, 2, 2, 3] ➞ true
_____

___
*) Amount to be distributed to each child = (1+2+3+2+4+3)/3 => 15/3 => 5
*) Possible set of coin to be distributed to children = [(1,2,2),(2,3),(2,3)]
___

___
[5, 3, 10, 1, 2] ➞ false
_____

___
*) Amount to be distributed to each child = (5+3+10+1+2)/3 => 21/3 => 7
*) But there are no combination such that each child get equal value which is 7.
___



[Examples]

___
coinsDiv([1, 2, 3, 2, 2, 2, 3]) ➞ true

coinsDiv([5, 3, 10, 1, 2]) ➞ false

coinsDiv([2, 4, 3, 2, 4, 9, 7, 8, 6, 9]) ➞ true
_____



[Notes]

___
*) Inputs will be an array of positive integers only.
*) Coin can be any positive value.
___



[arrays] [logic] [loops] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of i …
_________

*/
//Your code should go here:

