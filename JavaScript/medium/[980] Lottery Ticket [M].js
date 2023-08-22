/*
####  Lottery Ticket  ####

Given a lottery ticket (ticket), represented by an array of 2-value arrays, create a function to find out if you've won the jackpot.
To do this, you must first count the "mini-win" on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini-win. Note you can only have one mini-win per subarray.
Once you have counted all of your mini-wins, compare that number to the other input provided (win). If your number of mini-wins is more than or equal to win, return Winner!. Else, return Loser!.


[Examples]

___
lottery([["YYW", 70], ["WXK", 65], ["RPDI", 88]], 2)
➞ "Loser!"

lottery([["KG", 80], ["NTBBVZ", 79], ["CI", 73], ["AGXMEE", 74], ["IU", 68], ["VOSP" , 84]], 1)
➞ "Winner!"

lottery([["ZSAMZB", 81], ["XWWCXP", 72], ["SYBRQOHP", 88], ["HJSVV", 75]], 1)
➞ "Loser!"
_____



[Notes]

___
*) All inputs will be in the correct format.
*) Strings on ticket are not always the same length.
___



[arrays] [language_fundamentals] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for wh …
_________

*/
//Your code should go here:

