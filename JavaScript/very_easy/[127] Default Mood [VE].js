/*
####  Default Mood  ####

Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".


[Examples]

___
moodToday("happy") ➞ "Today, I am feeling happy."

moodToday("sad") ➞ "Today, I am feeling sad."

moodToday() ➞ "Today, I am feeling neutral."
_____



[Notes]

Check the Resources tab for some helpful information.


[language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Conditional Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followe …
_________
_________
The Beginner’s Guide to JavaScript Default Parameters
https://www.javascripttutorial.net/es6/javascript-default-parameters/
In this tutorial, you will learn how to handle JavaScript default parameters in ES6. We typically use the term argument and parameter interchangeably. However, by defin …
_________
_________
Template Literals (Template Strings)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
_________
_________
arguments.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length
Contains the number of arguments passed to the function.
_________
_________
How to interpolate variables in strings in JavaScript, without concatenation?
https://stackoverflow.com/questions/3304014/how-to-interpolate-variables-in-strings-in-javascript-without-concatenation
I know in PHP we can do something like this: $hello = "foo"; $my_string = "I pity the $hello"; Output: "I pity the foo" I was wondering if this same thing is possible …
_________

*/
//Your code should go here:

function moodToday(mood = "neutral") {
    return `Today, I am feeling ${mood}.`;
}

if (require.main == module) {
    console.log("####  Default Mood  ####");
    // Test cases.
    console.log(moodToday("happy")); // "Today, I am feeling happy"
    console.log(moodToday("sad")); // "Today, I am feeling sad"
    console.log(moodToday()); // "Today, I am feeling neutral"

    // Custom test cases.
    console.log(moodToday("angry")); // "Today, I am feeling angry."
    console.log(moodToday("excited")); // "Today, I am feeling excited."
}

// 17-09-2023
// complete.