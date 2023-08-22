/*
####  Learn Lodash: _.difference, Find the Difference in Arrays  ####

According to the lodash documentation, _.difference(array, [values]) creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
If you wanted to use this function in the real world you would just import lodash and use it but this challenge requires you to write your own version using vanilla javascript. Hopefully this enables you to better understand how the function works .


[Arguments]

___
*) array (Array): The array to inspect.
*) [values] (...Array): The any number of arrays containing the values to exclude.
___



[Returns]

___
*) (Array): Returns the new array of filtered values.
___



[Examples]

___
difference([2, 1], [2, 3]);  // => [1]

difference(["banana", "orange", "apple"], ["orange", "apple"]);  // => ["banana"]
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
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
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
_________
Lodash
https://lodash.com/docs/4.17.15#difference
Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
_________

*/
//Your code should go here:

