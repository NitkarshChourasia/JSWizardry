/*
####  Word Search (Part 1)  ####

This challenge involves finding words in an 8x8 grid. Given a string of 64 letters and a string of words to find, convert the string to an 8x8 array, and return true if all words in the string can be found in the array. Return false otherwise. Words can be read in any direction (horizontally, vertically or diagonally).


[Example]

___
letters = "PSUWHATSLPACKAGENYOLRDVLFINGEZBMIREHQNJOATBVGYESJDUWUESTPSTICKEY"
words = ["stick", "most", "key", "vein", "yes", "package", "tube", "target", "elm", "spy"]
_____

This would give the list below:
___
[
  ["P", "S", "U", "W", "H", "A", "T", "S"],
  ["L", "P", "A", "C", "K", "A", "G", "E"],
  ["N", "Y", "O", "L", "R", "D", "V", "L"],
  ["F", "I", "N", "G", "E", "Z", "B", "M"],
  ["I", "R", "E", "H", "Q", "N", "J", "O"],
  ["A", "T", "B", "V", "G", "Y", "E", "S"],
  ["J", "D", "U", "W", "U", "E", "S", "T"],
  ["P", "S", "T", "I", "C", "K", "E", "Y"]
]
_____

You would return true as all words can be found:
___
[
  ["_", "S", "_", "_", "_", "_", "T", "_"],
  ["_", "P", "A", "C", "K", "A", "G", "E"],
  ["N", "Y", "_", "_", "R", "_", "_", "L"],
  ["_", "I", "_", "G", "_", "_", "_", "M"],
  ["_", "_", "E", "_", "_", "_", "_", "O"],
  ["_", "T", "B", "V", "_", "Y", "E", "S"],
  ["_", "_", "U", "_", "_", "E", "_", "T"],
  ["_", "S", "T", "I", "C", "K", "_", "_"]
]
_____



[Notes]

Words must be contained inside the grid, without wrapping over columns/rows.


[arrays] [language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

