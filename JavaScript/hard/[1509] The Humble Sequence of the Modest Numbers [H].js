/*
####  The Humble Sequence of the Modest Numbers  ####

In this challenge, you have to establish if a positive integer is a Modest number, accordingly to the following algorithm:
___
*) Divide the number into two left and right partitions.
*) For each combination of left and right parts, you have to check if a condition is true: the remainder of the number divided by the right part is equal to the left part.
*) If at least a combination of two parts satisfies the above condition, the number is Modest, otherwise, it's not.
___

Given an integer num, implement a function that returns true if num is a Modest number, or false if it's not.


[Example #1]

___
isModest(2036) ➞ true

Combination 1:
Left = 2 | Right = 036 = 36 (Leading zeros are not considered)
Number (2036) % Right (36) =  20 != Left (2)

Combination 2:
Left = 20 | Right = 36
Number (2036) % Right (36) = 20 = Left (20)

// At least a combination satisfies the condition
// It's a Modest number
_____



[Example #2]

___
isModest(3412) ➞ false

Combination 1:
Left = 3 | Right = 412
3412 % 412 = 116 != Left

Combination 2:
Left = 34 | Right = 12
3412 % 12 = 4 != Left

Combination 3:
Left = 341 | Right = 2
3412 % 2 = 0 != Left

// It's not a Modest number
// Notice how left and right parts are made:
// They are not permutations or combinations...
// ...but partitions of consecutive digits.
_____



[Example #3]

___
isModest(21333) ➞ true

Combination 1:
Left = 2 | Right = 1333
21333 % 1333 = 5 != Left

Combination 2:
Left = 21 | Right = 333
21333 % 333 = 21 = Left

// At least a combination satisfies the condition
// It's a Modest number
_____



[Example #4]

___
isModest(8) ➞ false
// An integer with less than two digits can't be partitioned.
_____



[Notes]

___
*) In the right part, leading zeros are not considered (see example #1).
*) Remember to not confuse partitions with permutations or combinations. In the Instructions, "combination" is related to a combination of the left and the right part containing consecutive digits (see example #2, where is reported each combination of possible partitions).
*) Trivially, every positive integer lower than 10 can't be partitioned into two parts and it's not a Modest number (see example #4).
___



[algorithms] [loops] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
_________
_________
A054986 - OEIS
https://oeis.org/A054986
A number is modest if there exists at least one partitioning of its decimal expansion wherein the number divided by the second part leaves a remainder of the first part.
_________

*/
//Your code should go here:

