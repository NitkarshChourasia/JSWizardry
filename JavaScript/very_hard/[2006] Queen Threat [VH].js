/*
####  Queen Threat  ####

Create a function that takes a character from a to h as the column number and an integer from 1 to 8 as the row number which together represent the location of a queen on a normal-sized chess board. Return this two dimensional 8x8 array.
This array must consist of zeroes and ones. The ones are placed in positions where the queen can move in one move and zeroes represent positions on the board where it cannot.


[Examples]

___
checkBoard("a", 1) ➞ [
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1]
]

checkBoard("h", 4) ➞ [
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1]
]
 
checkBoard("c", 8) ➞ [
  [1, 1, 0, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0]
]
_____



[Notes]

The queens' current position is a zero as it is impossible to move to this position during one turn, because the queen is already there.


[arrays] [games] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Understanding Chess Notation
https://www.dummies.com/games/chess/understanding-chess-notation/
Learn how the squares are marked.
_________
_________
Learn Chess: The Queen
http://www.chess-poster.com/english/learn_chess/queen/the_queen.htm
The possible movements of a queen explained.
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________

*/
//Your code should go here:

