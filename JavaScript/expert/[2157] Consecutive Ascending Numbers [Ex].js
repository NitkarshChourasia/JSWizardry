/*
####  Consecutive Ascending Numbers  ####

Write a function that will return true if a given string (divided and grouped into a size) will contain a set of consecutive ascending numbers, otherwise, return false.


[Examples]

___
ascending("123124125") ➞ true
// Contains a set of consecutive ascending numbers
// if grouped into 3's : 123, 124, 125

ascending("101112131415") ➞ true
// Contains a set of consecutive ascending numbers
// if grouped into 2's : 10, 11, 12, 13, 14, 15

ascending("32332432536") ➞ false
// Regardless of the grouping size, the numbers can't be consecutive.

ascending("326325324323") ➞ false
// Though the numbers (if grouped into 3's) are consecutive but descending.

ascending("666667") ➞ true
// Consecutive numbers: 666 and 667.
_____



[Notes]

___
*) A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
*) A recursive version of this challenge can be found via this link.
___



[arrays] [sorting] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Split Large String In N-Size Chunks
https://stackoverflow.com/questions/7033639/split-large-string-in-n-size-chunks-in-javascript
I would like to split a very large string (let's say, 10,000 characters) into N-size chunks. What would be the best way in terms of performance to do this? For instan …
_________

*/
//Your code should go here:

