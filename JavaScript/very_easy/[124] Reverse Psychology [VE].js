/*
####  Reverse Psychology  ####

For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.


[Examples]

___
reversePsychology("wash the dishes") ➞ "Do not wash the dishes."

reversePsychology("eat your lunch") ➞ "Do not eat your lunch."

reversePsychology("go to school") ➞ "Do not go to school."
_____



[Notes]

Are available.


[formatting] [language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Default Parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
_________
_________
String
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenat …
_________
_________
Template Literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
_________
_________
Logical OR (||)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
The logical OR (||) operator (logical disjunction) for a set of operands is true if and only if one or more of its operands is true. It is typically used with Boole …
_________
_________
JavaScript Comparison and Logical Operators
https://www.w3schools.com/js/js_comparisons.asp
Comparison and Logical operators are used to test for true or false.
_________

*/
//Your code should go here:

reversePsychology = (str = "do anything") => `Do not ${str}.`;

if (require.main == module) {
    console.log("####  Reverse Psychology  ####");
    // Test cases.
    console.log(reversePsychology("wash the dishes")); // "Do not wash the dishes."
    console.log(reversePsychology("eat your lunch")); // "Do not eat your lunch."
    console.log(reversePsychology("go to school")); // "Do not go to school."

    // Custom test cases.
    console.log(reversePsychology("")); // "Do not ."
    console.log(reversePsychology()); // "Do not do anything."
}

// 17-09-2023
// complete.