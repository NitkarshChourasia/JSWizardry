/*
####  Let the Dominoes Fall Down  ####

The function is given a string consisting of a mix of three characters representing which direction a domino is tilted:
___
*) "R" tilted to the right
*) "L" tilted to the left
*) "I" standing up, not tilted
___

The string represents the initial state of the assembly. After a time click the overall state can change. The tilted dominoes tend to tilt their standing-up neighbors. The propagation speed is the same for left and right. The following rules are applied:
___
*) "RI" will change to "RR" unless "I" is being pushed from two opposite direction at the same time.
*) "IL" will change to "LL" unless "I" is being pushed from two opposite direction at the same time.
*) "RIL" will stay unchanged because "I" is being pushed from two opposite direction at the same time.
*) "RIIL" will change to "RRLL" after one click.
*) "RR", "LL" "RL" will stay unchanged.
*) Some "I"s at the ends of the string may stay unaffected if no push came to them.
___

Determine the final state of the assembly after all propagations have been exhausted and return it as a string (of the same length).


[Examples]

___
dominoesFall("") ➞ ""
// No dominoes in the assembly.

dominoesFall("RIIII") ➞ "RRRRR"
// Propagation starts on the left causing all others to tilt right.

dominoesFall("IIIIL") ➞ "LLLLL"
// Propagation starts on the right causing all others to tilt left.

dominoesFall("RIIIL") ➞ "RRILL"
// After one click second and fourth tilt and then the middle one is pushed by two opposing forces.

dominoesFall("IRIIL") ➞ "IRRLL"
// The first one has not received any push.

dominoesFall("IRRIL") ➞ "IRRIL"
// The assembly is already in the final stage. No propagation was launched.
_____



[Notes]

Keep in mind that the state changes time click after time click.


[algorithms] [logic] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.substr()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
Returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
_________
_________
Array.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
_________

*/
//Your code should go here:

