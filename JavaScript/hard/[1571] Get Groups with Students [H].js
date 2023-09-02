/*
####  Get Groups with Students  ####

Create a function that takes two arrays: groups and students. It should return one array with groups merged with students by id. Students within groups should be ordered in the same way the studentIds were ordered.


[Examples]

___
getGroupsWithStudents([
  { 
    id: 1,
    name: "G1",
    studentIds: [2, 1]
  }
], [
  { 
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Steve"
  }
]) ➞ [
  { 
    id: 1,
    name: "G1",
    students: [
      {
        id: 2,
        name: "Steve"
      },
      { 
        id: 1, 
        name: "John"
      }
    ]
  }
]
_____



[Notes]

Try doing it with an arrow function.


[arrays] [formatting] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.find()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

