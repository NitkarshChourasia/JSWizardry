/*
####  Smallest Square Ending  ####

In a letter to Lord Bowden in 1837, Charles Babbage asked, "What is the smallest positive integer whose square ends in 269,696?". He thought the answer was 99,736 whose square is 9,947,269,696. Was he right?
Write a function that takes a positive integer n and returns the smallest number whose square ends with n. One small twist, if n == 269696 return "Babbage was correct!" if the smallest number whose square ends with 269,696 is 99,736, otherwise return "Babbage was incorrect!".


[Examples]

___
babbage(25) ➞ 5

babbage(161) ➞ 119
// 119 * 119 == 14,161
// Ends with 161

babbage(269696) ➞ "Babbage was {?}!"
// Replace {?} with the word "correct" or "incorrect".
_____



[Notes]

___
*) n will always be a positive integer n > 0.
*) Make sure your solution is efficient enough to pass the tests within a 12 second time limit.
___



[algorithms] [logic] [math] 



-------------------------------------------------------------------
[Resources]
_________
toString() Method
https://www.w3schools.com/jsref/jsref_tostring_number.asp
Converts a number to a string.
_________
_________
endsWith() Method
https://www.w3schools.com/jsref/jsref_endswith.asp
Determines whether a string ends with the characters of a specified string.
_________

*/
//Your code should go here:

