/*
####  The Longest Substring  ####

Given a string of letters, create a function that returns an array with the separator that yields the longest possible substring, provided that:
___
*) The substring starts and ends with the separator.
*) The separator doesn't occur inside the substring other than at the ends.
___

If two or more separators yield substrings with the same length, they should appear in alphabetical order.


[Examples]

___
maxSeparator("supercalifragilistic") ➞ ["s"]
// The longest substring is "supercalifragilis".

maxSeparator("laboratory") ➞ ["a", "o", "r"]
// "abora", "orato" and "rator" are the same length.

maxSeparator("candle") ➞ []
// No possible substrings.
_____



[Notes]

___
*) All substrings should be at least of length 2 (i.e. no single-letter substrings).
*) Expect lowercase alphabetic characters only.
___



[regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String Methods
https://www.w3schools.com/js/js_string_methods.asp
With JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and prope …
_________

*/
//Your code should go here:

