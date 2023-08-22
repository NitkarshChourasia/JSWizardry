/*
####  Height of the Tallest Building  ####

Given an array of strings (depicting a skyline of several buildings), return in meters the height of the tallest building. Each line in the list represents 20m.


[Examples]

___
tallestBuildingHeight([
  "            ##",
  "            ##",
  "            ##",
  "###   ###   ##",
  "###   ###   ###",
  "###   ###   ###",
  "###   ###   ###"
]) ➞ "140m"

// Tallest building is 7 rows
// 7 x 20m = 140m

tallestBuildingHeight([
  "               ",
  "               ",
  "               ",
  "       #    ###",
  "      # #   ###",
  "###   ###   ###",
  "###   ###   ###"
]) ➞ "80m"

// tallest building is 4 rows
// 4 x 20m = 80m

tallestBuildingHeight([
  "                              ",
  "                         ###  ",
  "                         ###  ",
  "###                    #####  ",
  "###      #             #####  ",
  "###     ###            #####  ",
  "######  ###            #######",
  "######  ######  ###    #######",
  "###################    #######",
  "###############################",
  "###############################"
]) ➞ "200m"

// Tallest building is 10 rows
// 10 x 20m = 200m
_____



[Notes]

___
*) There may be some open sky above buildings (can't just find the length of the array).
*) There may be multiple tallest buildings (see example #2).
___



[arrays] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.findIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
_________

*/
//Your code should go here:

