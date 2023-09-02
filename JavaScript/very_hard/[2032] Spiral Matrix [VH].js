/*
####  Spiral Matrix  ####

In this challenge, transform a string into a spiral contained inside a regular square matrix. To build the matrix, you are given the dimension of its side:
___
*) If the side of the matrix is odd, the spiral starting point will be the exact center of the matrix.
*) If the side of the matrix is even, the spiral starting point will be placed in the lower columns half of the lower rows half.
___

___
// "x" represents the matrix center

side = 3 (odd)
matrix = [
  [" ", " ", " "],
  [" ", "x", " "],
  [" ", " ", " "]
]

side = 4 (even)
matrix = [
  [" ", " ", " ", " "],
  [" ", "x", " ", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", " "],
]
_____

The length of the string has to match exactly the number of cells inside the matrix:
___
*) If the string length is greater than the number of cells, you have to cut off the unnecessary characters.
*) If the string length is lower than the number of cells, you have to add a series of "+" to the end of the string until its length match the number of cells.
___

___
side = 3 (9 cells)
string = "EDABITTEROUS"
// You'll need only "EDABITTER", while "OUS" is discarded.
string = "EDABITTER"

side = 4 (16 cells)
string = "EDABITTEROUS"
// You'll need all the string plus 4 "+" to match the cells.
string = "EDABITTEROUS++++"
_____

Starting from the center that you found, you have to fill a regular square matrix side * side placing the characters of the given string str, following a clockwise spiral pattern (first move to the right).
___
side = 3 (odd)
string = "EDABITTEROUS"
matrix = [
  ["T", "E", "R"],
  ["T", "E", "D"],
  ["I", "B", "A"]
]

side = 4 (even)
string = "EDABITTEROUS"
matrix = [
  ["T", "E", "R", "O"],
  ["T", "E", "D", "U"],
  ["I", "B", "A", "S"],
  ["+", "+", "+", "+"],
]
_____



[Examples]

___
spiralMatrix(2, "DOG") ➞ [
  ["D", "O"],
  ["+", "G"]
]

spiralMatrix(3, "COPYRIGHTS") ➞ [
  ["G", "H", "T"],
  ["I", "C", "O"],
  ["R", "Y", "P"]
]

spiralMatrix(4, "SUPERLUMBERJACK") ➞ [
  ["U", "M", "B", "E"],
  ["L", "S", "U", "R"],
  ["R", "E", "P", "J"],
  ["+", "K", "C", "A"]
]
_____



[Notes]

___
*) Remember, the first move from the center is to the right, and then you proceed clockwise and concentrically.
*) As given side, you can expect any valid value greater than 1.
___



[arrays] [strings] 



-------------------------------------------------------------------
[Resources]
_________
JavaScript if, else, and else if
https://www.w3schools.com/js/js_if_else.asp
Very often when you write code, you want to perform different actions for different decisions. You can use conditional statements in your code to do this. In JavaScri …
_________

*/
//Your code should go here:

