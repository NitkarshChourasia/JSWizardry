/*
####  Check if an Array Contains a Given Number  ####

Write a function to check if an array contains a particular number.


[Examples]

___
check([1, 2, 3, 4, 5], 3) ➞ true

check([1, 1, 2, 1, 1], 3) ➞ false

check([5, 5, 5, 6], 5) ➞ true

check([], 5) ➞ false
_____



[Notes]

___
*) Don't forget to return the result.
*) If you get stuck on a challenge, find help in the Resources tab.
*) If you're really stuck, unlock solutions in the Solutions tab.
___



[arrays] [language_fundamentals] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Array.prototype.indexOf()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
_________

*/
//Your code should go here:

function check(arr, num) {
    return arr.includes(num);
}

if (require.main == module) {
    // Test cases.

    console.log(check([1, 2, 3, 4, 5], 3));
    console.log(check([1, 1, 2, 1, 1], 3));
    console.log(check([5, 5, 5, 6], 5));
    console.log(check([], 5));
}

// 08-09-2023
// complete.