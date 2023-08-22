/*
####  Sorting in R: Order (Part I)  ####

R, a programming language used for Statistics and Data Analysis, has the function order, which returns a list with the indices needed to sort the original vector(∗).
For example:
___
my_arr = [1, 3, 3, 9, 8]
// Ordered would be: [0, 1, 2, 4, 3]
_____

In plain words, order tells you what elements to look at in your original vector to sort it. The list my_arr[0] + my_arr[1] + my_arr[2] + my_arr[4] + my_arr[3] is equivalent to sorted(my_arr).
If two or more elements have the same order, their original order is preserved. Here, [0, 1, 2, 4, 3] and [0, 2, 1, 4, 3] would both sort the vector, but only the first one preserves the original order for the two 3s.
Implement the function order() so that it works the same way it does in R.


[Examples]

___
order([9, 1, 4, 5, 4]) ➞ [1, 2, 4, 3, 0]

order(["z", "c", "f", "b", "c"]) ➞ [3, 1, 4, 2, 0]

order(["order", "my", "words"]) ➞ [1, 0, 2]
_____



[Notes]

___
*) Expect numbers and lower-case alphabetic characters only.
*) Find Part II: Rank here.
*) Vectors in R are similar to a list. Although vectors in R are 1-indexed, your function should be 0-indexed. Other differences between vectors and lists will be ignored for the scope of this challenge.
*) If you implement your own algorithm, it must be stable, meaning that the order of identical elements doesn't get switched around.
___



[arrays] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________

*/
//Your code should go here:

