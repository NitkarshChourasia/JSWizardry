/*
####  Get Student with Best Test Avg.  ####

Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name. You do not need to return their Test Average.


[Examples]

___
getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80]
}) ➞ "John"

// John's avg = 90
// Bob's avg = 83.33

getBestStudent({
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
}) ➞ "Mike"
_____



[Notes]

All students in an object will have the same amount of test scores. So no student will have taken more tests than another.


[arrays] [loops] [objects] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Object.entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
Returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop (the difference bein …
_________
_________
Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop (the difference being that a for-in loop enum …
_________
_________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop.
_________
_________
Object.fromEntries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries#:~:targetText=fromEntries()%20method%20takes%20a,are%20given%20by%20those%20entries.
Transforms a list of key-value pairs into an object.
_________

*/
//Your code should go here:

