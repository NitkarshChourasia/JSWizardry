/*
####  Playing with Nested Objects  ####

Create a function that takes an object and returns an object of all entries having unique marks. If the marks are the same, take who is eldest.


[Examples]

___
getObject({
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
}) ➞ {
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 16, name: "Robin", marks: "200" },
  "2": { age: 16, name: "Bella", marks: "300" }
}

getObject({
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 17, name: 'julie', marks: '400'},
  2: {age: 16, name: 'Robin', marks: '200'},
  3: {age: 16, name: 'Bella', marks: '300'},
  4: {age: 16, name: 'john', marks: '250'},
  5: {age: 15, name: 'julie', marks: '250'}
}) ➞    {
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 16, name: 'Robin', marks: '200'},
  2: {age: 16, name: 'Bella', marks: '300'},
  3: {age: 16, name: 'john', marks: '250'}
}
_____



[Notes]

Check the examples above for clarification.


[arrays] [logic] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Numeric Order of Keys of Object Re Arrange from 0
https://www.thetopsites.net/article/53320161.shtml
In a numeric sort, 9 comes before 80, but because numbers are converted to If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. Objects c …
_________
_________
Working With Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. …
_________

*/
//Your code should go here:

