/*
####  Super Strict Grading  ####

Given an object literal of student names and an array of their test scores over the semester, return a list of all the students who passed the course (in alphabetical order). However, there is one more thing to mention: the pass mark is 100% in everything!


[Examples]

___
whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
}) ➞ ["Barry", "John"]

whoPassed({
  "Zara" : ["10/10"],
  "Kris" : ["30/30"],
  "Charlie" : ["100/100"],
  "Alex" : ["1/1"]
}) ➞ ["Alex", "Charlie", "Kris", "Zara"]

whoPassed({
  "Zach" : ["10/10", "2/4"],
  "Fred" : ["7/9", "2/3"]
}) ➞ []
_____



[Notes]

___
*) All of a student's test scores must be 100% to pass.
*) Remember to return an array of student names sorted alphabetically.
___



[arrays] [loops] [objects] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
_________
_________
eval()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/eval
Evaluates JavaScript code represented as a string.
_________
_________
Object.entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
Returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. (The only important …
_________
_________
Iterating Through Object Literals
https://medium.com/@GarrettLevine/iterating-through-objects-in-javascript-7a71d0e539c
This article is meant to be a very intro example of how one iterates through object literals. The two methods I will show are simple, well-known approaches to iterating …
_________

*/
//Your code should go here:

