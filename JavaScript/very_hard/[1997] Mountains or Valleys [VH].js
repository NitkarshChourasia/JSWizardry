/*
####  Mountains or Valleys  ####

A mountain is an array with exactly one peak.
___
*) All numbers to the left of the peak are increasing.
*) All numbers to the right of the peak are decreasing.
*) The peak CANNOT be on the boundary.
___

A valley is an array with exactly one trough.
___
*) All numbers to the left of the trough are decreasing.
*) All numbers to the right of the trough are increasing.
*) The trough CANNOT be on the boundary.
___

Some examples of mountains and valleys:
___
Mountain A:  [1, 3, 5, 4, 3, 2]   // 5 is the peak
Mountain B:  [-1, 0, -1]   // 0 is the peak
Mountain B:  [-1, -1, 0, -1, -1]   // 0 is the peak (plateau on both sides is okay)

Valley A: [10, 9, 8, 7, 2, 3, 4, 5]   // 2 is the trough
Valley B: [350, 100, 200, 400, 700]  // 100 is the trough
_____

Neither mountains nor valleys:
___
Landscape A: [1, 2, 3, 2, 4, 1]  // 2 peaks (3, 4), not 1
Landscape B: [5, 4, 3, 2, 1]  // Peak cannot be a boundary element
Landscape B: [0, -1, -1, 0, -1, -1]  // 2 peaks (0)
_____

Based on the rules above, write a function that takes in an array and returns either "mountain", "valley", or "neither".


[Examples]

___
landscapeType([3, 4, 5, 4, 3]) ➞ "mountain"

landscapeType([9, 7, 3, 1, 2, 4]) ➞ "valley"

landscapeType([9, 8, 9]) ➞ "valley"

landscapeType([9, 8, 9, 8]) ➞ "neither"
_____



[Notes]

___
*) A peak is not exactly the same as the max of an array. The max is a unique number, but an array may have multiple peaks. However, if there exists only one peak in an array, then it is true that the peak = max.
*) See comments for a hint.
___



[arrays] [functional_programming] [higher_order_functions] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their se …
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
_________

*/
//Your code should go here:

