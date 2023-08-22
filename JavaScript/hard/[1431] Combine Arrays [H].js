/*
####  Combine Arrays  ####

Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays.
These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, the second array on index 1, and so on.
If any array contains fewer items than necessary, supplement the missing item with "*".


[Examples]

___
combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]) ➞ [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) ➞ [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]) ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]
_____



[Notes]

N/A


[arrays] [data_structures] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Loops and Iteration
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
Loops offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

