/*
####  Open All Cells If Possible  ####

The function is given a list of lists of certain length n. Each element in the list is a cell marked by the list index from 0 to n - 1. Each cell contains keys - as list of integers - to other cells in the list. The cell 0 is open; that is where you find first keys to other cells. Open those cells and find new keys again. Go open other cells with new keys. Keep on repeating opening new cells while you discover new keys. Given the keys placement in different cells, determine if it is possible to open all cells, return true / false.


[Examples]

___
openAll([[1], [0]]) ➞ true
// Cell_0 has a key to cell_1. It is possible to open all two cells.

openAll([[1], [2], [3], []]) ➞ true
// The placement allows to open all cells in a row.

openAll([[1, 3], [3, 0, 1], [2], [0]]) ➞ false
// It is not possible to open cell_2.

openAll([[2, 1], [1], [2], [4], [0, 1]]) ➞ false, "open only 0, 1, 2"
// It is possible to open only cells 0, 1, 2. Cells 3, 4 stay closed.
_____



[Notes]

It is possible that a cell contains keys to already open cells. This is fine; just try to open as many cells as possible.


[algorithms] [arrays] [games] [logic] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

