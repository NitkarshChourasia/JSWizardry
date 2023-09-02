/*
####  Natural Emptiness  ####

In abstract set theory, a construction due to von Neumann represents the natural numbers by sets, as follows:
___
*) 0 = [ ] is the empty set
*) 1 = 0 ∪ [ 0 ] = [ 0 ] = [ [ ] ]
*) 2 = 1 ∪ [ 1 ] = [ 0, 1 ] = [ [ ], [ [ ] ] ]
*) n = n−1 ∪ [ n−1 ] = ...
___

Write a function that receives an integer n and produces the representing set.


[Examples]

___
repSet(0) ➞ []

repSet(1) ➞ [[]]

repSet(2) ➞ [[], [[]]]

repSet(3) ➞ [[], [[]], [[], [[ ]]]]
_____



[Notes]

___
*) Make sure to use array brackets [,].
*) A neat feature of this representation is that n < m precisely if the set representing n is contained in the set representing m.
___



[arrays] [math] [numbers] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Arrays
https://www.w3schools.com/js/js_arrays.asp
Are used to store multiple values in a single variable.
_________
_________
Natural Number
https://en.wikipedia.org/wiki/Natural_number#Constructions_based_on_set_theory
Are those used for counting (as in "there are six coins on the table") and ordering (as in "this is the third largest city in the country"). In common mathematical term …
_________

*/
//Your code should go here:

