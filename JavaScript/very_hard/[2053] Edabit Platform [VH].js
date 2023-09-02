/*
####  Edabit Platform  ####

In this challenge, process the inputs given by a player playing a simple platform game. Each level of the game is represented by a matrix that contains two sub-arrays:
___
*) The first (or upper) array is the sky.
*) The second (or lower) array is the ground.
___

Each sub-array contains ten elements, being either collectible items (in the sky) or walkeable tiles, pitfalls and enemies (in the ground).
___
level1 = [
  [" ", "°", " ", "%", " ", " ", "°", " ", "°", " "],
  ["_", "!", "_", "_", " ", "_", "_", " ", "_", "_"]
]
_____

In the sky, there are empty cells (a single space " "), coins (a degree symbol "°") and double coins (a percentage symbol "%"):
___
*) A coin is worthy 25 points.
*) A double coin is worthy 50 points.
___

In the ground, there are walkeable tiles (an underscore "_"), pitfalls (a single space " ") and enemies (an exclamation mark "!"):
___
*) If the player goes through a pitfall or if he touches an enemy, the game ends.
___

The player starts at the first ground tile (the first cell of the second sub-array), and through its inputs he can do three different moves:
"F" is for "Forward", the player moves to the next tile in the ground.
___
// The "x" is to represent the position of player

// With input "F" player moves forward (1 tile)
// He touches the enemy

level1 = [
  [" ", "°", " ", ...],
  ["x_", "!", "_", ...]
]

level1 = [
  [" ", "°", " ", ...],
  ["_", "x!", "_", ...]
]
_____

"U" is for "Up", the player jumps up from a ground tile touching the sky and falling back in the same ground tile
___
// The "x" is to represent the position of player

// With input "U" the player jumps up and falls back in the same tile
// He collects nothing, because there's empty sky

level1 = [
  [" ", "°", " " ...],
  ["x_", "!", "_" ...]
]

level1 = [
  ["x", "°", " " ...],
  ["_", "!", "_" ...]
]

level1 = [
  ["_", "°", " " ...],
  ["x_", "!", "_" ...]
]
_____

"J" is for "Jump", the player jumps up and right from a ground tile reaching the sky in the next frame, and falling at the ground two tiles after its starting position.
___
// The "x" is to represent the position of player

// With input "J" the player jumps up and right
// He reach the sky of next frame, and he falls at ground two tiles on the right
// He collects a coin avoiding the enemy

level1 = [
  [" ", "°", " " ...],
  ["x_", "!", "_" ...]
]

level1 = [
  [" ", "x", " " ...],
  ["_", "!", "_" ...]
]

level1 = [
  [" ", " ", " " ...],
  ["_", "!", "x_" ...]
]
_____

A player submits 10 inputs, and if he reaches the last ground tile (or if he trespass it), the level is completed. If he touches an enemy or falls through a pitfall, it's game over. If the player completes the level (or die) before the tenth input, the game stops so that the inputs in excess are not considered.
Given a matrix level and a string of ten uppercase letters input, implement a function that returns:
___
*) The string "Level completed! Your score: XXX!" if the player completes the level.
*) The string "Game over! Your score: XXX!" if the player falls or touches an enemy.
___

Replacing XXX with the score given by the coins and double coins collected before the game stops.


[Example 1]

___
// The "x" is to represent the position of player after a move

edaPlatform([
  [" ", "°", " ", "%", " ", " ", "°", " ", "°", " "],
  ["_", "!", "_", "_", " ", "_", "_", " ", "_", "_"]
], "JFUJFUJUFF") ➞ "Level completed! Your score: 125!"

// J: Player jumps up and right to avoid the enemy, collecting a coin for 25 points

[
  [" ", " ", " ", "%", " ", " ", "°", " ", "°", " "],
  ["_", "!", "x", "_", " ", "_", "_", " ", "_", "_"]
]

// F: Player goes forward

[
  [" ", " ", " ", "%", " ", " ", "°", " ", "°", " "],
  ["_", "!", "_", "x", " ", "_", "_", " ", "_", "_"]
]

// U: Player jumps up collecting a double coin for 50 points

[
  [" ", " ", " ", " ", " ", " ", "°", " ", "°", " "],
  ["_", "!", "_", "x", " ", "_", "_", " ", "_", "_"]
]

// J: Player jumps up and right to avoid the pitfall

[
  [" ", " ", " ", " ", " ", " ", "°", " ", "°", " "],
  ["_", "!", "_", " ", " ", "x", "_", " ", "_", "_"]
]

// F: Player goes forward

[
  [" ", " ", " ", " ", " ", " ", "°", " ", "°", " "],
  ["_", "!", "_", " ", " ", "_", "x", " ", "_", "_"]
]

// U: Player jumps up collecting a coin for 25 points

[
  [" ", " ", " ", " ", " ", " ", " ", " ", "°", " "],
  ["_", "!", "_", " ", " ", "_", "x", " ", "_", "_"]
]

// J: Player jumps up and right to avoid the pitfall

[
  [" ", " ", " ", " ", " ", " ", " ", " ", "°", " "],
  ["_", "!", "_", " ", " ", "_", "_", " ", "x", "_"]
]

// U: Player jumps up to collect a coin

[
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ["_", "!", "_", " ", " ", "_", "_", " ", "x", "_"]
]

// F: Player goes forward to the last tile and completes the level

[
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ["_", "!", "_", " ", " ", "_", "_", " ", "_", "x"]
]

// The last input "F" is not considered because the level has been completed
_____



[Example 2]

___
// The "x" is to represent the position of player after a move

edaPlatform([
  [" ", "°", " ", "%", " ", " ", "°", " ", "°", " "],
  ["_", "!", "_", "_", " ", "_", "_", " ", "_", "_"]
], "JFFJUJJUFF") ➞ "Game over! Your score: 25!"

// J: Player jumps up and right to avoid the enemy, collecting a coin for 25 points

[
  [" ", " ", " ", "%", " ", " ", "°", " ", "°", " "],
  ["_", "!", "x", "_", " ", "_", "_", " ", "_", "_"]
]

// F: Player goes forward

[
  [" ", " ", " ", "%", " ", " ", "°", " ", "°", " "],
  ["_", "!", "_", "x", " ", "_", "_", " ", "_", "_"]
]

// F: Player goes forward and falls through the pitfall

[
  [" ", " ", " ", "%", " ", " ", "°", " ", "°", " "],
  ["_", "!", "_", "_", "fall", "_", "_", " ", "_", "_"]
]

// The other seven inputs are not considered because it's game over
_____



[Example 3]

___
// The "x" is to represent the position of player after a move

edaPlatform([
  [" ", "°", " ", "%", " ", " ", "°", " ", "°", " "],
  ["_", "!", "_", "_", " ", "_", "_", " ", "_", "_"]
], "FFFFJJUJJJ") ➞ "Game over! Your score: 0!"

// F: Player goes forward and touches the enemy

[
  [" ", "°", " ", "%", " ", " ", "°", " ", "°", " "],
  ["_", "enemy", "_", "_", " ", "_", "_", " ", "_", "_"]
]

// The other 9 inputs are not considered
_____



[Notes]

___
*) Remember that a level is completed if the player reaches the last ground tile or if he trespass it through a JUMP.
*) Data (levels and inputs) will be always valid. You can assume that an end is always assured (through completing the level or through a game over).
___



[arrays] [data_structures] [games] [loops] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

