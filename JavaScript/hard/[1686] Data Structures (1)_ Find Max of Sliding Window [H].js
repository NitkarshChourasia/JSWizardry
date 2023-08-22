/*
####  Data Structures (1): Find Max of Sliding Window  ####

The sliding window is a technique used to simplify complex data problems. A window that slides over the data to examine different sections of it.
Your challenge is to create a sliding window that traverses the array and returns the maximum value in each window.


[Arguments]

___
*) Array:The array over which you are traversing.
*) windowLength: The length of the window you will be using to do the search.
*) Returns Array: A new array containing the maximums for each window.
*) You are given this array and a window length of 2.
___

___
[4, 5, 6, 7, 8, 9]
_____

Our function would start by examining the first two elements of the array and pushes the max value to a new array.
___
[**4, 5,** 6, 7, 8, 9]
_____

... then the window slides to examine the next two, in this case 5 and 6, and pushes the max value to the array.
___
[4, **5, 6**, 7, 8, 9]
_____

The window will examine the entire length of the array until the maximums for each window have been added to the new array.


[Examples]

___
windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3) ➞ [3, 4, 4, 4, 3, 2, 5]
_____



[Notes]

___
*) This is part of my Data Structures series. A collection of common coding interview challenges used to test ones understanding of data structures.
*) This entire series of challenges can be found here.
___



[arrays] [data_structures] [interview] 



-------------------------------------------------------------------
[Resources]
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.
_________
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
_________
_________
Window Sliding Technique
https://www.geeksforgeeks.org/window-sliding-technique/
This technique shows how a nested for loop in some problems can be converted to a single for loop to reduce the time complexity.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of i …
_________

*/
//Your code should go here:

