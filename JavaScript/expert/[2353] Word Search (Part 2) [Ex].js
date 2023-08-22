/*
####  Word Search (Part 2)  ####

This challenge involves finding words in an 8x8 grid. Given a string of 64 letters and an array of words to find, convert the string to an 8x8 array, and return true if all words can be found in the new array. Return false otherwise. Words can be read in any direction (horizontally, vertically or diagonally), and can also wrap over the same column, row or diagonal.


[Example]

___
letters = "HWAVEOWCFONNANFABEOAMOIAHODOXORTACTIDINOBWZODGELINEEAFASTETAPELL"
words = ["slot", "donate", "orthodox", "rated", "wave", "tape", "leg", "habit", "add", "fox"]
_____

This would give the array below:
___
[
  ["H", "W", "A", "V", "E", "O", "W", "C"],
  ["F", "O", "N", "N", "A", "N", "F", "A"],
  ["B", "E", "O", "A", "M", "O", "I", "A"],
  ["H", "O", "D", "O", "X", "O", "R", "T"],
  ["A", "C", "T", "I", "D", "I", "N", "O"],
  ["B", "W", "Z", "O", "D", "G", "E", "L"],
  ["I", "N", "E", "E", "A", "F", "A", "S"],
  ["T", "E", "T", "A", "P", "E", "L", "L"]
]
_____

You would return true as all words can be found:
___
[
  ["_", "W", "A", "V", "E", "_", "_", "_"],
  ["_", "_", "N", "_", "_", "_", "F", "_"],
  ["_", "_", "O", "_", "_", "O", "_", "A"],
  ["H", "O", "D", "O", "X", "O", "R", "T"],
  ["A", "_", "_", "_", "D", "_", "_", "O"],
  ["B", "_", "_", "_", "D", "G", "E", "L"],
  ["I", "_", "E", "E", "A", "_", "_", "S"],
  ["T", "_", "T", "A", "P", "E", "_", "_"]
]
_____

Examples of the wrapped words:
___
[
  ["_", "_", "A", "_", "_", "_", "_", "_"],
  ["_", "_", "N", "_", "_", "_", "_", "_"],
  ["_", "_", "O", "_", "_", "_", "_", "A"],
  ["H", "O", "D", "O", "X", "O", "R", "T"],
  ["_", "_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "D", "_", "_", "_"],
  ["_", "_", "E", "E", "_", "_", "_", "_"],
  ["_", "_", "T", "_", "_", "_", "_", "_"]
]

# "orthodox" -> horizontal
# "donate" -> vertical
# "rated" -> diagonal
_____



[Notes]

N/A


[arrays] [strings] 



-------------------------------------------------------------------
[Resources]
_________
JavaScript if, else, and else if
https://www.w3schools.com/js/js_if_else.asp
Conditional statements are used to perform different actions based on different conditions.
_________

*/
//Your code should go here:

