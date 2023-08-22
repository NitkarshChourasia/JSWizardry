/*
####  Cutting a Sheet of Paper  ####

Suppose you have a sheet of paper measuring 8x10. You want to cut it exactly in half while maintaining its rectangular shape. You can do this in two ways. You can cut it in half preserving its long dimension of 10.
We will call this a long cut:
___
[8, 10] ➞ long cut ➞ [4, 10]
_____

Or you can cut it in half preserving its short dimension. This is a short cut:
___
[8, 10] ➞ short cut ➞ [5, 8]
_____

If the shape happens to be a square, then a long cut and a short cut amount to the same thing:
___
[12, 12] ➞ long cut ➞ [6, 12]
_____

___
[12, 12] ➞ short cut ➞ [6, 12]
_____

For this challenge, you are given two arguments. The first one is a string containing the cuts to be made to a sheet of paper in sequence from first to last. A long cut is designated by "L" and a short cut by "S".
The second argument is the dimensions of the paper after all the cuts are made.
You are to devise a function that will find the original dimensions of the sheet of paper before any cuts were made. There could be more than one possible answer so return your answer(s) as an array. If it is not possible to arrive at the final dimensions with the indicated cuts, return an empty array.


[Examples]

___
cuttingPaper("S", [3, 7]) ➞ [[3, 14]]

cuttingPaper("L", [5, 7]) ➞ []

cuttingPaper("S", [5, 7]) ➞ [[5, 14], [7, 10]]

cuttingPaper("SSLS", [3, 4]) ➞ [[6, 32], [8, 24], [12, 16]]

cuttingPaper("LSSLSL", [7, 53]) ➞ [[56, 424]]

cuttingPaper("LSSSSS", [1, 2]) ➞ [[2, 64], [4, 32], [8, 16]]
_____



[Notes]

Sort your answer with the smaller dimension in ascending order.


[geometry] [numbers] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

