/*
####  Convert an Array to a String  ####

Create a function that takes an array of numbers or letters and returns a string.


[Examples]

___
arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
_____



[Notes]

N/A


[arrays] [language_fundamentals] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
using .join method to convert array to string without commas
https://stackoverflow.com/questions/12132178/using-join-method-to-convert-array-to-string-without-commas
I'm using .join() to convert my array to a string so I can output it in a text box as the user selects numbers in a calculator, I'm not entirely sure how I can remove t …
_________
_________
Array Methods
https://www.w3schools.com/js/js_array_methods.asp
The JavaScript method toString() converts an array to a string of (comma separated) array values. The join() method also joins all array elements into a string. It beha …
_________
_________
Array.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString#:~:text=For%20Array%20objects%2C%20the%20toString,to%20in%20a%20string%20concatenation.
Returns a string representing the specified array and its elements.
_________

*/
//Your code should go here:

function arrayToString(arr) {
    return arr.join('');
}

if (require.main == module) {
    // Test cases.

    console.log(arrayToString([1, 2, 3, 4, 5, 6]));
    console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
    console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

    console.log(); // Blank line for readability.

    // Return type check.

    console.log(typeof arrayToString([1, 2, 3, 4, 5, 6]));
    console.log(typeof (arrayToString(["a", "b", "c", "d", "e", "f"])));
    console.log(typeof (arrayToString([1, 2, 3, "a", "s", "dAAAA"])));
}

// 08-09-2023
// complete.