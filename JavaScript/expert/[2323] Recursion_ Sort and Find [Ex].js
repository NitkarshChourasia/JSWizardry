/*
####  Recursion: Sort and Find  ####

In this challenge, we'll take recursion to the next level, where we will embed a recursive function within a recursive function.
Write a function that sorts the strings in an array (if the string is a palindrome, it will become part of the sorted array) and finds the longest non-palindromic string.
Although these tasks are achievable with the use of some built-in Array functions, the purpose and intent of this challenge is for you to solve it recursively.


[Output Structure]

___
{longest: longest_non_palindromic, length: longest_length, palindromes: [...palindromic_strings]}
_____



[Examples]

___
qualify(["wow", "relevance", "radar", "soundly", "intelligence", "racecar", "gradually"]) ➞ {"longest": "intelligence", "length": 12, "palindromes": ["racecar", "radar", "wow"]}

qualify(["persistence", "anna", "civic", "perseverance", "kayak", "irrefutability"]) ➞ {"longest": "irrefutability", "length": 14, "palindromes": ["anna", "civic", "kayak"]}

qualify(["level", "resistance", "madam", "arrogance", "unconsiderably", "mom", "noon"]) ➞ {"longest": "unconsiderably", "length": 14, "palindromes": ["level", "madam", "mom", "noon"]}
_____



[Notes]

___
*) All items in the array are lowercase.
*) In cases where two longest words are found, return the first.
*) The use of reduce(), reduceRight(), map(), filter(), indexOf() and max() functions are restricted.
*) You can read more about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept before taking up this challenge.
*) If you think recursion is fun, check out this collection.
___



[arrays] [recursion] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Recursive Function
https://www.javascripttutorial.net/javascript-recursive-function/
This tutorial shows you how to use recursion technique to develop a JavaScript recursive function, which is a function that calls itself.
_________
_________
Understand Recursion
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
Lets jump right in and take a look at probably the most famous recursion example. This example returns the factorial of a supplied integer: Woah. It’s Okay if that make …
_________

*/
//Your code should go here:

