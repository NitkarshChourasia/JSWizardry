/*
####  Triple Letter Groupings  ####

Given a string, return a sorted array of words formed from the first three letters, then the next three letters, shifting by only one.


[Worked Example]

___
threeLetterCollection("edabit") ➞ ["abi", "bit", "dab", "eda"]
// 1st word: "eda"
// 2nd word: "dab"
// 3rd word: "abi"
// 4th word: "bit"
// Remember to sort the array!
_____



[Examples]

___
threeLetterCollection("slap") ➞ ["lap", "sla"]

threeLetterCollection("click") ➞ ["cli", "ick", "lic"]

threeLetterCollection("cat") ➞ ["cat"]

threeLetterCollection("hi") ➞ []
_____



[Notes]

Return an empty array if given a word with less than 3 letters.


[algorithms] [arrays] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
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
String.prototype.localeCompare()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
Returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________

*/
//Your code should go here:

