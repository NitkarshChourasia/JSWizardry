/*
####  Divisibility Rule  ####

Mubashir was trying to understand Divisibility Rule on Wikipedia which states :
"A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."
He came up with an important fact for Divisibility by 13 rule on Wikipedia, which states that if you divide the successive powers of 10 by 13 you get the following remainders :
___
10^0 % 13 = 1
10^1 % 13 = 10
10^2 % 13 = 9
10^3 % 13 = 12
10^4 % 13 = 3
10^5 % 13 = 4
10^6 % 13 = 1 (repetition starts from here)
_____

They concluded the following method:
___
*) Multiply the right-most digit of the number with the left-most number in the sequence shown above and the second right-most digit to the second left-most digit of the number in the sequence and so on.
*) Sum up all these products.
*) Repeat this process until the sum remains constant.
___

What is the remainder when 1234567 is divided by 13?
___
7      6     5      4     3     2     1  (digits of 1234567 from the right)
×      ×     ×      ×     ×     ×     ×  (multiplication)
1     10     9     12     3     4     1  (repeating sequence)
_____

We get:
___
7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178
_____

Repeat same process with 178:
___
8x1 + 7x10 + 1x9 = 87
_____

Repeat same process with 87:
___
7x1 + 8x10 = 87 (repetition starts from here)
_____

Create a function that processes this sequence of operations on the given integer n and returns the final constant value.


[Examples]

___
divisibilityRule(1234567) ➞ 87

divisibilityRule(8529) ➞ 79

divisibilityRule(85299258) ➞ 31
_____



[Notes]

N/A


[logic] [loops] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Modulo Operation
https://en.wikipedia.org/wiki/Modulo_operation
In computing, the modulo operation returns the remainder or signed remainder of a division, after one number is divided by another (called the modulus of the operation).
_________
_________
Array.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
Returns a string representing the specified array and its elements.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
_________
_________
Divisibility by 13
https://en.wikipedia.org/wiki/Divisibility_rule
Remainder Test 13 (1, −3, −4, −1, 3, 4, cycle goes on.) If you are not comfortable with negative numbers, then use this sequence. (1, 10, 9, 12, 3, 4) Multiply the ri …
_________
_________
Number.parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
Parses a string argument and returns an integer of the specified radix or base.
_________

*/
//Your code should go here:

