/*
####  ES6: Destructuring Arrays IV  ####

There is an easy way to assign to array values to the nth index by using rest parameter syntax.
___
var [head, tail] = [1, 2, 3, 4]

console.log(head) // outputs  1
console.log(tail) // outputs 2
_____

But how could I make tail = [2, 3, 4] instead of tail = 2?


[Notes]

Check the Resources tab for more examples.


[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
ES6 In Depth: Destructuring
https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
ES6 In Depth is a series on new features being added to the JavaScript programming language in the 6th Edition of the ECMAScript standard, ES6 for short. Editor’s note: …
_________
_________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
_________
_________
Destructuring Assignment in ES6
https://dev.to/sarah_chima/destructuring-assignment---arrays-16f#:~:text=Destructuring%20is%20a%20JavaScript%20expression,and%20assign%20them%20to%20variables.&text=ES6%20destucturing%20assignment%20makes%20it%20easier%20to%20extract%20this%20data.
If we want to extract data using arrays, it's quite simple using destructuring assignment. Skipping Items in an Array: What if we want to get the first and last item …
_________
_________
Rest Parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
Allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
_________

*/
//Your code should go here:

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [head, ...tail] = arr;

if (require.main == module) {
    console.log("####  ES6: Destructuring Arrays  ####");
    console.log(head); // outputs:  1
    console.log(tail); // outputs: [2, 3, 4, 5, 6, 7, 8, 9, 10]
}

// 17-09-2023
// complete.