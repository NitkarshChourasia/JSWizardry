/*
####  Crack the Pin Code  ####

Given a keypad that has the following layout:
___
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
_____

Your secret agent Mubashir has already given you a pincode. However, he also said it's possible that each of the digits he saw could be another adjacent digit (horizontally or vertically, but not diagonally).
Suppose the secret agent has given you the code: 46:
___
// Instead of the 4 it could also be 1, 5, or 7.
// Instead of the 6 it could also be 3, 5, or 9.

crackPincode("46") ➞
["13","15","16","19","43","45","46","49","53","55","56","59","73","75","76","79"]
_____

Create a function that takes an argument of pincode informed by your secret agent and returns an array of all possible variations of the pin codes.


[Examples]

___
crackPincode("0") ➞ ["0", "8"]

crackPincode("2") ➞ ["1", "2", "3", "5"]

crackPincode("007") ➞ ["004","007","008","084","087","088","804","807","808","884","887","888"]
_____



[Notes]

All pin codes must be strings, because of potentially leading 0s.


[algorithms] [games] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.charAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________

*/
//Your code should go here:

