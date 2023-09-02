/*
####  Sorting Band Names without Articles  ####

Create a function that sorts the given array of band names discounting the articles "The", "A", "An" if the first word of the name categorically belongs to.


[Examples]

___
bandNamesSort(["The New Yardbirds", "The Beatles", "The Square Roots", "On A Friday", "An Irony"])
➞ ["The Beatles", "An Irony", "The New Yardbirds", "On A Friday", "The Square Roots"]

bandNamesSort(["The Platters", "A Yard of Yarn", "The Everly Brothers", "A Monster Effect", "The Sex Maggots"])
➞ ["The Everly Brothers", "A Monster Effect", "The Platters", "The Sex Maggots", "A Yard of Yarn"]

bandNamesSort(["But Myth", "An Old Dog", "Def Leppard", "The Any Glitters", "The Dawn"])
➞ ["The Any Glitters", "But Myth", "The Dawn", "Def Leppard", "An Old Dog"]
_____



[Notes]

You have to return the sorted full band names.


[arrays] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
RegExp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
The RegExp object is used for matching text with a pattern.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
Online RegEx Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, Python, Golang and JavaScript.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the array.
_________
_________
Search Through Array for Strings Similar to Strings in Another
https://stackoverflow.com/questions/57729238/search-through-array-for-strings-similar-approximate-match-to-strings-in-anoth
Basically, you have to write a function to compare two strings (there is an example function in the question linked above) and loop through the both arrays, comparing t …
_________
_________
Regex Remove Articles From Title: The, An, A
https://stackoverflow.com/questions/1705057/regex-remove-articles-from-title-the-an-a
I need a regular expression that will match the first letter of a song title without articles like "the", "an", "a". I'm writing a custom import script for Mediatomb wh …
_________

*/
//Your code should go here:

