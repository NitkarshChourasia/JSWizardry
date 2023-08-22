/*
####  The Simple Game  ####

This game is played with a random string of digits 0-9. The object is to reduce the string to zero length by removing digits from the left end of the string. Removals are governed by one simple rule. If the leftmost digit is n, you can remove up to n digits from the left end (inclusive). After doing this the new leftmost digit is reduced by the number of digits removed. If this would cause the leftmost digit to fall to zero or below then the move is not allowed. The final move of reducing the string to zero length must be done by exact count.
The game "4621" can be won in one move since there are 4 digits and the leftmost digit is 4. "6348" requires two moves to win: remove 2 to get to "28", and remove 2 again to get to "". "12345" can't be won by any combination of moves.
Devise a function that takes a string and returns the shortest sequence of moves that will win the game. If there are ties for the shortest, sort them in ascending order. If the game is unwinnable return [].


[Examples]

___
simple("4621") ➞ [[4]]
// Exact count, 4 digits, leftmost is 4.

simple("6348") ➞ [[2, 2]]

simple("65042485") ➞ [[6, 2]]

simple("51416573385334") ➞ [[4, 2, 3, 5]]
// String after each move: "2573385334", "53385334", "55334", ""

simple("38088198647805") ➞ [[1, 5, 1, 7], [3, 3, 1, 7], [3, 3, 5, 3], [3, 4, 3, 4]]
// Four are tied for shortest, sorted ascending.

simple("2177510183994154") ➞ [[2, 1, 5, 3, 3, 2]]

simple("9555267224559216") ➞ []
// No solution possible.
_____



[Notes]

This game could be made less simple by allowing draws from either end of the string or, perhaps, by making it a 2 player game with the player making the last move being the winner.


[arrays] [games] [numbers] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

