/*
####  Return the Last Element in an Array  ####

Create a function that accepts an array and returns the last item in the array.


[Examples]

___
getLastItem([1, 2, 3]) ➞ 3

getLastItem(["cat", "dog", "duck"]) ➞ "duck"

getLastItem([true, false, true]) ➞ true
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
Array.prototype.pop()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
Removes the last element from an array and returns that element. This method changes the length of the array.
_________
_________
Array.prototype.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
_________
_________
Get the Last Element of an Array
http://www.codeblocq.com/2016/05/Get-the-last-element-of-an-Array-in-JavaScript/
This article discusses the preferred way to retrieve the last element of an Array in JavaScript.
_________
_________
Get the Last Element of an Array
https://www.w3resource.com/javascript-exercises/javascript-array-exercise-4.php
Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
_________

*/
//Your code should go here:

function getLastItem(arr) {
    return arr.pop();
}

function getLastItemSqBrackets(arr) {
    return arr[arr.length - 1];
}

if (require.main == module) {
    console.log(getLastItem([1, 2, 3]));
    console.log(getLastItem(["cat", "dog", "duck"]));
    console.log(getLastItem([true, false, true]));

    console.log(); // separator.

    console.log(getLastItemSqBrackets([1, 2, 3]));
    console.log(getLastItemSqBrackets(["cat", "dog", "duck"]));
    console.log(getLastItemSqBrackets([true, false, true]));
}


// 05-09-2023
// complete.