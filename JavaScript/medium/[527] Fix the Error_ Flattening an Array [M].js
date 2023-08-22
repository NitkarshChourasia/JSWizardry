/*
####  Fix the Error: Flattening an Array  ####

I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].
Here is my code:
___
function flatten(arr) {
  arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.concat(arr[i]);
  }
  return arr2;
}
_____

But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.


[Examples]

___
flatten([[1, 2], [3, 4]]) ➞ []
// Expected: [1, 2, 3, 4]

flatten([["a", "b"], ["c", "d"]]) ➞ []
// Expected: ["a", "b", "c", "d"]

flatten([[true, false], [false, false]]) ➞ []
// Expected: [true, false, false, false]
_____



[Notes]

N/A


[arrays] [bugs] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
_________
_________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
_________
_________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Concat Arrays With for Loop
https://stackoverflow.com/questions/45381787/concat-arrays-with-for-loop
After experimenting with the reduce method to flatten an array, I tried using a similar approach with a for-loop. Can anyone explain why the for-loop doesn't flatten t …
_________
_________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________

*/
//Your code should go here:

