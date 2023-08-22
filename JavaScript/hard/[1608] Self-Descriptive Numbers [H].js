/*
####  Self-Descriptive Numbers  ####

The number 10213223 is self-descriptive. Count the number of zeros, ones, twos, and threes that are contained in this number and you have 1 zero, 2 ones, 3 twos, 2 threes, but that is a replica of the number itself 10|21|32|23.
Write a function that returns true if its argument is a self-descriptive number, false if not.


[Examples]

___
selfDescriptive(22) ➞ true

selfDescriptive(3999) ➞ false

selfDescriptive(31331419) ➞ true

selfDescriptive(21321316) ➞ false

selfDescriptive(4132232416171) ➞ false

selfDescriptive(31331819) ➞ true
_____



[Notes]

___
*) Since the number's descriptors are always in pairs, any self-descriptive number must have an even number of digits.
*) The largest self-descriptive number possible is reportedly 71322723161814151019 (see Resources tab).
___



[loops] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Self-Descriptive Numbers
https://www.primepuzzles.net/puzzles/puzz_324.htm
Must have an even quantity of digits because the first digit act as a quantifier of his right-neighbor, the third one act as as a quantifier of his right-neighbor, and …
_________

*/
//Your code should go here:

