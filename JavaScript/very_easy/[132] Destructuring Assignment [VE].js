/*
####  Destructuring Assignment  ####

You can assign variables from arrays like this:
___
arr = [1, 2, 3, 4, 5, 6, 7, 8]
first = arr[0]
second = arr[1]
third = arr[2]
other = arr.slice(3)

console.log(first) ➞ outputs 1
console.log(second) ➞ outputs 2
console.log(third) ➞ outputs 3
console.log(other) ➞ outputs [4, 5, 6, 7, 8]
_____

However, this is long and tedious. Instead, we can use Object Destructuring to create all those variables in one line. Your task: Create variables first, second, third and other from the given array using Destructuring Assignment (check the Resources tab for some examples).


[Examples]

___
first ➞ 1

second ➞ 2

third ➞ 3

other ➞ [4, 5, 6, 7, 8]
_____

Your task is to unpack the arr writeyourcodehere into four variables, first, second, third, and other.


[Notes]

___
*) Your solution should be just One Line of code.
*) If your solution is longer than one line of code, please check the Resources tab.
*) Another version of this challenge.
___



[interview] [language_fundamentals] [logic] [objects] 



-------------------------------------------------------------------
[Resources]
_________
ES6 In Depth: Destructuring
https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals. This syntax …
_________
_________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
_________
_________
Destructuring Assignment in ES6
https://dev.to/sarah_chima/destructuring-assignment---arrays-16f#:~:text=Destructuring%20assignment%20is%20a%20cool,and%20assign%20them%20to%20variables
Destructuring assignment is a cool feature that came along with ES6. Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or pr …
_________
_________
Why Is Array/Object Destructuring So Useful and How to Use It
https://www.youtube.com/watch?v=NIq3qLaHCIs&pbjreload=101
ES6 is one of the best things that ever happened to JavaScript. It added a ton of new features and syntax that made JavaScript so much more enjoyable to work with. One …
_________
_________
Spread Operator
https://www.geeksforgeeks.org/javascript-spread-operator/
Use the spread operator (...) toexpand in places where zero or more arguments are expected.
_________

*/
//Your code should go here:


"use strict";

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let [first, second, third, ...other] = arr;

if (require.main == module) {
    console.log("####  Destructuring Assignment  ####");
    // Test cases.
    console.log(first); // 1
    console.log(second); // 2
    console.log(third); // 3
    console.log(other); // [4, 5, 6, 7, 8]
}

// Adding string literals and all will come later.

// 18-09-2023
// complete.