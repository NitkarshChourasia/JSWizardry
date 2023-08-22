/*
####  A Lonely Class for Lonely Numbers  ####

In this challenge, build a support class Lonely to find the last Lonely number inside a sequence. A number is Lonely if the distance from its closest Prime sets a new record of the sequence.
___
Sequence = from 0 up 3

// Any number lower than 3 doesn't have a Prime preceeding it...
// ...so that you'll consider only its next closest Prime.

0 has distance 2 from its closest Prime (2)
// It's a new record! 0 It's the first lonely number of the sequence
1 has distance 1 from its closest Prime (2)
2 has distance 1 from 3
3 has distance 1 from 2

// The sequence 0 to 3  has only one Lonely number: 0
_____

___
Sequence = Numbers from 5 up 10

5 has distance 2 from its closest Prime (3 or 7)
// It's a new record! 5 It's the first lonely number of the sequence
6 has distance 1 from 5 or 7
7 has distance 2 from 5
8 has distance 1 from 7
9 has distance 2 from 7 or 11
10 has distance 1 from 11

// The sequence 5 to 10  has only one Lonely number: 5
_____

___
Sequence = Numbers from 19 up 24

19 has distance 2 from its closest Prime (17)
// It's a new record! 19 It's the first lonely number of the sequence
20 has distance 1 from 19
21 has distance 2 from 5
22 has distance 1 from 23
23 has distance 4 from 19 
// It's a new record! 23 is the second lonely number of the sequence
24 has distance 1 from 23

// The sequence 19 to 24  has two Lonely numbers: 19 and 23
_____

The class Lonely must have a static method record() that accepts two integers lo and hi being the inclusive bounds of the sequence to analyze, and returns an object literal with the following keys:
___
*) number: is the last Lonely number found in the given sequence;
*) distance: is the distance of the number from its closest Prime;
*) closest: is the Prime closest to number (if two Primes equally distant from number are found, return the higher Prime).
___



[Examples]

___
Lonely.record(0, 22) ➞ {
  number: 0, distance: 2, closest: 2
}

Lonely.record(8, 123) ➞ {
  number: 53, distance: 6, closest: 59
}

Lonely.record(938, 1190) ➞ {
  number: 1140, distance: 11, closest: 1151
}

Lonely.record(120, 1190) ➞ {
  number: 211, distance: 12, closest: 223
}
_____



[Notes]

___
*) The numbers 0, 1 and 2 have no previous Prime to check, so that you'll consider only the next Prime to set the distance, as in Example #1.
*) Remember that you are searching for the closest Prime when establishing if the distance is a record: 7 has a distance equal to 2 because its closest Prime is 5.
*) If a Lonely number is equally distant from two Primes, you have to return the higher Prime, as in Example #2 (53 has distance 6 from either 47 and 59).
*) The first Lonely number of a sequence is (trivially) always equal to the sequence lower bound.
*) You can expect valid non-negative integers as input, without exceptions to handle.
___



[classes] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Lonely Numbers
http://www.numbersaplenty.com/set/lonely_number/
A number n is called lonely if its distance to closest prime sets a new record. For example, 0 is the first lonely number and has distance 2 from the first prime. The s …
_________
_________
Number Prime Test in JavaScript
https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript
I'm trying to complete the codewars challenge that asks you to check if a number is a prime number. For whatever reason, my solution doesn't seem to work for the square …
_________

*/
//Your code should go here:

