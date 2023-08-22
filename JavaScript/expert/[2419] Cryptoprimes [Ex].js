/*
####  Cryptoprimes  ####

In this challenge, you are given an array of strings composed of the letters a-j. This array is special because it is an array of consecutive prime numbers which have been treated to a simple substitution cipher. Each of the numbers (0-9) have been substituted by one of the letters a-j. The substitution scheme is the same for all members of the array.
Your task is to develop a function that recovers the unencrypted array of primes.


[Examples]

___
cryptoprimes(["b", "c", "a", "i"]) ➞ [2, 3, 5, 7]

cryptoprimes(["bb", "bi", "bg", "bc"]) ➞ [11, 13, 17, 19]

cryptoprimes(["fgf", "fgb", "fgi", "fgd", "ffb"]) ➞ [101, 103, 107, 109, 113]

cryptoprimes(["ebhi", "ebhf", "ecaf", "ecjf", "ecjb"]) ➞ [6791, 6793, 6803, 6823, 6827]
_____



[Notes]

___
*) There is only one possible solution for each of the test cases.
*) The cipher scheme is different for each of the test cases.
___



[cryptography] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Prime Numbers
https://en.wikipedia.org/wiki/Prime_number#:~:text=The%20first%2025%20prime%20numbers,sequence%20A000040%20in%20the%20OEIS).&text=as%20the%20product-,.,is%20called%20an%20odd%20prime.
The first 25 prime numbers (all the prime numbers less than 100) are:[8] 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 …
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
Set and Set.Size()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________

*/
//Your code should go here:

