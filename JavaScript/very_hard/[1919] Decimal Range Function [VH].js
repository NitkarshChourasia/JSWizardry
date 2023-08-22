/*
####  Decimal Range Function  ####

Create a function that can take 1, 2, or 3 arguments 1 being start, 2 being stop and 3 being step and returns an array. This should be able to return float values.


[Examples]

___
Default Values Start = 0, Step = 1
drange(1.2, 5.9, 0.45) ➞ [1.20, 1.65, 2.10, 2.55, 3.00, 3.45, 3.90, 4.35, 4.80, 5.25, 5.70]
// start = 1.2 stop = 5.9 and step = 0.45
//1.2, 1.2+0.45=1.65,1.65+0.45=2.1,...,5.7 Should be less than 5.9

drange(10) ➞ [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// start = 0 ,  stop = 10  and step = 1
//0,0+1=1,...,9                          Should be less than 10.

drange(1, 7, 1.2) ➞ [1.0, 2.2, 3.4, 4.6, 5.8]
// start = 1  stop = 7 and step = 1.2
// 1, 1+1.2=2.2, 2.2 + 1.2=3.4,...5.8   Should be less than 7.
_____



[Notes]

Always round values to the number with the most decimal digits (e.g. in the first example, the answer should always be rounded to 2 digits. In the second, it should be rounded to 0 digits and the third, 1 digit).


[algebra] [data_structures] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
For Loop
https://www.w3schools.com/js/js_loop_for.asp
Can execute a block of code a number of times. Loops are handy, if you want to run the same code over and over again, each time with a different value.
_________
_________
if else and else if
https://www.w3schools.com/js/js_if_else.asp
Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
_________

*/
//Your code should go here:

