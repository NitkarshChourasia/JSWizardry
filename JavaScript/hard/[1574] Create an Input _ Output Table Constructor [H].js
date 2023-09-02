/*
####  Create an Input / Output Table Constructor  ####

In this task, you will create a constructor function table for an input and output table.
Your constructor function will:
___
*) Have a property this.data (an array) that your table will be stored and accessed.
*) Populate the this.data array with an input and output array for every input.
___

The constructor function will take four arguments:
___
*) func - Function input is entered into, and the output received from.
*) start - Starting point for inputs.
*) end - Last point or maximum input value.
*) step - Amount between inputs.
___



[Examples]

___
const square = n => Math.pow(n, 2)
const half = n => n / 2

const table = function(func, start, end, step)
{
  this.data = []
  // your code here!
}

var myTable = new table(square, -2, 2, 1)
myTable.data ➞ [[-2,4], [-1, 1], [0, 0], [1, 1], [2, 4]]

var myTable = new table(half, -3, 3, 1)
myTable.data ➞ [ [-3, -1.5], [-2, -1], [-1, -0.5], [0, 0], [1, 0.5], [2, 1], [3, 1.5] ]
_____



[Notes]

Check the Resources for help.


[algebra] [data_structures] 



-------------------------------------------------------------------
[Resources]
_________
Object Constructors
https://www.w3schools.com/js/js_object_constructors.asp
Sometimes we need a "blueprint" for creating many objects of the same "type". The way to create an "object type", is to use an object constructor function. In the exa …
_________
_________
JavaScript Arrays
https://www.w3schools.com/js/js_arrays.asp
An array is a special variable, which can hold more than one value at a time. If you have a list of items (a list of car names, for example), storing the cars in singl …
_________

*/
//Your code should go here:

