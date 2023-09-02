/*
####  Message from Space  ####

You have received an encrypted message from space. Your task is to decrypt the message with the following simple rules:
___
*) Message string will consist of capital letters, numbers, and brackets only.
*) When there's a block of code inside the brackets, such as [10AB], it means you need to repeat the letters AB for 10 times.
*) Message can be embedded in multiple layers of blocks.
*) Final decrypted message will only consist of capital letters.
___

Create a function that takes encrypted message str and returns the decrypted message.


[Examples]

___
spaceMessage("ABCD") ➞ "ABCD"

spaceMessage("AB[3CD]") ➞ "ABCDCDCD"
// "AB" = "AB"
// "[3CD]" = "CDCDCD"

spaceMessage("IF[2E]LG[5O]D") ➞ "IFEELGOOOOOD"
_____



[Notes]

N/A


[loops] [recursion] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
JavaScript String Methods
https://www.w3schools.com/js/js_string_methods.asp
String methods help you to work with strings.
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________

*/
//Your code should go here:

