/*
####  Super-d Numbers  ####

A number n becomes a super-d number when, for any digit d from 2 up to 9, the result of d * nᵈ contains d consecutive digits equal to d.
Given a positive integer n, implement a function that returns:
___
*) "Super-d Number" if n is a super-d number, replacing the letterd with the digit (any from 2 up to 9) that makes it super;
*) "Normal Number" if n is not a super-d number.
___



[Examples]

___
isSuperD(19) ➞ "Super-2 Number"
// when d = 2
// 2 * 19² = 722
// There are two (d) consecutives digits equal to 2 (d)

isSuperD(753) ➞ "Super-3 Number"
// when d = 3
// 3 * 753³ = 1280873331
// There are three (d) consecutives digits equal to 3 (d)

isSuperD(1168) ➞ "Super-4 Number"
// when d = 4
// 4 * 1168⁴ = 7444428488704
// There are four (d) consecutives digits equal to 4 (d)

isSuperD(24) ➞ "Normal Number"
// No cases where d * 24ᵈ (with d being any digit from 2 up to 9)...
// ...leads to a result containing d consecutive digits equal to d
_____



[Notes]

___
*) Any given n will be a positive integer greater or equal to 0.
___



[algorithms] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Super-d Number
http://mathworld.wolfram.com/Super-dNumber.html
An integer such that contains three consecutive 3s in its decimal representation is called a super-3 number. The first few super-3 numbers are 261, 462, 471, 481, 558 …
_________
_________
BigInt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
A built-in object that provides a way to represent whole numbers larger than 253 - 1, which is the largest number JavaScript can reliably represent with the Number prim …
_________

*/
//Your code should go here:

