/*
####  Learn Lodash (1): Intersection of Arrays  ####

Write a function that creates an array of values found within all given arrays. The first array will serve as the base from which the remaining arrays will be checked to see if they have the matching values. If they do they will be added to the new array which will return only unique values showing the "intersecting" values of all arrays.
The actual intersection lodash function uses "Same Value Zero" comparison which means that it only works on strings and numbers. To make this challenge more difficult I've included objects to help you determine how to compare them.


[Examples]

___
intersection([1, 2, 3], [3, 4, 5], [2, 9, 9]) ➞ [2, 3]
// Both 2 and 3 are in the first array and can also be found in the others.
_____



[Notes]

___
*) Do not attempt to import lodash; you are simply writing your own version.
*) This entire series of challenges can be found here.
___



[arrays] 



-------------------------------------------------------------------
[Resources]
_________
Set
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
JSON.stringify()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified prope …
_________
_________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
_________
_________
Lodash Intersection Documentation
https://lodash.com/docs/4.17.15#intersection
Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are dete …
_________
_________
JSON.parse()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
Parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on t …
_________

*/
//Your code should go here:

