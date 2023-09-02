/*
####  Zygodromes  ####

A number is Zygodrome if it can be partitioned into clusters of repeating digits with a length equals or greater than two (as to say that repeating digits need to be placed as an adjacent pair or a greater group, and that no single digits are allowed).
Given a non-negative integer num, implement a function that returns true if num is a Zygodrome number, or false otherwise.


[Examples]

___
isZygodrome(11) ➞ true
// 11 is a pair of repeated digits

isZygodrome(33322) ➞ true
// 333 is a triplet of repeated digits, and 22 is a pair

isZygodrome(5) ➞ false
// 5 is a single digit, it doesn't form a pair

isZygodrome(1001) ➞ false
// 00 is a pair, but the two 1's are not adjacent
_____



[Notes]

___
*) Trivia: the number 9997777 is the only known Zygodrome prime whose index in the Zygodromes sequence (664444) is a prime in turn.
*) You can expect only non-negative integers as given input, without exceptions to handle.
___



[numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Regex to Find Repeating Numbers
https://stackoverflow.com/questions/6507982/regex-to-find-repeating-numbers#:~:text=To%20match%20a%20number%20of,match%20one%20or%20more%20repetitions.
Using regex to find repeating numbers.
_________
_________
Zygodromes
http://www.numbersaplenty.com/set/zygodrome/
A number is a zygodrome in a given base b (usually 10) if in that base it is made of nontrivial runs of identical digits. I call these numbers zygodromes because digits …
_________

*/
//Your code should go here:

