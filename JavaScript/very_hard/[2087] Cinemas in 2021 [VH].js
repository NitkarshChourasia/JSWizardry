/*
####  Cinemas in 2021  ####

Given an array of seats, return the maximum number of new people which can be seated, as long as there is at least a gap of 2 seats between people.
___
*) Empty seats are given as 0.
*) Occupied seats are given as 1.
*) Don't move any seats which are already occupied, even if they are less than 2 seats apart. Consider only the gaps between new seats and existing seats.
___



[Examples]

___
maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]) ➞ 2
// [1, 0, 0, 1, 0, 0, 1, 0, 0, 1]

maximumSeating([0, 0, 0, 0]) ➞ 2
// [1, 0, 0, 1]

maximumSeating([1, 0, 0, 0, 0, 1]) ➞ 0
// There is no way to have a gap of at least 2 chairs when adding someone else.
_____



[Notes]

___
*) Notice how there may be several possibilities for assigning seats to people, but these cases won't affect the results.
*) All seats will be valid.
___



[algorithms] [arrays] [interview] [loops] 



-------------------------------------------------------------------
[Resources]
_________
While Loop
https://www.w3schools.com/js/js_loop_while.asp
Loops through a block of code as long as a specified condition is true.
_________
_________
For Loop
https://www.w3schools.com/js/js_loop_for.asp
If you omit statement 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser. Read about breaks in a later chapte …
_________

*/
//Your code should go here:

