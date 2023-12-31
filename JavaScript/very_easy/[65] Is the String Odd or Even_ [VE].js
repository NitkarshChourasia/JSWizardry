/*
####  Is the String Odd or Even?  ####

Given a string, return true if its length is even or false if the length is odd.


[Examples]

___
oddOrEven("apples") ➞ true
-> The word "apples" has 6 characters.
-> 6 is an even number, so the program outputs true.

oddOrEven("pears") ➞ false
-> "pears" has 5 letters, and 5 is odd.
-> Therefore the program outputs false.

oddOrEven("cherry") ➞ true
_____



[Notes]

N/A


[conditions] [strings] [validation]



-------------------------------------------------------------------
[Resources]
_________
String length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
_________
_________
Find if Variable Is Divisible by 2
https://stackoverflow.com/questions/2821006/find-if-variable-is-divisible-by-2
How to figure out if a variable is divisible by 2?
_________
_________
Even or Odd Explanation
https://brilliant.org/wiki/even-and-odd-numbers/#:~:text=An%20even%20number%20is%20a,of%201%20upon%20division%20by
An even number has parity 00 because the remainder upon division by 22 is 00, while an odd number has parity 11 because the remainder upon division by 22 is 11. For exa …
_________
_________
Length Function
https://www.w3schools.com/jsref/jsref_length_string.asp
The length property returns the length of a string. The length property of an empty string is 0.
_________
_________
Check if Number is Even/Odd
https://gist.github.com/darryl-snow/3820321
Check if the number is even/odd.
_________

*/
//Your code should go here:


function lengthParity(str_in) {
    return str_in.length % 2 === 0;
}

if (require.main == module) {
    console.log(lengthParity("apples"));
    console.log(lengthParity("pears"));
    console.log(lengthParity("cherry"));
}


// 05-09-2023
// complete.