/*
####  The ECG Sequence  ####

In the ECG Sequence (that always starts with the numbers 1 and 2), every number that succeeds is the smallest not already present in the sequence and that shares a factor (excluding 1) with its preceding number. Every number in the ECG Sequence (besides 1 and 2) has a different index from its natural index in a normal numeric sequence. See the example below to establish the ECG Sequence Index of number 3.
___
// Find the smallest number that is not in sequence...
// This number shares a factor with the preceding?

SEQUENCE = [1, 2]

3 = no factors shared with 2
4 = shares factor 2 with number 2

SEQUENCE = [1, 2, 4]

3 = no factors shared with 4
5 = no factors shared with 4
6 = shares factor 2 with number 4

SEQUENCE = [1, 2, 4, 6]

3 = shares factor 3 with number 6

SEQUENCE = [1, 2, 4, 6, 3]

Number 3 is at index 4 in the ECG Sequence.
_____

Given an integer n implement a function that returns its ECG Sequence Index.


[Examples]

___
ecgSeqIndex(3) ➞ 4

ecgSeqIndex(5) ➞ 9

ecgSeqIndex(7) ➞ 13
_____



[Notes]

___
*) ECG is the acronym for the electrocardiogram: if you try to graphically represent the trend of the sequence, a similar scheme appears.
*) Curiosity: every odd prime p in the sequence is preceded by 2p and followed by 3p.
___



[math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
EKG Sequence
http://mathworld.wolfram.com/EKGSequence.html
The integer sequence having 1 as its first term, 2 as its second, and with each succeeding term being the smallest number not already used that shares a factor with the …
_________

*/
//Your code should go here:

