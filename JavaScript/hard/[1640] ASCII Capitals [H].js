/*
####  ASCII Capitals  ####

Each character in the English Alphabet has an ASCII Char Code.
Create a function that converts any word in a given sentence to upper case if the sum of the ASCII codes of the letters in the word is greater than the global average for the sentence. The global average of a sentence is the sum of all the word values divided by the number of words.
For example:

Since on average, a word in this sentence has a char code sum of 340.75, "Tell" & "time" would be returned capitalised: "TELL me the TIME"


[Examples]

___
averageASCII("Tell me the time") ➞ "TELL me the TIME"
// Global Average for char code sum of a word is 340.75

averageASCII("To be or not to be") ➞ "To be or NOT to be"
// Global Average for char code sum of a word is 230.33

averageASCII("Edabit helps you learn in bitesize chunks") ➞ "EDABIT HELPS you learn in BITESIZE CHUNKS"
// Global Average for char code sum of a word is 533.43
_____



[Notes]

___
*) Do not count whitespace as part of a word.
*) There will be no punctuation/special characters in the tests.
*) If a word does not meet the capitalisation citeria, don't fully lowercase it ⁠— leave it how it is (i.e. the first words of a sentence should not be fully lowercased if they don't meet the criteria).
*) The char code of a capital letter will be different than its lowercase counterpart.
*) When you find the global average, it may help to round it to 2 decimal places, then compare against it.
___



[formatting] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________

*/
//Your code should go here:

