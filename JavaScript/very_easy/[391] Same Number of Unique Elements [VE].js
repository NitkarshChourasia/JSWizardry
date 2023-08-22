/*
####  Same Number of Unique Elements  ####

Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.
To illustrate:
___
arr1 = [1, 3, 4, 4, 4]
arr2 = [2, 5, 7]
_____

In arr1, the number 4 appears three times, which means it contains three unique elements: [1, 3, 4]. Since arr1 and arr2 both contain the same number of unique elements, this example would return true.


[Examples]

___
same([1, 3, 4, 4, 4], [2, 5, 7]) ➞ true

same([9, 8, 7, 6], [4, 4, 3, 1]) ➞ false

same([2], [3, 3, 3, 3, 3]) ➞ true
_____



[Notes]

N/A


[arrays] [language_fundamentals] [validation] 



-------------------------------------------------------------------
[Resources]
_________
How to Remove Array Duplicates in ES6
https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
Here are three ways to filter out duplicates from an array and return only the unique values. My favorite is using Set cause it’s the shortest and simplest 😁
_________
_________
Set.prototype.size
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
The size accessor property returns the number of elements in a Set object.
_________
_________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
Array.from() Static Method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________
_________
Map Object vs. Set Object
https://stackoverflow.com/questions/24085708/javascript-map-object-vs-set-object
Map and Set objects are both iterable objects. Both store objects by [key, value] pair. I want to know when to use what? Is there any preference for one over another?
_________
_________
Count Distinct Elements in an Array
https://www.geeksforgeeks.org/count-distinct-elements-in-an-array/
Given an unsorted array, count all distinct elements in it. A simple solution is to run two loops. For every element, check if it has appeared before. If yes, increment …
_________

*/
//Your code should go here:

