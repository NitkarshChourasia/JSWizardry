/*
####  Crypto Wars: Missing Number  ####

Our fleet managed to get one of the enemy's top-secret codes from the remains of its fallen ship. The codes were immediately sent over to our code-breaking base over at Bleckley Park ;) for analysis. The team found that each code contains 25 numbers with one missing. The missing number corresponds to a letter in the English alphabet. Your job is to find a more efficient Method of decrypting the messages by digitizing the process.
Write a function that takes an array, detects the missing number (in the array), and returns its corresponding letter.


[Examples]

___
decrypt([19, 12, 14, 21, 22, 3, 11, 20, 9, 16, 24, 17, 2, 10, 13, 18, 7, 8, 4, 5, 1, 6, 25, 23, 26]) ➞ "O"
// The missing number is 15.

decrypt([24, 12, 2, ..., 25]) ➞ "N"
// The missing number is 14.

decrypt([24, 12, 2, ..., 25]) ➞ "P"
// The missing number is 16.
_____



[Notes]

___
*) The array will only contain positive integers from 1 to 26 with one missing.
*) There will be no duplicate numbers.
*) Return the capital letter.
___



[arrays] [cryptography] [logic] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Returns the value of the first element in the provided array that satisfies the provided testing function.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
How could I convert a letter to its corresponding number in JavaScript?
https://stackoverflow.com/questions/22624379/how-to-convert-letters-to-numbers-with-javascript
I found this question on converting numbers to letters beyond the 26 character alphabet, but it is asking for the opposite. Is there a way to do this without a huge ar …
_________
_________
Find Missing Numbers in a Sequence
https://stackoverflow.com/questions/7317993/arrays-find-missing-numbers-in-a-sequence
I'm trying to find an easy way to loop (iterate) over an array to find all the missing numbers in a sequence, the array will look a bit like the one below.
_________

*/
//Your code should go here:

