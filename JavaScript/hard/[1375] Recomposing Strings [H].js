/*
####  Recomposing Strings  ####

In this challenge, the goal is recomposing scrambled strings made of two or more words.
Every string has to be reversed not in its totality, but by vowels or consonants clusters in the order they are found; after splitting the string in groups, and reversing every group with more than a letter, you'll obtain the correct sequence:
___
String = "KiKdaola"

Separation vowels/consonants = K  i  Kd  ao  l  a

Reversing the groups = K  i  dK  oa  l  a

New string = KidKoala
_____

Now, you have to insert a space between the words. A word starts with a capital letter:
___
String = "KidKoala"

Result = "Kid Koala"
_____

Given a string, implement a function that returns, in turn, a new correct string, following the above instructions.


[Examples]

___
recompose("KiKdaola") ➞ "Kid Koala"

recompose("BaosdrOCfanada") ➞ "Boards Of Canada"
// B  ao  sdr  O  Cf  a  n  a  d  a
// B  oa  rds  O  fC  a  n  a  d  a

recompose("hCemicarBlohtesr") ➞ "Chemical Brothers"
// hC  e  m  i  c  a  rBl  o  ht  e  sr
// Ch  e  m  i  c  a  lBr  o  th  e  rs
_____



[Notes]

___
*) Every given string will be valid, containing only letters and at least two words (identified by the capital letters).
*) Remember to reverse the clusters of letters and not the entire string.
___



[arrays] [formatting] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/reverse
Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
_________

*/
//Your code should go here:

