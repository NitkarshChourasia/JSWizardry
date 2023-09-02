/*
####  Significant Figures  ####

Write a function that takes in a string representation of an integer or decimal number and returns the number of significant figures in the number.
Significant figures are an important part of science because they provide an easy way to show the precision of a measurement at a glance. In general, the more significant figures a number has, the more precise the measurement.
Significant figures are calculated by looking at the digits of a number and determining the total number of digits that are "significant". The rules for deciding which digits are significant are as follows:
___
*) Non-zero digits are significant.
*) 0's in between non-zero digits (from any distance) are significant.
*) Leading 0's (those to the left of all non-zero digits) are not significant.
*) Trailing 0's (those to the right of all non-zero digits) are significant only if the number contains a decimal point ..
*) If the entire number is equal to 0, return 0 for the number of significant figures.
*) Negative signs have no effect on the number of significant figures.
___



[Examples]

___
sigFigs("15030") ➞ 4

sigFigs("0.0067") ➞ 2

sigFigs("-290.00") ➞ 5

sigFigs("-8080.") ➞ 4
_____



[Notes]

___
*) Each input consists of the digits 0-9, along with up to one decimal point . and/or negative sign -.
*) Just because two numbers are equal doesn't mean that their number of sig figs are equal. For example, 1.02 has 3 sig figs while 1.020 has 4.
*) The function should correctly handle numbers that begin with a decimal point.
*) You might find regex helpful for this problem.
___



[numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Significant Figures
https://en.wikipedia.org/wiki/Significant_figures
The significant figures (also known as the significant digits or precision) of a number written in positional notation are digits that carry meaningful contributions to …
_________

*/
//Your code should go here:

