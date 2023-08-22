/*
####  Filter Items from an Array  ####

Create a function that takes two parameters:

The function should return only the items from the first array that satisfies the anonymous function present in the second array.


[Detail]

___
#filterArray([1, 2, 3, 4], [100, (num) => num % 2 === 0]) ➞ [2, 4]

# 2 and 4 from [1, 2, 3, 4] satisifies  anonymous function in the second array.
# (num) => num % 2 === 0          2 % 2 === 0 and 4 % 2 === 0
# 1 and 3 do not satisfy (num) => num % 2 === 0
_____



[Examples]

___
 filterArray([1, 2, 3, 4], [1, 2, (num) => num % 2 === 0]) ➞ [2 , 4]

 filterArray([1, 2, 3, 4, 5], [1, 2, (num) => num % 2 === 1,"eon","epoch"]) ➞ [1, 3, 5]

 filterArray(["apple", "kiwi"], [2, (txt) => txt.indexOf("a") > -1]) ➞ ["apple"]
_____



[Notes]

___
*) Inputs are always two arrays.
*) There is always only one anonymous function in the second array that needs to be checked with the item in the first array.
___



[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
_________
_________
Array.prototype.find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________

*/
//Your code should go here:

