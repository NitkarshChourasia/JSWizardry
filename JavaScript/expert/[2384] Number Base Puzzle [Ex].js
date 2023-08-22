/*
####  Number Base Puzzle  ####

Consider this unremarkable array of integers: [525, 238, 401]. It does have one unusual trait⁠—every member of the array represents one common number but in a different number base. In this case, that common number is 197 (base 10).
___
*) 197 = 525 in base 6
*) 197 = 238 in base 9
*) 197 = 401 in base 7
___

Sometimes there is more than one possible common number. The list [10, 11, 100] has two possibilities for the common number, 4 (base 10) and 9 (base 10).
___
*) 4 = 10 (base 4)
*) 4 = 11 (base 3)
*) 4 = 100 (base 2)
*) 9 = 10 (base 9)
*) 9 = 11 (base 8)
*) 9 = 100 (base 3)
___

Devise a function that returns the common number(s) of an array, sorted in ascending order. Your answer will be the base 10 representation of the number(s). If there is no common number return an empty list. You should consider only number bases 2 through 10 inclusive.


[Examples]

___
puzzle([525, 238, 401]) ➞ [197]

puzzle([20, 10, 11, 12]) ➞ [6, 8, 10]

puzzle([5]) ➞ [5]

puzzle([145, 203, 321, 106]) ➞ []
_____



[Notes]

N/A


[math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Object.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
Returns a string representing the object.
_________

*/
//Your code should go here:

