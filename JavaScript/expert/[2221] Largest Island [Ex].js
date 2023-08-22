/*
####  Largest Island  ####

An island is a region of contiguous ones. A contiguous one is a 1 that is touched by at least one other 1, either horizontally, vertically or diagonally. Given a piece of the map, represented by a 2-D array, create a function that returns the area of the largest island.
To illustrate, if we were given the following piece of the map, we should return 4.
___
[
  [0, 0, 0],
  [0, 1, 1],
  [0, 1, 1]
]
_____

Our function should yield 2 for the map below:
___
[
  [1, 0, 0],
  [0, 0, 1],
  [0, 0, 1]
]
_____

Our function should yield 4 for the map below: :
___
[
  [1, 0, 0],
  [0, 1, 1],
  [0, 0, 1]
]
_____



[Examples]

___
largestIsland([
  [1, 0, 0], 
  [0, 0, 0], 
  [0, 0, 1]
])

➞ 1

largestIsland([
  [1, 1, 0], 
  [0, 1, 1], 
  [0, 0, 1]
])

➞ 5

largestIsland([
  [1, 0, 0], 
  [1, 0, 0], 
  [1, 0, 1]
])

➞ 3
_____



[Notes]

___
*) Maps can be any m x n dimension.
*) Maps will always have at least 1 element. m >= 1 and n >= 1.
___



[arrays] [data_structures] [games] [logic] 



-------------------------------------------------------------------
[Resources]
_________
Find the Number of Islands | Set 2 (Using Disjoint Set)
https://www.geeksforgeeks.org/find-the-number-of-islands-set-2-using-disjoint-set/
Given a boolean 2D matrix, find the number of islands. A group of connected 1s forms an island.
_________
_________
Find the Number of Islands | Set 1 (Using DFS)
https://www.geeksforgeeks.org/find-number-of-islands/
Given a boolean 2D matrix, find the number of islands. A group of connected 1s forms an island.
_________

*/
//Your code should go here:

