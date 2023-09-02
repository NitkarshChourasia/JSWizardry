/*
####  Pairwise Swap  ####

Given an array of elements, swap the elements of the array pairwise. If the array is of odd length, first swap pairwise until the last element, and then the last element must be swapped with the element in the array which has the highest ASCII representation score in the modified array (e.g. ASCII representation of "Arun" would be: 65 + 114 + 117 + 110 = 406).
If two elements have the same ASCII representation, swap the last element of the odd length array with the element which is having the least index in the modified (the array in which pairwise swaps have been done until the second last element) array.
For example: if the array is [1, 2, 3, 4], we see it is having even length, so it becomes [2, 1, 4, 3].
If the array is [56, 123, 41, 321, 232] as it is an odd length array, first we swap it pairwise and the array becomes [123, 56, 321, 41, 232] and then 232 has the highest ASCII score, so we swap the last element with itself.


[Examples]

___
pairwiseSwap[1, 2, 3, 4] ➞ [2, 1, 4, 3]

pairwiseSwap[-8, "Arun", "Bob", 34.5, 12] ➞ [12, -8, 34.5, "Bob", "Arun"]

pairwiseSwap[56, 123, 41, 321, 232] ➞ [123, 56, 321, 41, 232]

pairwiseSwap["Nura", "Uam", "Ulgi", "Nurav", "Nayrus"] ➞ ["Uam", "Nura", "Nurav", "Ulgi", "Nayrus"]
_____



[Notes]

For -2, take ASCII representation as ascii_value_of(-) + ascii_value_of(2) and for 6.2 take ASCII representation as ascii_value_of(6) + ascii_value_of(.) + ascii_value_of(2).


[algorithms] [arrays] [data_structures] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

