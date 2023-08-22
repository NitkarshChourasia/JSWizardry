/*
####  Word Buckets  ####

Write a function that divides a phrase into word buckets, with each bucket containing n or fewer characters. Only include full words inside each bucket.


[Examples]

___
bucketize("she sells sea shells by the sea", 10)
➞ ["she sells", "sea shells", "by the sea"]

bucketize("the mouse jumped over the cheese", 7)
➞ ["the", "mouse", "jumped", "over", "the", "cheese"]

bucketize("fairy dust coated the air", 20)
➞ ["fairy dust coated", "the air"]

bucketize("a b c d e", 2)
➞ ["a", "b", "c", "d", "e"]
_____



[Notes]

___
*) Spaces count as one character.
*) Trim beginning and end spaces for each word bucket (see final example).
*) If buckets are too small to hold a single word, return an empty array: []
*) The final goal isn't to return just the words with a length equal (or lower) to the given n, but to return the entire given phrase bucketized (if possible). So, for the specific case of "by" the only word with a proper length, the phrase can't be bucketized, and the returned array has to be empty.
___



[control_flow] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Turns a String into an array of strings, by separating the string at each instance of a specified separator string.
_________

*/
//Your code should go here:

