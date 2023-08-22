/*
####  Any Combined Array Sequence  ####

The goal is to test if a consecutive sequence can be formed. A consecutive sequence is defined as a sequence of incrementing numbers (e.g. 1, 2, 3 or 5, 6, 7, 8). The twist is that you have to consider the combination of arrays as shown. You can combine any two elements from different arrays.
___
[-5 1 3 5 ] => [3 5 1 -5 ] => [3+4  5+3  1+8  15-5] = [7 8 9 10] => true
[4 3 8  15] => [4 3 8  15]
_____

Also important is that the arrays can be of different sizes, allowing for partially unpaired numbers in some cases.
___
[2 2 2  ] => [2 2 2 0] => [2+5  2+6  2+7  10+0] = [7 8 9 10] => true
[10 5 6 7] => [5 7 6 10]
_____



[Notes]

___
*) Each array has at least 2 elements.
*) Try the easier version.
___



[arrays] [logic] 



-------------------------------------------------------------------
[Resources]
_________
JavaScript Arrays
https://www.w3schools.com/js/js_arrays.asp
An array is a special variable, which can hold more than one value at a time. If you have a list of items (a list of car names, for example), storing the cars in singl …
_________

*/
//Your code should go here:

