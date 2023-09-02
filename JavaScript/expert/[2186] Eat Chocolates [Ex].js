/*
####  Eat Chocolates  ####

Arun recently started eating chocolates. The shopkeeper tells Arun that for every three chocolates Arun eats, he will give him one chocolate in exchange for three chocolate wrappers. Now, Arun is confused about how many chocolates he can eat.
Given the total money Arun has and the cost of one chocolate, help him figure out how many chocolates he can eat.


[Examples]

___
countChocolates("4$", "1$") ➞ 5
// Arun eats three chocolates and purchases one more
// chocolate from Bitu in those three wrappers. Now he
// eats those two chocolates and hence 3 + 2 = 5.

countChocolates("55   $", "5$") ➞ 16

countChocolates("I have 68$", "2$")  ➞ 50

countChocolates("I got -68$ from my mom ", "2$")  ➞ "Invalid Input"
// Because -68 is a negative number and money can't be negative.
_____



[Notes]

Figure out the invalid inputs and take care of them.


[algorithms] [logic] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
Remainder (%)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
Returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
_________
_________
while Statement
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
_________

*/
//Your code should go here:

