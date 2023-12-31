/*
####  Testing K^K == N?  ####

Write a function that returns true if k^k == n for input (n, k) and return false otherwise.


[Examples]

___
kToK(4, 2) ➞ true

kToK(387420489, 9) ➞ true
9^9 == 387420489

kToK(3124, 5) ➞ false

kToK(17, 3) ➞ false
_____



[Notes]

The ^ operator refers to exponentiation operation, not the bitwise XOR operation.


[bit_operations] [math] [numbers] [validation]



-------------------------------------------------------------------
[Resources]
_________
Math​.pow()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
Returns the base to the exponent power, that is, baseexponent.
_________
_________
Floating Point Numbers
https://www.youtube.com/watch?v=PZRI1IfStY0
Why can't floating point do money? It's a brilliant solution for speed of calculations in the computer, but how and why does moving the decimal point (well, in this cas …
_________
_________
The double asterisk ** operator
https://stackoverflow.com/questions/33284569/is-the-double-asterisk-a-valid-javascript-operator
I solved a kata on CodeWars and was looking through some of the other solutions when I came across the double asterisk to signify to the power of. I have done some rese …
_________
_________
Bitwise Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal numbe …
_________
_________
Exponent Operator (^)
https://docs.intersystems.com/latest/csp/docbook/DocBook.UI.Page.cls?KEY=RBAS_OEXPONENT
Used to raise a number to the power of an exponent.
_________
_________
Math.pow()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
Returns the base to the exponent power, that is, baseexponent.
_________
_________
The Number isSafeInteger() Method
https://flaviocopes.com/javascript-number-issafeinteger/
A number might satisfy Number.isInteger() but not Number.isSafeInteger() if it goes out of the boundaries of safe integers, which I explained above. So, anything over 2 …
_________

*/
//Your code should go here:

function kToK(n, k) {
    return Math.pow(k, k) === n;
}

if (require.main == module) {
    // Title.
    console.log("####  Testing K^K == N?  ####");
    // Test cases.
    console.log(kToK(4, 2)); // true
    console.log(kToK(387420489, 9)); // true
    console.log(kToK(3124, 5)); // false
    console.log(kToK(17, 3)); // false

    // End of script.
}

// 2-October-2023
// complete.