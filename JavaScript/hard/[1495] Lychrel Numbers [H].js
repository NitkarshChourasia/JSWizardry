/*
####  Lychrel Numbers  ####

The following is the Lychrel test.
Start with any positive number. Add the number with the number formed by reversing its digits. Is the sum a palindrome? If not, repeat the process.
For most numbers, a palindrome is produced after a few iterations (7 or fewer) of the process above. Numbers that never reach a palindrome are called Lychrel numbers. No number in base 10 has been proven to be a Lychrel number, but numbers that don't produce palindromes after an unusually high number of iterations of the reverse-and-add process are said to be Lychrel candidates
Create a function that takes a number and returns true if it is a Lychrel candidate. If it isn't, return the number of reverse-and-add iterations it takes to produce a palindrome. For this challenge, the threshold for a Lychrel candidate is >=500 iterations.


[Examples]

___
lychrel(33) ➞ 0
// Already a palindrome.

lychrel(65) ➞ 1
// 65+56 -> 121

lychrel(348) ➞ 3
// 348+843 -> 1191+1911 -> 3102+2013 -> 5115

lychrel(295) ➞ true
_____



[Notes]

N/A


[algebra] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
_________
_________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place. The first array element becomes the last, and the last array element becomes the first
_________
_________
String.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString
Returns a string representing the specified object.
_________

*/
//Your code should go here:

