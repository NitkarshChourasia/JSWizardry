/*
####  Holey Sort  ####

What do the numbers 4, 6, 8, 9 and 0 have in common? They all have holes in them! Notice how the number 8 contains not one, but two holes.
Given an array of numbers, sort the array in accordance to how many holes occur in the number. It should be sorted in ascending order.


[Examples]

___
holeySort([44, 4, 444, 4444]) ➞ [4, 44, 444, 4444]

holeySort([100, 888, 1660, 11]) ➞ [11, 100, 1660, 888]

holeySort([8, 121, 41, 66]) ➞ [121, 41, 8, 66]
_____



[Notes]

___
*) If two numbers have the same number of holes in them, sort them by the order they first appeared in.
*) Despite the number 0 appearing to have two holes in certain fonts, it will only have one hole for the purposes of this challenge.
___



[numbers] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Count the Number of Holes in Any Integer
https://www.geeksforgeeks.org/count-the-number-of-holes-in-an-integer/
Given an integer num, the task is to count the number of holes in that number. The holes in each digit are given below...
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Object.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
Returns a string representing the object.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

