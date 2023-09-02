/*
####  Encoded String Parse  ####

Create a function which takes in an encoded string and returns an object according to the following example:


[Examples]

___
parseCode("John000Doe000123") ➞ {
  firstName: "John",
  lastName: "Doe",
  id: "123"
}

parseCode("michael0smith004331") ➞ {
  firstName: "michael",
  lastName: "smith",
  id: "4331"
}

parseCode("Thomas00LEE0000043") ➞ {
  firstName: "Thomas",
  lastName: "LEE",
  id: "43"
}
_____



[Notes]

___
*) The string will always be in the same format, first name, last name and id with zeros between them.
*) id numbers will not contain any zeros.
*) Bonus: Try solving this without RegEx.
___



[formatting] [objects] [sorting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Object.fromEntries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
Transforms a list of key-value pairs into an object.
_________
_________
Working with Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. …
_________

*/
//Your code should go here:

