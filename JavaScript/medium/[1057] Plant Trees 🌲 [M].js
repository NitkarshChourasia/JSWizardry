/*
####  Plant Trees 🌲  ####

Mubashir needs your help to plant some trees. He can give you three parameters of the land:
___
*) width of the land w
*) length of the land l
*) gap between the trees g
___

You have to create an algorithm to return the number of trees which can be planted on the edges of the given land in a symmetrical layout shown below (unsymmetrical gap = x, tree = o, gap = -):
___
w=3, l=3, g=1
plantTrees(w, l, g) ➞ 4

o - o
-   -
o - o

// Mubashir can plant 4 trees.
_____

___
w=3, l=3, g=3
plantTrees(w, l, g) ➞ 2

o - -
-   -
- - o

// Mubashir can plant 2 trees.
_____

If the layout is not symmetrical, you have to return 0:
___
w=3, l=3, g=2
plantTrees(w, l, g) ➞ 0

o - -
x   o
x x x

// Planting 2 trees mean the gap of two trees will be greater than 2.

o - -
x   o
o - -

// Planting 3 trees mean the gap of two trees will be less than 2.
_____

Another Example for better understanding:
___
w=3, l=3, g=0
plantTrees(w, l, g) ➞ 8

o o o
o   o
o o o

// Mubashir can plant 8 trees.
_____



[Notes]

N/A


[algorithms] [interview] [logic] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Arithmetic Operators
https://www.w3schools.com/js/js_operators.asp
Used to perform arithmetic on numbers.
_________

*/
//Your code should go here:

