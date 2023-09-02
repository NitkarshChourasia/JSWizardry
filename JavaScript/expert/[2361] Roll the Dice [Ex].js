/*
####  Roll the Dice  ####

Las Vegas style dice have 6 sides numbered 1 to 6. When rolling 2 dice, a six is 5 times more likely than a two because a six can be rolled 5 different ways (1 + 5, 5 + 1, 2 + 4, 4 + 2, 3 + 3), while a two can only be rolled 1 way (1 + 1).
Create a function that accepts two arguments:the number of dice rolled, and the outcome of the roll. The function returns the number of possible combinations that could produce that outcome. The number of dice can vary from 1 to 6.
For the example given above:
___
*) diceRoll(2, 6) would return 5
*) diceRoll(2, 2) would return 1
___



[Examples]

___
diceRoll(1, 3) ➞ 1

diceRoll(2, 5) ➞ 4
// 1 + 4, 4 + 1, 2 + 3, 3 + 2

diceRoll(3, 4) ➞ 3
// 1 + 1 + 2, 1 + 2 + 1, 2 + 1 + 1

diceRoll(4, 18) ➞ 80

diceRoll(6, 20) ➞ 4221
_____



[Notes]

1 + 5 and 5 + 1 are distinct combinations because die #1 can show 1 while die #2 can show 5, or die #1 can show 5 while die #2 can show 1.


[math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Combinatorics — Counting dice combinations using JavaScript
https://medium.com/amiralles/combinatorics-counting-dice-combinations-using-javascript-52fdc4a1429c
Quite frequently I got asked questions like: “How can I get all possible combinations for a given dice roll?” “How many combinations add up to 7 in a pair of dice?” “Is …
_________

*/
//Your code should go here:

