/*
####  Name Count Equality  ####

Create a function that counts the embedded names in the string and determines the equality. The names are embedded in a string of mixed special symbols and characters. The names to be counted to are adjoined with the ampersand symbol & and as the second parameter. See the following examples for more details.


[Examples]

___
equalCount("Peter!@#$Paul&*#Peter!--@|#$Paul#$Peter@|Paul$%^^Peter++Paul%$%^Peter++Paul#$#$#Peter@|Paul", "Peter&Paul")
➞ {"Peter":6, "Paul": 6, "equality": true}

equalCount("Elliot!@#$Sam!--@|#$Elliot@|Sam++Elliot$%^Elliot@|Sam!@#Elliot!@#$Sam!--@|#$Elliot", "Sam&Elliot")
➞ {"Sam": 4, "Elliot": 6, "equality": false, "difference": 2}
// "difference" key is added to the object if count is not equal.

equalCount("Tim!@#$Kit&&*#Tim!--@|#$Kit#$%Tim@|Kit$%^^Tim++Kit%$%^Tim++Kit#$#$#Tim@|Kit", "Ken&Tom")
➞ {"Ken": 0, "Tom": 0, "equality": true}
_____



[Notes]

Make sure to return the result as an object with the corresponding keys seen in the above examples and the difference key when needed.


[objects] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number.
_________

*/
//Your code should go here:

