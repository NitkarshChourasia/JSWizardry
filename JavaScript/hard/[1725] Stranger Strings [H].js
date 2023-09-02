/*
####  Stranger Strings  ####

In this challenge, every given string is made of three types of characters: blank spaces, digits, and strangers.
___
The Digits ➞ 0 1 2 3 4 5 6 7 8 9

The Strangers ➞ 𝟘 𝟙 𝟚 𝟛 𝟜 𝟝 𝟞 𝟟 𝟠 𝟡
_____

The goal is to remove the spaces, to separate the digits from the strangers, and to apply another transform in the two separated groups without using the .replace() string method.
Given a string str, implement a function that returns an array containing two values, in the order:
___
*) An integer being the sum of all digits. If the given string has no digits, the sum will be equal to zero.
*) A string containing the strangers, sorted in decrescent order. If the given string has no strangers, the returned string will be an empty one.
___

Try doing this without using String.replace()


[Examples]

___
strangerStrings("𝟚2 𝟛3 𝟘0 𝟙1") ➞ [ 6, "𝟛𝟚𝟙𝟘" ]

strangerStrings("𝟝 𝟚003   9") ➞ [ 12, "𝟝𝟚" ]

strangerStrings("32   000𝟜0 0 00𝟙𝟟") ➞ [ 5, "𝟟𝟜𝟙" ]
_____



[Notes]

___
*) All given strings are valid, containing only the set of characters specified in the instructions: don't worry about validation handling.
*) Credits: this was inspired by a comment (@aligejtor) on this challenge.
___



[formatting] [regex] [sorting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Turns a String into an array of strings, by separating the string at each instance of a specified separator string.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
How do you get a string to a character array in JavaScript
https://stackoverflow.com/questions/4547609/how-do-you-get-a-string-to-a-character-array-in-javascript/34717402#34717402
Since this question is originally asked more than five years ago, people are still misopetating this type of task. As hippietrail suggests, meder's answer can break sur …
_________

*/
//Your code should go here:

