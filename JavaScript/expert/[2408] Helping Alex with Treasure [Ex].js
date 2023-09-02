/*
####  Helping Alex with Treasure  ####

Alex and Cindy, two students who recently spent some time on treasure hunting. Apart from scrap metal, they found a number of boxes full of old coins. Boxes are of different value and now are lined up in a row. Cindy proposes an idea to divide the treasure into two parts. She thinks that a fair way is that she and Alex take turns, and each of them chooses one box from either left or right side of the line. Cindy is a very generous person and lets Alex to go first.
Alex wants to check whether this idea is actually good for him. He asks you to write a program to calculate the total value that he will get compared to how much Cindy will get if he chooses a box first. You can be sure that they both are very smart, and always select the next box in such way that it leads to the best overall individual solution for them. This means they may not always choose the highest value box of the two currently available in order to ensure they get a higher value box later.


[Examples]

___
solve([7, 2]) ➞ 5
// Alex will choose the 7, and then Cindy gets the 2.
// So the result is 7 ‐ 2 = 5.

solve([2, 7, 3]) ➞ ‐2
// It doesn't matter whether Alex chooses the 2 or the 3. Cindy will
// choose the 7 and Alex will get the remaining box. (2+3) ‐ 7 = ‐2.

solve([1000, 1000, 1000, 1000, 1000]) ➞ 1000
// Since Alex chooses first, he will get 3 boxes and Cindy will get only 2.
// They all have the same value so (1000+1000+1000) ‐ (1000+1000) = 1000.

solve([823, 912, 345, 100000, 867, 222, 991, 3, 40000]) ➞ ‐58111
_____



[Notes]

Reading sections 5.1, 5.3 and 5.4 of the book "Data Structures and Algorithms in Java" by Michael T. Goodrich, Irvine Roberto Tamassia, and Michael H. Goldwasser (2014) should help you with the solution to this task.


[algorithms] [arrays] [data_structures] [functional_programming] 



-------------------------------------------------------------------
[Resources]
_________
Dynamic Programming
https://en.wikipedia.org/wiki/Dynamic_programming
Is both a mathematical optimization method and a computer programming method. The method was developed by Richard Bellman in the 1950s and has found applications in num …
_________

*/
//Your code should go here:

