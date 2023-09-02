/*
####  Popping Blocks  ####

When two blocks of the same "type" are adjacent to each other, the entire contiguous block disappears (pops off). If this occurs, this can allow previously separated blocks to be in contact with each other, setting off a chain reaction. This will continue until each block is surrounded by a different block.
Here's a demonstration:
___
["A", "B", "C", "C", "B", "D", "A"]
// The two adjacent Cs pop off

["A", "B", "B", "D", "A"]
// Two adjacent Bs pop off

["A", "D", "A"]
// No more blocks can be popped off
_____

Another demonstration:
___
["A", "B", "A", "A", "A", "B", "B"]
// The three adjacent As will pop off
// (before the two adjacent Bs)

["A", "B", "B", "B"]
// 3 adjacent Bs pop off

["A"]
// Final result
_____



[Examples]

___
finalResult(["B", "B", "A", "C", "A", "A", "C"]) ➞ ["A"]

finalResult(["B", "B", "C", "C", "A", "A", "A"]) ➞ []

finalResult(["C", "A", "C"]) ➞ ["C", "A", "C"]
_____



[Notes]

If the first round has multiple poppable blocks, pop starting from the left.


[arrays] [games] [loops] [regex] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________

*/
//Your code should go here:

