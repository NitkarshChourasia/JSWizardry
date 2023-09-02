/*
####  Bird Names to Four Letter Bird Codes  ####

In the world of birding there are four-letter codes for the common names of birds. These codes are created by some simple rules:
___
*) If the bird's name has only one word, the code takes the first four letters of that word.
*) If the name is made up of two words, the code takes the first two letters of each word.
*) If the name is made up of three words, the code is created by taking the first letter from the first two words and the first two letters from the third word.
*) If the name is four words long, the code uses the first letter from all the words.
___

There are other ways codes are created, but this challenge will only use the four rules listed above.
In this challenge you will write a function that takes an array of strings of common bird names and create the codes for those names based on the rules above. The function will return an array of codes in the same order in which the input names were presented.


[Examples:]

___
birdCode(["Black-Capped Chickadee", "Common Tern"]) ➞ ["BCCH", "COTE"]

birdCode(["American Redstart", "Northern Cardinal"]) ➞ ["AMRE","NOCA"]

birdCode(["Bobolink", "American White Pelican"]) ➞ ["BOBO","AWPE"]
_____



[Notes]

___
*) The four-letter codes in the returned array should be in UPPER CASE.
*) If a common name has a hyphen/dash, it should be considered a space.
___



[arrays] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.toUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
Returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Regex Tester
https://regex101.com/
Split using regex for both spaces and dashes and you will get nice arrays with 1, 2, 3, 4 length.
_________

*/
//Your code should go here:

