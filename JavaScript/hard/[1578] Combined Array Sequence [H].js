/*
####  Combined Array Sequence  ####

The goal is to test if a consecutive sequence is formed. A consecutive sequence is defined as sequence of incrementing numbers (e.g. 1, 2, 3 or 5, 6, 7, 8). The twist is that you have to consider the combination of arrays as shown.
___
[3 5 1 -5 ]  =>  [3+4  5+3  1+8  15-5]  =  [7 8 9 10]  =>  true
[4 3 8 15]
_____

Also important is that the arrays can be of different sizes, where excess numbers in the longer one will be paired with 0s from the other one.
___
[2 2 2  ]  =>  [2+5  2+6  2+7  10+0]  = [ 7 8 9 10]  =>  true
[5 6 7 10]
_____



[Notes]

___
*) Each array has at least two elements.
*) Try the harder version.
___



[arrays] [logic] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Consecutive Numbers
https://edabit.com/challenge/TMxknsmodKM3HDbYt
Create a function that determines whether elements in an array can be re-arranged to form a consecutive list of numbers where each number appears exactly once.
_________

*/
//Your code should go here:

