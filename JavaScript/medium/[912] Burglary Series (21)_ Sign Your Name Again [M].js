/*
####  Burglary Series (21): Sign Your Name Again  ####

It's the police again. They need more signatures. You should also sign each room list separately. However, the document they sent is incomplete as there is only one room present. As a good citizen that you are, you sign it nevertheless.
This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't use a return statement, it is already included.
The function receives an object with one nested object as an argument. Your task is:
___
*) on the root object: prevent any kind of changes.
*) on the nested object: prevent new properties from being added BUT allow for existing properties to be changed.
___



[Examples]

___
const obj = {
  kitchen: {
    knives: 500,
    stereo: 200,
    signature: ""
  },
signature: "Rocky Balboa"
}

signAgain(obj) {
  // add your code here

  obj.signature = "Terminator"
  obj.extraProperty = "not possible"
  obj.kitchen.piano = 1000
  obj.kitchen.signature = "Rocky Balboa"
  return obj

} ➞ {
  kitchen: {
    knives: 500,
    stereo: 200,
    signature: "Rocky Balboa", //only this field was changed
  },
  signature: "Rocky Balboa"
}
_____



[Notes]

___
*) For simplicity sake, there's only one nested object.
*) If you have suggestions on how to present or further test this challenge please leave a comment.
*) This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.
___



[objects] 



-------------------------------------------------------------------
[Resources]
_________
Object.freeze() vs Object.seal() vs Object. preventExtensions()
https://medium.com/@nlfernando11/object-freeze-vs-object-seal-vs-object-preventextensions-251ee99d0c47
ECMAScript 5 introduced new Object methods to Javascript. Among them Object.freeze(), Object.seal(), Object.preventExtensions() methods will be discussed in comparison …
_________

*/
//Your code should go here:

