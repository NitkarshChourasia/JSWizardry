/*
####  Count Substring  ####

Implement a function count_substring that counts the number of substrings that begin with character "A" and ends with character "X".
For example, given the input string "CAXAAYXZA", there are four substrings that begin with "A" and ends with "X", namely: "AX", "AXAAYX", "AAYX", and "AYX".


[Examples]

___
countSubstring("CAXAAYXZA") ➞  4

countSubstring("AAXOXXA") ➞ 6

countSubstring("AXAXAXAXAX") ➞ 15
_____



[Notes]

___
*) You should aim to avoid using nested loops to complete the task.
*) You can assume that the input string is composed of English upper case letters only.
___



[loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
Array.prototype.shift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
Removes the first element from an array and returns that removed element. This method changes the length of the array.
_________
_________
While Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
String.prototype.slice()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________

*/
//Your code should go here:

