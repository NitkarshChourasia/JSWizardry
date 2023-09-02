/*
####  The Magic Square Game  ####

There are two players, Alice and Bob, each with a 3-by-3 grid. A referee tells Alice to fill out one particular row in the grid (say the second row) by putting either a 1 or a 0 in each box, such that the sum of the numbers in that row is odd. The referee tells Bob to fill out one column in the grid (say the first column) by putting either a 1 or a 0 in each box, such that the sum of the numbers in that column is even.
Alice and Bob win the game if Alice’s numbers give an odd sum, Bob’s give an even sum, and (most important) they’ve each written down the same number in the one square where their row and column intersect.


[Examples]

___
magicSquareGame([2, "100"], [1, "101"]) ➞ false

magicSquareGame([2, "001"], [1, "101"]) ➞ true

magicSquareGame([3, "111"], [2, "011"]) ➞ true

magicSquareGame([1, "010"], [3, "101"]) ➞ false

// Two arrays, Alice [row, "her choice"], Bob [column, "his choice"]
_____



[Notes]

___
*) Look at the article in the resources tab to see the first two examples in action.
*) The row of Alice is always odd, the column of Bob is always even.
___



[algorithms] [games] [math] [validation] 



-------------------------------------------------------------------
[Resources]
_________
The Universe’s Complexity Revealed by Simple Quantum Games
https://www.quantamagazine.org/the-universes-ultimate-complexity-revealed-by-simple-quantum-games-20190305/
One of the biggest and most basic questions in physics involves the number of ways to configure the matter in the universe. If you took all that matter and rearranged i …
_________

*/
//Your code should go here:

