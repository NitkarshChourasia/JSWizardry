/*
####  Broken Bridge  ####

A broken bridge can be represented by 1s and 0s, where contiguous 0s represent holes. You can walk across a bridge with a hole with a maximum width of 1, but any holes bigger than that you must fix first. For example, the bridge below is walkeable:
___
[1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1]
_____

This bridge is not:
___
[1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
_____

You own several wooden planks, each with different widths. You can patch the holes on the bridge with these planks. More specifically, a plank size n can fill a n-sized hole. If you had a plank of size 2, the un-walkeable bridge above could be filled in:
___
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
_____

But even if you only had a plank of size 1, you could still transform the unwalkeable bridge into a walkeable one:
___
[1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
_____

Write a function that takes in a broken bridge, an array of plank sizes, and returns true if the bridge can be patched up enough to walk over, and false otherwise.


[Examples]

___
canPatch([1, 0, 0, 0, 0, 0, 0, 1], [5, 1, 2]) ➞ true
// You can use the 5 plank to transform the 6 hole to a 1 hole.
// Leftover planks [1, 2] are okay.

canPatch([1, 0, 0, 0, 0, 0, 0, 1], [4, 1, 2, 3, 4]) ➞ false
// None of your planks are long enough (you can't combine them).

canPatch([1, 0, 0, 1, 1, 0, 0, 0, 1], [1, 2]) ➞ true

canPatch([1, 0, 0, 1, 1, 0, 0, 0, 1], [1, 1]) ➞ false
_____



[Notes]

___
*) Individual planks may NOT be combined to form a longer plank.
*) Leftover planks are okay.
___



[arrays] [higher_order_functions] [validation] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

