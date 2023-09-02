/*
####  Who Won the League?  ####

The 2019/20 season of the English Premier League (EPL) saw Liverpool FC win the title for the first time despite their bitter rivals, Manchester United, having won 13 titles!
Create a function that receives an alphabetically sorted array of the results achieved by each team in that season and the name of one of the teams. The function should return a string giving the final position of the team, the number of points achieved and the goal difference (see examples for precise format).
The results table is given in the following format:



[Examples]

___
table = [
  ["Arsenal", 38, 14, 14, 10, 8],
  ["Aston Villa", 38, 9, 8, 21, -26],
  ...
  ...
  ["West Ham", 38, 10, 9, 19, -13],
  ["Wolves", 38, 15, 14, 9, 11]
]

EPLResult(table, "Liverpool")
  ➞ "Liverpool came 1st with 99 points and a goal difference of 52!"

EPLResult(table, "Manchester Utd")
   ➞ "Manchester Utd came 3rd with 66 points and a goal difference of 30!"

EPLResult(table, "Norwich")
  ➞ "Norwich came 20th with 21 points and a goal difference of -49!"
_____



[Notes]

___
*) Score 3 points for a win and 1 point for a draw.
*) If teams are tied on points, their position is determined by better goal difference.
*) The input table should be considered immutable - do not make any changes to it!
___



[arrays] [data_structures] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
filter() Method
https://www.w3schools.com/jsref/jsref_filter.asp
Creates an array filled with all array elements that pass a test (provided as a function). Note: filter() does not execute the function for array elements without valu …
_________
_________
map() Method
https://www.w3schools.com/jsref/jsref_map.asp
Creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in …
_________

*/
//Your code should go here:

