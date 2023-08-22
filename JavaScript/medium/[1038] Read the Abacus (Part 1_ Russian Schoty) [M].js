/*
####  Read the Abacus (Part 1: Russian Schoty)  ####

The Russian schoty is type of abacus (counting tool) that is used by sliding threaded beads along horizontal wires. An example schoty would have 7 wires, each holding 10 beads. Each bead, when moved to the left, would count as 1 unit. Starting from the bottom wire and moving up, the units increase by a factor of 10. If we use "O" for a bead and "-" to show the wire, we can represent the schoty as follows:
___
---OOOOOOOOOO  millions
---OOOOOOOOOO  hundred-thousands
---OOOOOOOOOO  ten-thousands
---OOOOOOOOOO  thousands
---OOOOOOOOOO  hundreds
---OOOOOOOOOO  tens 
---OOOOOOOOOO  ones
_____

To read the number, we count the beads on the left-hand side of each wire. In the example below, the number is 501264:
___
---OOOOOOOOOO  0
OOOOO---OOOOO  5
---OOOOOOOOOO  0
O---OOOOOOOOO  1
OO---OOOOOOOO  2
OOOOOO---OOOO  6
OOOO---OOOOOO  4
_____

Given an array of strings representing each wire in the schoty, return the number being displayed.


[Examples]

___
schoty([
  "---OOOOOOOOOO",
  "---OOOOOOOOOO",
  "---OOOOOOOOOO",
  "OOO---OOOOOOO",
  "O---OOOOOOOOO",
  "OOOOOOOOO---O",
  "OO---OOOOOOOO"
]) ➞ 3192

schoty([
  "OO---OOOOOOOO",
  "O---OOOOOOOOO",
  "OOOOO---OOOOO",
  "---OOOOOOOOOO",
  "---OOOOOOOOOO",
  "---OOOOOOOOOO",
  "---OOOOOOOOOO"
]) ➞ 2150000
_____



[Notes]

For more info on how to use a schoty, please check the Resources tab. This challenge ignores the traditional 4-bead wires used for quarter-ruble and quarter-kopek calculations.


[arrays] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
The Abacus
https://en.wikipedia.org/wiki/Abacus
The abacus is a calculating tool that was in use in Europe, China and Russia, centuries before the adoption of the written Hindu–Arabic numeral system.[1] The exact ori …
_________

*/
//Your code should go here:

