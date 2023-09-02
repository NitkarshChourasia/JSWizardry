/*
####  Spicy Food  ####

The facts are:

Given your friend's unfortunate taste preferences, you decide to split the bill only for non-spicy items. You will pay in full for the spicy dishes.
Given two ordered arrays, one classifying the dishes as spicy vs. non-spicy and the other listing their prices, write a function that outputs an array where the first element is how much you pay and the second element is how much your friend pays.
___
billSplit(["S", "N", "S", "S"], [13, 18, 15, 4]) ➞ [41, 9]

// Since:
// You pay: [13, 9, 15, 4] = 41
// Friend pays: [0, 9, 0, 0] = 9
_____



[Examples]

___
billSplit(["N", "S", "N"], [10, 10, 20]) ➞ [25, 15]
// You pay for half of both "N" dishes (5 + 10) and entirely pay for the "S" dish (10).

billSplit(["N", "N"], [10, 10]) ➞ [10, 10]

billSplit(["S", "N"], [41, 10]) ➞ [46, 5]
_____



[Notes]

___
*) The dishes are in the same order for both input arrays.
*) Remember to output an array in this order: [your payment, friend's payment]
*) The array will contain at least one non-spicy dish N (you're not going to let your poor friend go hungry, are you?).
*) Express both payments as integers.
___



[arrays] [higher_order_functions] 



-------------------------------------------------------------------
[Resources]
_________
A Guide to the Reduce Method in JavaScript​
https://medium.freecodecamp.org/reduce-f47a7da511a9
This post will explain how the Reduce method in javascript works, why you might want to use it and different ways you can use it.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
_________

*/
//Your code should go here:

