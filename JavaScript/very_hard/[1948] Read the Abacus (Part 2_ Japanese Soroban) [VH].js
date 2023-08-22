/*
####  Read the Abacus (Part 2: Japanese Soroban)  ####

The Japanese soroban is type of abacus (counting tool) that is used by sliding threaded beads up and down wires. The soroban is divided into an upper deck (where each bead is worth 5 units) and a lower deck (where beads are worth 1 unit). Working from the right and moving to the left, units increase by a factor of 10. If we use "O" for a bead and "|" to show the wire, we can represent the soroban as follows:
___
OOOOOOO
|||||||  Upper deck
-------  Dividing line
|||||||  Lower deck
OOOOOOO
OOOOOOO
OOOOOOO
OOOOOOO
_____

To read the number, we count the value of the number of beads that have been moved towards the dividing line. The values for the upper and lower deck are added together. In the example below, the number is 30651:
___
OOOO||O
||||OO|
-------
||O|O|O
OOOO|O|
OOOOOOO
OO|OOOO
OOOOOOO

0000550  Upper deck
0030101  Lower deck
  30651  Total
_____

Given an array of strings representing the soroban, return the number being displayed.


[Examples]

___
soroban([
  "OOOO||O",
  "||||OO|",
  "-------",
  "|||O|OO",
  "OOOOOOO",
  "OOO|OOO",
  "OOOOO|O",
  "OOOOOO|"
]) ➞ 2584

soroban([
  "||OO||O",
  "OO||OO|",
  "-------",
  "OO|OO||",
  "OOO|OOO",
  "OOOO|OO",
  "|OOOOOO",
  "O|OOOOO"
]) ➞ 8901750
_____



[Notes]

For more info on how to use a soroban, please check the Resources tab.


[arrays] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
The Soroban
https://en.wikipedia.org/wiki/Soroban
The soroban is an abacus developed in Japan. It is derived from the ancient Chinese suanpan, imported to Japan in the 14th century.[1][nb 1] Like the suanpan, the sorob …
_________
_________
The Abacus
https://en.wikipedia.org/wiki/Abacus
The abacus is a calculating tool that was in use in Europe, China and Russia, centuries before the adoption of the written Hindu–Arabic numeral system.[1] The exact ori …
_________

*/
//Your code should go here:

