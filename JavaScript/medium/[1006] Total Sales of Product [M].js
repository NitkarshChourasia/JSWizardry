/*
####  Total Sales of Product  ####

In this question you will be given a table as below, where the first row lists the names of products, and each of row after that lists the sales of the product for each day (over some time range).
___
[
  ["A", "B", "C"],
  [ 2 ,  7 ,  1 ],
  [ 3 ,  6 ,  6 ],
  [ 4 ,  5 ,  5 ]
]
_____

Write a function that receives:
___
*) A sales table sales as shown above.
*) The name of a product product.
___

... and returns the total sales if the product is on the array, otherwise return the string "Product not found".


[Examples]

___
totalSales([
  ["A", "B", "C"],
  [ 2 ,  7 ,  1 ],
  [ 3 ,  6 ,  6 ],
  [ 4 ,  5 ,  5 ]
], "A") ➞ 9

// 2 + 3 + 4 = 9


totalSales([
  ["A", "B", "C"],
  [ 2 ,  7 ,  1 ],
  [ 3 ,  6 ,  6 ],
  [ 4 ,  5 ,  5 ]
], "C") ➞ 12

// 1 + 6 + 5 = 12


totalSales([
  ["A", "B", "C"],
  [ 2 ,  7 ,  1 ],
  [ 3 ,  6 ,  6 ],
  [ 4 ,  5 ,  5 ]
], "D") ➞ "Product not found"
_____



[Notes]

The examples above all use the same sales table, but in the tests the table will vary.


[arrays] [data_structures] [language_fundamentals] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Loops and iteration
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
Loops offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________

*/
//Your code should go here:

