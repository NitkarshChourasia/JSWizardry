/*
####  Find Repeating  ####

Create a function that accepts a string and groups repeated values. The groups should have the following structure: [[value, first_index, last_index, times_repeated], ..., [value, first_index, last_index, times_repeated]].
___
*) value: Character being assessed.
*) first_index: Index of characters first appearance.
*) last_index: Index of characters last appearance.
*) times_repeated: Number of consecutive times character repeats.
___



[Examples]

___
findRepeating("a") ➞ [["a", 0, 0, 1]]

findRepeating("aabbb") ➞ [["a", 0, 1, 2], ["b", 2, 4, 3]]

findRepeating("1337") ➞ [["1", 0, 0, 1], ["3", 1, 2, 2], ["7", 3, 3, 1]]

findRepeating("aabbbaabbb") ➞ [["a", 0, 1, 2], ["b", 2, 4, 3], ["a", 5, 6, 2], ["b", 7, 9, 3]]
_____



[Notes]

___
*) An empty string should return an empty array: "" ➞ []
*) Non-repeated values should start and end on the same index.
___



[loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
_________
_________
String.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
_________
_________
Array.prototype.push()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push?v=control
Adds one or more elements to the end of an array and returns the new length of the array.
_________

*/
//Your code should go here:

