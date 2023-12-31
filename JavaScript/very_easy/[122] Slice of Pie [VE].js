/*
####  Slice of Pie  ####

Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

The function will be in this form:
___
equalSlices(total slices, no. recipients, slices each)
_____



[Examples]

___
equalSlices(11, 5, 2) ➞ true
5 people x 2 slices each = 10 slices < 11 slices

equalSlices(11, 5, 3) ➞ false
5 people x 3 slices each = 15 slices > 11 slices

equalSlices(8, 3, 2) ➞ true

equalSlices(8, 3, 3) ➞ false

equalSlices(24, 12, 2) ➞ true
_____



[Notes]

___
*) Return (trivially) true if there are zero people.
*) It's fine not to use the entire pie.
*) All test parameters are integers.
*) Don't forget to return the result.
*) If you get stuck on a challenge, find help in the Resources tab.
*) If you're really stuck, unlock solutions in the Solutions tab.
___



[algebra] [math] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Arithmetic Operators
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are a …
_________
_________
Comparison Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type and the contents match. Th …
_________

*/
//Your code should go here:

function equalSlices(totalSlices, noRecipients, slicesEach) {
    return slicesEach * noRecipients <= totalSlices;
}

if (require.main == module) {
    console.log("####  Equal Slice of Pie?  ####");
    // Test cases.

    console.log(equalSlices(11, 5, 2)); // true
    console.log(equalSlices(11, 5, 3)); // false
    console.log(equalSlices(8, 3, 2)); // true
    console.log(equalSlices(8, 3, 3)); // false
    console.log(equalSlices(24, 12, 2)); // true

}


// 17-09-2023
// complete.