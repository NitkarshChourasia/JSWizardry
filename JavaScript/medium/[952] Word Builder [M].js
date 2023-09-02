/*
####  Word Builder  ####

In this challenge, you have to build a word from the scrambled letters contained in the first given array. For establishing how to assign the spots to the letters, you will use the positions contained in the second given array.
___
letters = ["e", "t", "s", "t"]
positions = [1, 3, 2, 0]

Step 1 ➞ Letter "e" goes to index 1 ➞ _  e  _   _
Step 2 ➞ Letter "t" goes to index 3 ➞ _  e  _   t
Step 3 ➞ Letter "s" goes to index 2 ➞ _  e  s   t
Step 4 ➞ Letter "t" goes to index 0 ➞ t  e  s   t
_____

Given the two arrays letters (containing the scrambled letters of the word) and positions (containing the indexes of the letters), implement a function that returns the resulting word as a string.


[Examples]

___
wordBuilder(["e", "t", "s", "t"], [1, 3, 2, 0]) ➞ "test"

wordBuilder(["b", "e", "t", "i", "d", "a"], [3, 0, 5, 4, 1, 2]) ➞ "edabit"

wordBuilder(["g", "e", "o"], [1, 0, 2]) ➞ "ego"
_____



[Notes]

Every given test case has valid parameters, don't worry about exceptions handling.


[arrays] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
_________
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
How to Combine 2 Arrays Into 1 Object
https://www.tutorialspoint.com/how-to-combine-2-arrays-into-1-object-in-javascript
How to combine 2 arrays into 1 object in JavaScript - Let’s say, we have two arrays of equal lengths and are required to write a function that maps the two ar ...
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

