/*
####  Convert an Arrow Function to a Regular Function  ####

In JavaScript ES6 an arrow function expression is a syntactically compact alternative to a regular function expression.
Create a function that takes a string representing a function and converts between an arrow function and a regular function
___
*) If the input is a regular function, return an equivalent arrow function.
*) If the input is a arrow function, return an equivalent regular function.
___



[Examples]

___
// Function to arrow

"function () {}" ➞ "() => {}"

"function name() {}" ➞ "const name = () => {}"

"function name(str) { console.log(str); }" ➞ "const name = (str) => { console.log(str); }"
_____

___
// Arrow to function

"() => {}" ➞ "function () {}"

"const name = () => {}" ➞ "function name() {}"

"let name = (str) => { console.log(str); }" ➞ "function name(str) { console.log(str); }"
_____



[Notes]

___
*) The body of the function can be multiline.
*) Be careful with spaces, sometimes they're optional.
*) An arrow function can be declared using const / let / var or nothing at all. However, when converting a regular function to an arrow, always use const (unless you're dealing with an anonymous function).
___



[formatting] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
Arrow Functions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, o …
_________
_________
Regular Expressions
https://regex101.com/
Regular expression tester with syntax highlighting, explanation, cheat sheet for PHP/PCRE, Python, GO, JavaScript, Java, C#/.NET.
_________

*/
//Your code should go here:

