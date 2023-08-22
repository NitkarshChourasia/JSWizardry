/*
####  Poker Flush?  ####

Create a function that takes in two arrays and determines whether there exists a flush.
___
*) The first array represents the 5 cards dealt on the table.
*) The second array represents the 2 cards in your hand.
___

Notation: card number and suit (abbreviated as S = Spades, H = Hearts, D = Diamonds, C = Clubs) separated by an underscore.


[Examples]

___
checkFlush(["A_S", "J_H", "7_D", "8_D", "10_D"], ["J_D", "3_D"]) ➞ true // diamond flush

checkFlush(["10_S", "7_S", "9_H", "4_S", "3_S"], ["K_S", "Q_S"]) ➞ true // spade flush

checkFlush(["3_S", "10_H", "10_D", "10_C", "10_S"], ["3_S", "4_D"]) ➞ false
_____



[Notes]

Hint: If there aren't at least 3 cards of the same suit on the table, there is zero chance of there being a flush.


[arrays] [conditions] [control_flow] [games] [regex] 



-------------------------------------------------------------------
[Resources]
_________
What is a "flush" in poker?
https://en.wikipedia.org/wiki/List_of_poker_hands#Flush
A flush is a hand that contains five cards all of the same suit, not all of sequential rank.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
String.prototype.split()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
_________
_________
Array.prototype.sort()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Ccompares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
_________
_________
Array.prototype.find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
_________
_________
Regex
https://regex101.com/
Regular expression tester with syntax highlighting, explanation, cheat sheet for PHP/PCRE, Python, GO, JavaScript, Java, C#/.NET.
_________

*/
//Your code should go here:

