/*
####  Shifting Letters Cypher  ####

The function is given three parameters:
___
*) "alphabet" a string of 26 lower-case letter,
*) "s" a string of lower-case letters to be encoded,
*) shifts a list of integers of the same length as "s".
___

To encode the string one has to perform n rounds (the length of "s"):
___
*) First round – shift first letter s[0] by shifts[0] amount according to the "alphabet". The shift is circular, i.e. for ordinary alphabet and shift == 1 "z" -> "a" is applied.
*) Second round – shift two first letters new s[0], s[1] by shifts[1] amount.
*) Third round – shift three first letters new, new s[0], new s[1], s[2] by shifts[2] amount.
*) Continue shifting increasing amount of letters.
*) Last n-th round – shift all letters by shift[n-1] amount according to the "alphabet".
___

Return the encoded string of the same length as s.


[Examples]

___
shiftChars("abcdefghijklmnopqrstuvwxyz", "abc", [1, 1, 1]) ➞ "ddd"
// a is shifted by 3 to d
// b is shifted by 2 to d
// c is shifted by 1 to d

shiftChars("adbecfghijklmnopqrstuvwxyz", "abc", [1, 1, 1]) ➞ "ecf"
// a is shifted by 3 to e
// b is shifted by 2 to c
// c is shifted by 1 to f

shiftChars("abcdefghijklmnopqrstuvwxyz", "yywygs", [1, 1, 1, 1, 1, 1]) ➞ "edabit"
// y is shifted by 6 to e. Notice circular shift.
// y is shifted by 5 to d. Notice circular shift.
// w is shifted by 4 to a. Notice circular shift.
// y is shifted by 3 to b. Notice circular shift.
// g is shifted by 2 to i
// s is shifted by 1 to t

shiftChars('vortlxngidwmpzakebhcsjufqy', 'dmhmv', [5, 2, 3, 4, 1]) ➞ "qjveo"
// d is shifted by 15 to q
// m is shifted by 10 to j
// h is shifted by 8 to v. Notice circular shift.
// m is shifted by 5 to e
// v is shifted by 1 to o
_____



[Notes]

N/A


[algorithms] [cryptography] [logic] [strings] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

