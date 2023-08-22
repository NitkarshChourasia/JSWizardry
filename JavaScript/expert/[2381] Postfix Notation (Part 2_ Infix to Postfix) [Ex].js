/*
####  Postfix Notation (Part 2: Infix to Postfix)  ####

Given a string representing an infix expression, return the postfix equivalent. The operands stay in their original order, and any parentheses are removed. Only the operator order is changed. Operands and operators will be separated by a single space, with the exception of parentheses (see examples).


[Examples]

___
infixToPostfix("7 + 3") ➞ "7 3 +"

infixToPostfix("(8 + 4) / 4") ➞ "8 4 + 4 /"

infixToPostfix("4 * (5 - (7 + 2))") ➞ "4 5 7 2 + - *"

infixToPostfix("3 + 4 ** 2") ➞ "3 4 2 ** +"
_____



[Notes]

Converting infix expressions to postfix expressions is an example of operator-precedence parsing, the most famous of which is Dijkstra's "shunting-yard" algorithm (see the resources tab for more information).


[logic] [math] 



-------------------------------------------------------------------
[Resources]
_________
Shunting-yard Algorithm
https://en.wikipedia.org/wiki/Shunting-yard_algorithm
A method for parsing mathematical expressions specified in infix notation. It can produce either a postfix notation string, also known as Reverse Polish notation (RPN), …
_________
_________
Reverse Polish Notation
https://en.wikipedia.org/wiki/Reverse_Polish_notation
A mathematical notation in which operators follow their operands, in contrast to Polish notation (PN), in which operators precede their operands. It does not need any p …
_________

*/
//Your code should go here:

