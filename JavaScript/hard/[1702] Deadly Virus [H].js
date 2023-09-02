/*
####  Deadly Virus  ####

Mubashir needs your help to identify the spread of a deadly virus. He can provide you with the following parameters:
___
*) A two-dimensional array persons, containing affected persons 'V' and unaffected persons 'P'.
*) Number of hours n, each infected person is spreading the virus to one person up, down, left and right each hour.
___

Your function should return the updated array containing affected and unaffected persons after n hours.


[Examples]

___
persons = [
  ["P", "P", "P", "P", "P"],
  ["V", "P", "P", "P", "P"],
  ["P", "P", "P", "P", "P"],
  ["P", "P", "P", "P", "P"],
  ["P", "P", "P", "P", "P"]
]


deadlyVirus(persons, 0) ➞ [
  ["P", "P", "P", "P", "P"],
  ["V", "P", "P", "P", "P"],
  ["P", "P", "P", "P", "P"],
  ["P", "P", "P", "P", "P"],
  ["P", "P", "P", "P", "P"]
]

deadlyVirus(persons, 1) ➞ [
  ["V", "P", "P", "P", "P"],
  ["V", "V", "P", "P", "P"],
  ["V", "P", "P", "P", "P"],
  ["P", "P", "P", "P", "P"],
  ["P", "P", "P", "P", "P"]
]

deadlyVirus(persons, 2) ➞ [
  ["V", "V", "P", "P", "P"],
  ["V", "V", "V", "P", "P"],
  ["V", "V", "P", "P", "P"],
  ["V", "P", "P", "P", "P"],
  ["P", "P", "P", "P", "P"]
]
_____



[Notes]

N/A


[algorithms] [arrays] [language_fundamentals] [logic] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

