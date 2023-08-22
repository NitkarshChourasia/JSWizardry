/*
####  The Resistor Colors  ####

A resistor is a common electrical component found in every electronic circuit. Usually a resistor has a color-based code (as painted bands over it) to decipher through a table.

Starting from the left assign a number to each coloured band:
___
*) 4 bands resistor:
1st and 2nd color: digits from column 1.
3rd color: 10 elevated to the digit of column 2.
4th color: tolerance from column 3.
*) 5 bands resistor:
1st, 2nd and 3rd color: digits from column 1.
4th color: 10 elevated to the digit of column 2.
5th color: tolerance from column 3.
*) 6 bands resistor:
From 1st to 5th: as above.
6th color: coefficient from column 4.
___

Then, when numbers have replaced colors:
___
*) Resistance is equal to the number resulting by the union of digits from column 1 multiplied for the magnitude calculated from column 2: is measured in Ohms (symbol: Ω). When Ohms are in the thousands order the notation is kΩ (kiloOhms), in the millions order the notation is MΩ (MegaOhms), in the billions order the notation is GΩ (GigaOhms).
*) Tolerance and TCR (temperature coefficient of resistance, only for 6-banded resistors) are the results of columns 3 and 4.
___

Given an array of colors you must return the resistor resistance, tolerance and (eventually) the TCR as a string (with identifiers separated by spaces between them).


[Examples]

___
resistorCode(["red", "yellow", "blue", "green"]) ➞ "24MΩ ±0.5%"
// red + yellow = 24; blue = 10^6, green = ±0.5%
// resistance * magnitude = 24000000 (24M)

resistorCode(["white", "black", "white", "blue", "gold"]) ➞ "909MΩ ±5%"
// white + black + white = 909

resistorCode(["black", "white", "black", "orange", "red", "yellow"]) ➞ "90kΩ ±2% 25ppm/k"
// black + white + black = 090 = 90; orange = 10^3
// resistance * magnitude = 90000 (90k)
_____



[Notes]

___
*) For more info about resistors and their color codes check the Resources tab.
*) All given arrays are valid, no exceptions to handle.
___



[conditions] [formatting] 



-------------------------------------------------------------------
[Resources]
_________
Resistor Color Code
https://www.physics-and-radio-electronics.com/electronic-devices-and-circuits/passive-components/resistors/resistorcolorcode.html
Resistors are the passive components used in the electrical circuits to reduce the flow of electric current to certain level. The ability to restrict the flow of electr …
_________

*/
//Your code should go here:

