/*
####  Return Something to Me!  ####

Write a function that returns the string 
"something" joined with a space " " and the given argument a.


[Examples]

___
giveMeSomething("is better than nothing") ➞ "something is better than nothing"

giveMeSomething("Bob Jane") ➞ "something Bob Jane"

giveMeSomething("something") ➞ "something something"
_____



[Notes]

Assume an input is given.


[language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Template literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
_________
_________
String concat() Method
https://www.w3schools.com/jsref/jsref_concat_string.asp
Is used to join two or more strings. This method does not change the existing strings, but returns a new string containing the text of the joined strings.
_________
_________
Arrow Functions
https://www.w3schools.com/js/js_arrow_function.asp
Allow us to write shorter function syntax.
_________
_________
String.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
Concatenates the string arguments to the calling string and returns a new string.
_________
_________
Regex tester and debugger
https://regex101.com
With highlighting for PHP, PCRE, Python, Golang and JavaScript.
_________

*/
//Your code should go here:

function giveMeSomething(input_string) {
    return `something ${input_string}`
}


if (require.main == module) {
    console.log(giveMeSomething("is better than nothing"))
    console.log(giveMeSomething("Bob Jane"))
    console.log(giveMeSomething("something"))
}


// complete.