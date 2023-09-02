/*
####  Burglary Series (02): Most Valuable Item  ####

You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.


[Examples]

___
mostExpensiveItem({
  piano: 2000,
}) ➞ "piano"

mostExpensiveItem({
  tv: 30,
  skate: 20,
}) ➞ "tv"

mostExpensiveItem({
  tv: 30,
  skate: 20,
  stereo: 50,
}) ➞ "stereo"
_____



[Notes]

___
*) There will only be one most valuable item (no ties).
*) The object will always contain at least one item (no empty objects).
___



[arrays] [loops] [math] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop …
_________
_________
Array.prototype.find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Returns the value of the first element in the provided array that satisfies the provided testing function.
_________
_________
Object.entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
Returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
_________
_________
How to sort multidimensional array's by value?
https://stackoverflow.com/questions/16096872/how-to-sort-2-dimensional-array-by-column-value
Can any one help me sort a 2 dimensional Array in JavaScript? It will have data in the following format: [12, AAA] [58, BBB] [28, CCC] [18, DDD] It should look like t …
_________
_________
for...in statement
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
Iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Getting Key With the Highest Value From Object
https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object
How can I quickly pull the largest value identifier (here: b) from it? I tried converting it to array and then sorting, but it didn't work out, since it got sorted alph …
_________

*/
//Your code should go here:

