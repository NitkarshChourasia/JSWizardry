/*
####  Find Value in a Binary Tree  ####

An array that represents a Binary Tree is in the following form:
___
binaryTree = [val, arrLeft, arrRight]
_____

When arrLeft is the left side of the tree and arrRight is the right side of the tree.
To illustrate:
___
const arr1 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]

// arr1 represents the following Binary Tree:

                    3
                   / \
                  8   7
                 /\   /\
                5  N N  N
               /\
               N N

// Where N represents null.
_____

Create a function that takes an array that represent a Binary Tree and a value and return true if the value is in the tree and, false otherwise.


[Examples]

___
valueInTree(arr1, 5) ➞ true

valueInTree(arr1, 9) ➞ false

valueInTree(arr2, 51) ➞ false
_____



[Notes]

The tree will contain integers only and will be presented by an array in the specified format.


[data_structures] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Flat Infinity
https://gist.github.com/nimahkh/8dd36bcd628e71dc9a520b6efe2a0d92
Javascript flat infinity.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Array.prototype.flat()
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
_________
_________
Array flat() Method
https://www.javascripttutorial.net/es-next/javascript-array-flat/
Flatten an array to infinity.
_________

*/
//Your code should go here:

