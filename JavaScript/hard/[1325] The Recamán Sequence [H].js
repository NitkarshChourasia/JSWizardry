/*
####  The Recamán Sequence  ####

The Recamán Sequence is a numeric sequence that starts always with 0. The position of a positive integer in the sequence, or Recamán Index, can be established with the following algorithm:
___
*) For every number to find, two variables are considered: the value of the last element of the sequence (last element from now on), and the actual sequence length (length from now on).
*) If the subtraction of the length from the last element returns a number greater than 0 and not already present in the sequence, it is added to the sequence.
*) When the conditions of the above statement are not met, will be added always the sum of the last element plus the length (even if it is a number already present in the sequence).
*) Repeat until the number of interest is found.
___

Look at example below for the steps to do for to establish the Recamán Index of number 2:
___
Sequence = [0]

Last - Length = 0 - 1 = -1 (lower than zero)
Last + Length = 0 + 1 = 1

Sequence = [0, 1]

Last - Length = 1 - 2 = -1 (lower than 0)
Last + Length = 1 + 2 = 3

Sequence = [0, 1, 3]

Last - Length = 3 - 3 = 0 (already present in sequence)
Last + Length = 3 + 3 = 6

Sequence = [0, 1, 3, 6]

Last - Length = 6 - 4 = 2 (greater than 0 and not already in sequence)

Sequence = [0, 1, 3, 6, 2]

// The Recaman Index of 2 is: 4
_____

Given a positive integer n, implement a function that returns its Recamán Index.


[Examples]

___
recamanIndex(2) ➞ 4

recamanIndex(3) ➞ 2

recamanIndex(7) ➞ 5
_____



[Notes]

___
*) The sequence starts always with 0.
*) The step with the subtraction Last Element - Sequence Length (verifying that is not already present in the sequence) has the precedence over the second step.
*) Remember: if the number to add is the result of a subtraction it can't be already in the sequence (first step), if it is the result of an addition it can be already present (second step).
*) Curiosity: the first number to repeat in the sequence is 42...
*) Curiosity: the first number with a BIG delay in the sequence is 19.
___



[algorithms] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Recamán's Sequence
http://oeis.org/wiki/Recam%C3%A1n%27s_sequence
N. J. A. Sloane named this sequence “Recamán’s sequence” after Bernardo Recamán and originally conjectured that this sequence includes every nonnegative integer at leas …
_________
_________
The Recamán Sequence
https://mathlesstraveled.com/2016/06/12/the-recaman-sequence/
I recently learned about a really interesting sequence of integers, called the Recamán sequence (it’s sequence A005132 in the Online Encyclopedia of Integer Sequences). …
_________
_________
Loops and Iteration
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
Loops offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________

*/
//Your code should go here:

