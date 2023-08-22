/*
####  Learn Lodash: _.fill, Fill an Array With New Values  ####

According to the lodash documentation, _.fill Fills elements of an array with the value from start to, but not including, end. Note that this method mutates the array.
This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.


[Arguments]

___
*) array (Array): The array to fill.
*) value (*): The value to fill array with.
*) [start=0] (number): The start position.
*) [end=array.length] (number): The end position.
___



[Returns]

___
*) (Array): Returns array.
___



[Examples]

___
var array = [1, 2, 3]

fill(array, "a") ➞ ["a", "a", "a"]

fill(Array(3), 2) ➞ [2, 2, 2]

fill([4, 6, 8, 10], "*", 1, 3) ➞ [4, "*", "*", 10]
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
Array.prototype.fill()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
_________
_________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Lodash Fill
https://lodash.com/docs/4.17.15#fill
Fills elements of array with value from start up to, but not including, end.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
You Might Not Need Lodash
https://youmightnotneed.com/lodash/
Just to be clear: you should probably use Lodash – just make sure you import the bits you need, not the whole library to use one method. Lodash is a great library, wel …
_________

*/
//Your code should go here:

