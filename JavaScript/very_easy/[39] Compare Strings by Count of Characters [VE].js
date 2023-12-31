/*
####  Compare Strings by Count of Characters  ####

Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.


[Examples]

___
comp("AB", "CD") ➞ true

comp("ABC", "DE") ➞ false

comp("hello", "health") ➞ false
_____



[Notes]

___
*) Don't forget to return the result.
*) If you get stuck on a challenge, find help in the Resources tab.
*) If you're really stuck, unlock solutions in the Solutions tab.
___



[conditions] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
string.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object indicates the length of a string, in UTF-16 code units.
_________
_________
Arrow Function
https://www.w3schools.com/js/js_arrow_function.asp
If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.
_________
_________
String Length Property
https://www.w3schools.com/jsref/jsref_length_string.asp
The length property returns the length of a string (number of characters). The length of an empty string is 0.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________

*/
//Your code should go here:

function comp(str1, str2) {
    return str1.length === str2.length;
}

if (require.main == module) {
    console.log(comp("AB", "CD"));
    console.log(comp("ABC", "DE"));
    console.log(comp("hello", "health"));
}

// complete.
