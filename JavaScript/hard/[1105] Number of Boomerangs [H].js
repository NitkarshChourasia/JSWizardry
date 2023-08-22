/*
####  Number of Boomerangs  ####

A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
Some boomerang examples:
___
[3, 7, 3], [1, -1, 1], [5, 6, 5]
_____

Create a function that returns the total number of boomerangs in an array.
To illustrate:
___
[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
_____

Be aware that boomerangs can overlap, like so:
___
[1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
_____



[Examples]

___
countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
_____



[Notes]

[5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.


[arrays] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Number of Boomerangs Challenge Reviewed
https://www.youtube.com/watch?v=rzwYTAC8DJw&feature=youtu.be
The main concept of this video is finding patterns in arrays.
_________
_________
Loops and iteration
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
Offer a quick and easy way to do something repeatedly.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array Methods
https://javascript.info/array-methods
That’s natural, because delete obj.key removes a value by the key. It’s all it does. Fine for objects. But for arrays we usually want the rest of elements to shift and …
_________
_________
Make A Simple Counter
https://dev.to/stewyearth/making-a-simple-counter-in-javascript-html-2ici
How to count Arrays in JavaScript.
_________

*/
//Your code should go here:

