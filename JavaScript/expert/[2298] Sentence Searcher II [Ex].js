/*
####  Sentence Searcher II  ####

Create a function that returns the sentence that contains the word at index n. Remember to include the full stop at the end.


[Worked Example]

___
const txt = "I have a dog. I have a log. There is no stopping me now."

sentenceSearcher(txt, 7) ➞ "I have a log."
// The word at index 7 is "log".
// The full sentence that contains the word at index 7 is "I have a log."
// Return the sentence.
_____



[Examples]

___
sentenceSearcher(txt, 2) ➞ "I have a dog."

sentenceSearcher(txt, 4) ➞ "I have a log."

sentenceSearcher(txt, -1) ➞ "There is no stopping me now."
// The index at -1 is the last word.
// The last word is "now".
_____



[Notes]

___
*) All sentences will end with a full stop.
*) You need to also account for negative indexes.
___



[loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where …
_________

*/
//Your code should go here:

