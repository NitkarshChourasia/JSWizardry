/*
####  Data Structures (3): Rotate an Array  ####

Rotate an array either left or right according to the number passed.
You are an undercover agent and you're at a cocktail party hosted by an evil secret cartel. You've snuck into the main office to look at the files. They are organized according to an index system. You decide to rotate the files so that when the evil genius goes to get File 47: How to Make a Bomb he'll actually be grabbing File 43: How to Make a Paper Mache Dinosaur. His attempt at making a bomb will fail and you will have saved many lives.
Your challenge is to write a function that rotates an array by a given number, either left or right depending on if the number is positive or negative.


[Arguments]

___
*) Array: The array which will be rotated.
*) Number: The number of index positions the array will be rotated.
*) Returns Array: The rotated array.
___



[Examples]

A positive number rotates it to the right:
___
rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 2) ➞ [7, 9, 0, 1, 2, 3, 4, 5]
_____

A negative number rotates it to the left:
___
rotateArray([0, 1, 2, 3, 4, 5, 7, 9], -2) ➞ [2, 3, 4, 5, 7, 9, 0, 1]
_____

The number to rotate by can be longer than the array, it just loops over in that case:
___
rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 12) ➞ [4, 5, 7, 9, 0, 1, 2, 3]
_____



[Notes]

___
*) This is part of my Data Structures series. A collection of common coding interview challenges used to test one's understanding of data structures.
*) This entire series of challenges can be found here.
___



[arrays] [data_structures] [interview] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.shift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
Removes the first element from an array and returns that removed element. This method changes the length of the array.
_________
_________
Array.prototype.unshift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
Adds one or more elements to the beginning of an array and returns the new length of the array.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________

*/
//Your code should go here:

