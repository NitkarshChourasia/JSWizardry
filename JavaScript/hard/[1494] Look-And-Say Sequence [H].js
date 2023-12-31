/*
####  Look-And-Say Sequence  ####

The look-and-say sequence is generated by describing each group of identical digits in the previous term. If we start at "1", the first five terms in the sequence are:
___
"1" = "one 1" = "11"
"11" = "two 1's" = "21"
"21" = "one 2, one 1" = "1211"
"1211" = "one 1, one 2, two 1's" = "111221"
"111221" = "three 1's, two 2's, one 1" = "312211"
_____

Given a term (as a string), return the next term in the sequence.


[Examples]

___
lookAndSay("1211") ➞ "111221"

lookAndSay("111221") ➞ "312211"

lookAndSay("31131211131221") ➞ "13211311123113112211"
_____



[Notes]

Terms will only include the digits 1, 2, and 3.


[language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Look-And-Say Sequence
https://en.wikipedia.org/wiki/Look-and-say_sequence
In mathematics, the look-and-say sequence is the sequence of integers beginning as follows: 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ... To generate a mem …
_________

*/
//Your code should go here:

