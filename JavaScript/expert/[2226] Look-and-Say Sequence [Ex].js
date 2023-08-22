/*
####  Look-and-Say Sequence  ####

Create a function that takes in two positive integers start and n and returns a list of the first n terms of the look-and-say sequence starting at the given start.
Each term of the look-and-say sequence (except for the first term) is created from the previous term using the following process.
Start with a term in the sequence (for example, 111312211):
___
111312211
_____

Split it into subsequences of consecutive repeating digits:
___
111 3 1 22 11
_____

Count the number of digits in each subsequence:
___
three 1, one 3, one 1, two 2, two 1
_____

Turn everything into digits:
___
3 1, 1 3, 1 1, 2 2, 2 1
_____

Now combine everything into one number:
___
3113112221
_____

So 3113112221 is the next term in the sequence after 111312211.


[Examples]

___
lookAndSay(1, 7) ➞ [1, 11, 21, 1211, 111221, 312211, 13112221]

lookAndSay(123, 4) ➞ [123, 111213, 31121113, 1321123113]

lookAndSay(70, 5) ➞ [70, 1710, 11171110, 31173110, 132117132110]
_____



[Notes]

Your output should be an array of integers in the correct sequence.


[numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
parseInt() Function
https://www.w3schools.com/jsref/jsref_parseint.asp
Parses a string and returns an integer.
_________
_________
toString() Method
https://www.geeksforgeeks.org/javascript-tostring-function/#:~:text=The%20toString()%20method%20in,representing%20the%20specified%20Number%20object.&text=The%20toString()%20method%20is,'%20operator.
Is used with a number and converts the number to a string. It is used to return a string representing the specified Number object.
_________

*/
//Your code should go here:

