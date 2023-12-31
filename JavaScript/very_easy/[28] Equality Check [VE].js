/*
####  Equality Check  ####

In this challenge, you must verify the equality of two different values given the parameters a and b.
Both the value and type of the parameters need to be equal. The possible types of the given parameters are:
___
*) Numbers
*) Strings
*) Booleans (false or true)
*) Special values: undefined, null and NaN
___

What have you learned so far that will permit you to do two different checks (value and type) with a single statement?
Implement a function that returns true if the parameters are equal, and false if they are not.


[Examples]

___
checkEquality(1, true) ➞ false
-> A number and a boolean: the value and type are different.

checkEquality(0, "0") ➞ false
-> A number and a string: the type is different.

checkEquality(1,  1) ➞ true
-> A number and a number: the type and value are equal.
_____



[Notes]

___
*) If you get stuck on a challenge, find help in the Resources tab.
*) If you're really stuck, unlock solutions in the Solutions tab.
___



[language_fundamentals] [logic] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Difference Between == and === Operators in JavaScript
https://www.geeksforgeeks.org/difference-between-and-operator-in-javascript/
The ‘==’ operator tests for abstract equality i.e. it does the necessary type conversions before doing the equality comparison. But the ‘===’ operator tests for strict …
_________
_________
Equality Comparisons and Sameness
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
There are four equality algorithms in ES2015: Abstract Equality Comparison (==) Strict Equality Comparison (===): used by Array.prototype.indexOf, Array.prototype.lastI …
_________
_________
Arrow Function
https://www.w3schools.com/js/js_arrow_function.asp
Allow us to write shorter function syntax.
_________
_________
Comparison Operators
https://www.w3schools.com/js/js_comparisons.asp
Used to test for true or false.
_________
_________
Typeof Operator
https://www.w3resource.com/javascript/operators/typeof.php
Used to get the data type (returns a string) of its operand. The operand can be either a literal or a data structure such as a variable, a function, or an object. The o …
_________

*/
//Your code should go here:


function checkEquality(a, b){
    return a === b
}

if (require.main == module)
{
    console.log(checkEquality(1, true))
    console.log(checkEquality(0, "0"))
    console.log(checkEquality(1,  1))
}

// complete.