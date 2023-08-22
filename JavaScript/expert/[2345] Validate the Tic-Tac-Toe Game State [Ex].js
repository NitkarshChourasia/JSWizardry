/*
####  Validate the Tic-Tac-Toe Game State  ####

The function is given an array of three strings representing a board. The characters can be "X", "O", " ". The first player writes "X" at first turn. If a player has three marks in a row, column or a diagonal, the game stops. Given the board evaluate if this state can be achieved in line with the rules, return true / false.


[Examples]

___
validateTicTacToe(["X  ", "   ", "   "]) ➞ true
// X goes first.

validateTicTacToe(["O  ", "   ", "   "]) ➞ false
// O cannot go first.

validate_tic_tac_toe(["X X", " O ", "   "]) ➞ true
// Two X and one O is a possible state.

validateTicTacToe(["XOX", " X ", "   "]) ➞ false
// Three X and one O is not a possible state.
// Players have to go one after another.
_____



[Notes]

N/A


[algorithms] [games] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
For Loop
https://www.w3schools.com/js/js_loop_for.asp
Loops are handy, if you want to run the same code over and over again, each time with a different value. Often this is the case when working with arrays...
_________

*/
//Your code should go here:

