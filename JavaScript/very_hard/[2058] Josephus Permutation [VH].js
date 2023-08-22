/*
####  Josephus Permutation  ####

A group of n prisoners stand in a circle awaiting execution. Starting from an arbitrary position(0), the executioner kills every kth person until one person remains standing, who is then granted freedom (see examples).
Create a function that takes 2 arguments — the number of people to be executed n, and the step size k, and returns the original position (index) of the person who survives.


[Examples]

___
whoGoesFree(9, 2) ➞ 2

// Prisoners = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// Executed people replaced by - (a dash) for illustration purposes.
// 1st round of execution = [0, -, 2, -, 4, -, 6, -, 8]  -> [0, 2, 4, 6, 8]
// 2nd round = [-, 2, -, 6, -] -> [2, 6]  # 0 is killed in this round because it's beside 8 who was skipped over.
// 3rd round = [2, -]

whoGoesFree(9, 3) ➞ 0

// [0, 1, 2, 3, 4, 5, 6, 7, 8]
// [0, 1, -, 3, 4, -, 6, 7, -] -> [0, 1, 3, 4, 6, 7]
// [0, 1, -, 4, 6, -] -> [0, 1, 4, 6]
// [0, 1, -, 6] -> [0, 1, 6]
// [0, -, 6] -> [0, 6]
// [0, -] -> [0]
_____



[Notes]

Refer to Resources tab for more info.


[loops] [math] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Josephus Problem
https://en.wikipedia.org/wiki/Josephus_problem
A theoretical problem related to a certain counting-out game. A drawing for the Josephus problem sequence for 500 people and skipping value of 6. The horizontal axis is …
_________
_________
Josephus Problem (A O(n) Solution)
https://www.geeksforgeeks.org/josephus-problem-set-1-a-on-solution/
There are n people standing in a circle waiting to be executed. The counting out begins at some point in the circle and proceeds around the circle in a fixed direction. …
_________
_________
The Josephus Flavius’ Problem
http://blue.butler.edu/~phenders/InRoads/MathCounts8.pdf
This version of the original “Josephus Flavius’ Problem” has been chosen to make the outcome a positive one. The original problem along with a very cool java applet can …
_________
_________
The Josephus Problem - Numberphile
https://www.youtube.com/watch?v=uCsD3ZGzMgE
The Josephus Problem, featuring Daniel Erman from University of Wisconsin-Madison.
_________

*/
//Your code should go here:

