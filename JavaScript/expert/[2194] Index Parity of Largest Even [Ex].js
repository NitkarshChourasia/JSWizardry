/*
####  Index Parity of Largest Even  ####

Write a function that returns the largest even integer in an array with its corresponding index and the parity of that index, but determining the parity of that index is limited to not using the modulo operator %.


[Output Structure]

You have to return an Object.
___
{"@odd|even index " + index_of_largest: largest_integer}
_____



[Examples]

___
bitwiseIndex([107, 19, 36, -18, -78, 24, 97]) ➞ {"@even index 2": 36}

bitwiseIndex([31, 7, 2, 13, 7, 9, 10, 13]) ➞ {"@even index 6": 10}

bitwiseIndex([4, 4, 4, 4, 4, 4]) ➞ {"@even index 0": 4}

bitwiseIndex([-31, -7, -13, -7, -9, -13]) ➞ "No even integer found!"
_____



[Notes]

___
*) The use of indexOf() and max() are restricted.
*) If there are no even integers, return "No even integer found!".
*) The set of limitations imposed on this challenge dictates the level of difficulty.
*) Another version of this challenge that deals with recursion can be found here.
___



[arrays] [bit_operations] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Bitwise AND (&)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND
Returns a 1 in each bit position for which the corresponding bits of both operands are 1s.
_________
_________
max() Method
https://www.w3schools.com/jsref/jsref_max.asp
Returns the number with the highest value. Tip: The min() method returns the number with the lowest value.
_________

*/
//Your code should go here:

