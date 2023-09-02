/*
####  Prison Break  ####

A prison can be represented as an array of cells. Each cell contains exactly one prisoner. A 1 represents an unlocked cell and a 0 represents a locked cell.
___
[1, 1, 0, 0, 0, 1, 0]
_____

Starting inside the leftmost cell, you are tasked with seeing how many prisoners you can set free, with a catch. You are the prisoner in the first cell. If the first cell is locked, you cannot free anyone. Each time you free a prisoner, the locked cells become unlocked, and the unlocked cells become locked again.
So, if we use the example above:
___
[1, 1, 0, 0, 0, 1, 0]
// You free the prisoner in the 1st cell.

[0, 0, 1, 1, 1, 0, 1] 
// You free the prisoner in the 3rd cell (2nd one locked).

[1, 1, 0, 0, 0, 1, 0]
// You free the prisoner in the 6th cell (3rd, 4th, and 5th locked).

[0, 0, 1, 1, 1, 0, 1]
// You free the prisoner in the 7th cell - and you are done!
_____

Here, we have set free 4 prisoners in total.
Create a function that, given this unique prison arrangement, returns the number of freed prisoners.


[Examples]

___
freedPrisoners([1, 1, 0, 0, 0, 1, 0]) ➞ 4

freedPrisoners([1, 1, 1]) ➞ 1

freedPrisoners([0, 0, 0]) ➞ 0

freedPrisoners([0, 1, 1, 1]) ➞ 0
_____



[Notes]

___
*) You are the prisoner in the first cell. You must be freed to free anyone else.
*) You must free a prisoner in order for the locks to switch. So in the second example where the input is [1, 1, 1] after you release the first prisoner, the locks change to [0, 0, 0]. Since all cells are locked, you can release no more prisoners.
*) You always start with the leftmost element in the array (the first prison cell). If all the prison cells to your right are all zeroes, you cannot free any more prisoners.
___



[arrays] [games] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
_________
For Loop
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Array.prototype.reduce()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
_________

*/
//Your code should go here:

