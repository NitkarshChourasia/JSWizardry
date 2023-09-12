/*
####  Count the Arguments  ####

Create a function that returns the number of arguments it was called with.


[Examples]

___
numArgs() ➞ 0

numArgs("foo") ➞ 1

numArgs("foo", "bar") ➞ 2

numArgs(true, false) ➞ 2

numArgs({}) ➞ 1
_____



[Notes]

___
*) If you get stuck on a challenge, find help in the Resources tab.
*) If you're really stuck, unlock solutions in the Solutions tab.
___



[functional_programming] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
arguments.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length
The arguments.length property contains the number of arguments passed to the function.
_________
_________
The Arguments Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
An Array-like object accessible inside functions that contains the values of the arguments passed to that function.
_________
_________
Rest Parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
Allows us to represent an indefinite number of arguments as an array.
_________
_________
Function.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length
Indicates the number of parameters expected by the function.
_________

*/
//Your code should go here:

function numArgs() {
    return arguments.length;
}

function numArgsRest(...args) {
    return args.length;
}

if (require.main == module) {
    // Test cases.

    console.log(numArgs());
    console.log(numArgs("foo"));
    console.log(numArgs("foo", "bar"));
    console.log(numArgs(true, false));
    console.log(numArgs({}));

    console.log("Rest parameters:"); // Rest parameters.

    console.log(numArgsRest());
    console.log(numArgsRest("foo"));
    console.log(numArgsRest("foo", "bar"));
    console.log(numArgsRest(true, false));
    console.log(numArgsRest({}));

}

// 12-09-2023
// complete.