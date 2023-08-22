/*
####  Postfix Notation (Part 1: Evaluation)  ####

Mathematical expressions are usually written with infix notation, where the operator is in-between the two operands. Postfix notation, on the other hand, is where the operator follows the operands. As we use operator precedence to determine the order of calculation (e.g. multiplication/division is evaluated before addition/subtraction), we can change the position of the operands and eliminate the need for parentheses:
___
2 + 5   # Infix
2 5 +   # Postfix

5 + (1 + 2) * 4 - 3   # Infix
5 1 2 + 4 * + 3 -     # Postfix
_____

Postfix expressions are evaluated by reading left-to-right. Any time an operator is reached, a calculation is performed on the previous two operands. The process repeats until there are no more calculations to perform:
___
2 3 4 * + 9 -   # evaluate 3x4
   2 12 + 9 -   # evaluate 2+12
       14 9 -   # evaluate 14-9
            5   # final answer
_____

Given a postfix expression as a string, return the evaluated expression. A single space separates each operator/operand.


[Examples]

___
postfix("12 3 /") ➞ 4

postfix("5 3 4 * +") ➞ 17

postfix("5 3 + 4 *") ➞ 32
_____



[Notes]

Postfix is also known as "Reverse Polish Notation". See the resources tab for more information.


[logic] [math] 



-------------------------------------------------------------------
[Resources]
_________
Reverse Polish Notation
https://en.wikipedia.org/wiki/Reverse_Polish_notation
A mathematical notation in which operators follow their operands, in contrast to Polish notation (PN), in which operators precede their operands. It does not need any p …
_________

*/
//Your code should go here:

