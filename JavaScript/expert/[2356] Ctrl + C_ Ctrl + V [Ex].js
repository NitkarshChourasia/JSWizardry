/*
####  Ctrl + C, Ctrl + V  ####

Given a sentence containing few instances of "Ctrl + C" and "Ctrl + V", return the sentence after those keyboard shortcuts have been applied! Note that:
___
*) In this case, "Ctrl + C" will copy all text behind it.
*) In this case, "Ctrl + V" will do nothing if there is no "Ctrl + C" before it.
*) A "Ctrl + C" which follows another "Ctrl + C" will overwrite what it copies.
___



[Examples]

___
keyboardShortcut("the egg and Ctrl + C Ctrl + V the spoon") ➞ "the egg and the egg and the spoon"

keyboardShortcut("WARNING Ctrl + V Ctrl + C Ctrl + V") ➞ "WARNING WARNING"

keyboardShortcut("The Ctrl + C Ctrl + V Town Ctrl + C Ctrl + V") ➞ "The The Town The The Town"
_____



[Notes]

___
*) Keyboard shortcut commands will appear like normal words in a sentence but shouldn't be copied themselves (see example #2).
*) Pasting should add a space between words.
___



[formatting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
join() Method
https://www.w3schools.com/jsref/jsref_join.asp
Returns the array as a string. The elements will be separated by a specified separator. The default separator is comma (,). Note: this method will not change the orig …
_________
_________
split() Method
https://www.w3schools.com/jsref/jsref_split.asp
Is used to split a string into an array of substrings, and returns the new array. Tip: If an empty string ("") is used as the separator, the string is split between ea …
_________
_________
map() Method
https://www.w3schools.com/jsref/jsref_map.asp
Creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in …
_________
_________
repeat() Method
https://www.w3schools.com/jsref/jsref_repeat.asp
Returns a new string with a specified number of copies of the string it was called on.
_________
_________
endsWith() Method
https://www.w3schools.com/jsref/jsref_endswith.asp
Determines whether a string ends with the characters of a specified string. This method returns true if the string ends with the characters, and false if not. Note: T …
_________
_________
replace() Method
https://www.w3schools.com/jsref/jsref_replace.asp
Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced. Note: If you are replacing a value …
_________

*/
//Your code should go here:

