/*
####  Seating Students  ####

Create a function that reads an array of integers stored which will be in the following format: [[K, r1, r2, r3, ...]], where K represents the number of desks in a classroom, and the rest of the integers in the array will be in sorted order and will represent the desks that are already occupied. All of the desks will be arranged in two columns, where desk #1 is at the top left, desk #2 at the top right, desk #3 is below #1, desk #4 is below #2, etc.
Your program should return the number of ways two students can be seated next to each other. This means one student is on the left and one on the right, or one student is directly above or below the other student.
To illustrate:
___
[[12, 2, 6, 7, 11]]
_____

This classroom will look like the following:

___
[[#, 4, #, 8, 10, 12]]
// The first # is 2 and second # is 6 which are occupied.
_____


___
[[1, 3, 5, #, 9, #]]
// The first # is 7 and and second # is 11 which are occupied.
_____

Based on the above arrangement of occupied desks, there are a total of six ways to seat two new students next to each other. The combinations are:
___
[[1, 3]], [[3, 4]], [[3, 5]], [[8, 10]], [[9, 10]], [[10, 12]]
_____

For this input, your program should return 6. K will range from 2 to 24 and will always be an even number. After K, the number of occupied desks in the array can range from 0 to K.


[Examples]

___
seatingStudents([6, 4]) ➞ 4

seatingStudents([8, 1, 8]) ➞ 6

seatingStudents([12, 2, 6, 7, 11])  ➞ 6
_____



[Notes]

N/A


[algorithms] [arrays] [data_structures] [loops] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________

*/
//Your code should go here:

