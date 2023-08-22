/*
####  Combinatorial Exploration  ####

Given a known number of unique items, how many ways could we arrange them in a row?
Create a function that takes an integer n and returns the number of digits of the number of possible permutations for n unique items. For instance, 5 unique items could be arranged in 120 unique ways. 120 has 3 digits, hence the integer 3 is returned.


[Examples]

___
noPermsDigits(0) ➞ 1

noPermsDigits(1) ➞ 1

noPermsDigits(5) ➞ 3

noPermsDigits(8) ➞ 5
_____



[Notes]

This challenge requires some understanding of combinatorics.


[higher_order_functions] [math] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Combinatorics
https://en.wikipedia.org/wiki/Combinatorics
Is an area of mathematics primarily concerned with counting, both as a means and an end in obtaining results, and certain properties of finite structures. It is closely …
_________
_________
Combinatorial Explosion
https://en.wikipedia.org/wiki/Combinatorial_explosion
Is the rapid growth of the complexity of a problem due to how the combinatorics of the problem is affected by the input, constraints, and bounds of the problem. Combina …
_________
_________
BigInt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
Is a built-in object that provides a way to represent whole numbers larger than 253 - 1, which is the largest number JavaScript can reliably represent with the Number p …
_________
_________
Combinations and Permutations
https://www.mathsisfun.com/combinatorics/combinations-permutations.html
"My fruit salad is a combination of apples, grapes and bananas" We don't care what order the fruits are in, they could also be "bananas, grapes and apples" or "grapes, …
_________

*/
//Your code should go here:

