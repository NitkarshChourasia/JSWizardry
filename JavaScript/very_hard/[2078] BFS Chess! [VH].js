/*
####  BFS Chess!  ####

You will be given the location of a knight, and an end location. The knight can move in a "L" shape. "L" shape movement means that the knight can change it's x coordinate by 2 and it's y coordinate by 1 or it can change it's y coordinate by 2 and it's x coordinate by 1 (you can add and subtract from the x/y).
For example, if the knight is at the position (0, 0), it can move to:
___
(1,2), (1,-2), (2,1), (2,-1), (-1,2), (-1,-2), (-2,1), (-2, -1)
_____

Your job is to return the least amount of steps needed to go from the position K (knight's start position) to E (end). You will only be given the knight starter coordinates (x1, y1) and the end coordinates (x2, y2).
Constrains: 1 <= x1,y1,x2,y2 <= 8


[Examples]

___
knightBFS(1, 1, 8, 8) ➞ 6

knightBFS(1, 1, 3, 2) ➞ 1

knightBFS(8, 8, 3, 3) ➞ 4
_____



[Notes]

___
*) This is a simplified version of this problem.
*) This travel will always be possible.
*) The chess board is 8x8.
___



[algorithms] [games] 



-------------------------------------------------------------------
[Resources]
_________
Breadth First Search in JavaScript
https://medium.com/dailyjs/breadth-first-search-in-javascript-e655cd824fa4
In JavaScript programming, data can be stored in data structures like graphs and trees. Technically trees are graphs. Graphs evolved from the field of mathematics. They …
_________
_________
How the BFS Algorithm Works
https://en.wikipedia.org/wiki/Breadth-first_search
BFS is a really simple and easy to use algorithm, just learn the psuedo code algorithm, and you're set for the rest of your life(other BFS forms are just slight variati …
_________

*/
//Your code should go here:

