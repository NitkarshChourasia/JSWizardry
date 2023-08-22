/*
####  An OSHA Approved Ladder?  ####

Due to a huge scandal about the Laddersons Ladder Factory creating faulty ladders, the Occupational Safety and Health Administration require your help in determining whether a ladder is safe enough for use in the work place! It is vital that a ladder passes all criterea:
___
*) The ladder must be at least 5 characters wide.
*) The ladder mustn't have more than a 2 character gap between rungs.
*) Rungs must be evenly spaced apart.
*) Rungs should not be broken (i.e. no gaps).
___

Given a ladder (drawn as an array of strings) return true if it passes all of OSHA's criterea.


[Examples]

___
isLadderSafe([
  "#   #",
  "#####",
  "#   #",
  "#   #",
  "#####",
  "#   #",
  "#   #",
  "#####",
  "#   #"
]) ➞ true
_____

___
isLadderSafe([
  "#   #",
  "#####",
  "#   #",
  "#####",
  "#   #",
  "#   #",
  "#####",
  "#   #"
]) ➞ false

// Uneven spaces between rungs.
_____

___
isLadderSafe([
  "#  #",
  "####",
  "#  #",
  "#  #",
  "####",
  "#  #",
  "#  #",
  "####",
  "#  #"
]) ➞ false

// Ladder is too narrow, should be at least 5 characters wide.
_____

___
isLadderSafe([
  "#   #",
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#   #",
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#   #",
  "#####",
  "#   #"
]), ➞ false

// Gap between rungs is too wide, should be less than 3.
_____

___
isLadderSafe([
  "#   #",
  "#  ##",
  "#   #",
  "#   #",
  "#####",
  "#   #",
  "#   #",
  "#####",
  "#   #"
]) ➞ false

// The top rung is broken.
_____



[Notes]

___
*) There will be a one character space with no rung at the top and bottom of every ladder.
*) The height of the ladder is not needed for solving this problem.
___



[arrays] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Regular expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
Are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.
_________

*/
//Your code should go here:

