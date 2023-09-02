/*
####  Typing Game  ####

You're in the midst of creating a typing game.
Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).
___
Inputs:
User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

Output: [1, 1, -1, -1, 1]
_____



[Examples]

___
correctStream(
  ["it", "is", "find"],
  ["it", "is", "fine"]
) ➞ [1, 1, -1]

correctStream(
  ["april", "showrs", "bring", "may", "flowers"],
  ["april", "showers", "bring", "may", "flowers"]
) ➞ [1, -1, 1, 1, 1]
_____



[Notes]

The input array lengths will always be the same.


[arrays] [games] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds zero or more elements to the end of an array and returns the new length of the array.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
How to know if two arrays have the same values?
https://stackoverflow.com/questions/6229197/how-to-know-if-two-arrays-have-the-same-values
I have these two arrays: one is filled with information from an ajax request and another stores the buttons the user clicks on. I use this code (I filled with sample nu …
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Compare Arrays
https://masteringjs.io/tutorials/fundamentals/compare-arrays
Comparing two arrays in JavaScript can be tricky. Here's what you need to know.
_________

*/
//Your code should go here:

