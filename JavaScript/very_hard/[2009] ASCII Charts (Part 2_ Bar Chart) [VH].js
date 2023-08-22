/*
####  ASCII Charts (Part 2: Bar Chart)  ####

Given an object containing quarterly sales values for a year, return a string representing a bar chart of the sales by quarter.
___
*) Quarter names (Q1, Q2, Q3, Q4) should appear on the left.
*) Quarters should be sorted in descending order by value.
*) Quarters with the same value should be shown in their yearly order (Q1 -> Q4).
*) Bars should begin with a "|".
*) Repeat the character "#" to fill the bar, with each character having a value of 50.
*) A single space comes after the bar, then the sales for that quarter.
*) If the value is 0, there should be no space after "|".
*) Use the newline character ("\n") to separate each bar in the chart.
___



[Example #1]

___
barChart({Q4: 250, Q1: 300, Q2: 150, Q3: 0})
➞ "Q1|###### 300\nQ4|##### 250\nQ2|### 150\nQ3|0"
_____

When printed:
___
Q1|###### 300
Q4|##### 250
Q2|### 150
Q3|0
_____



[Example #2]

___
barChart({Q4: 500, Q3: 100, Q2: 100, Q1: 150})
➞ "Q4|########## 500\nQ1|### 150\nQ2|## 100\nQ3|## 100"
_____

When printed:
___
Q4|########## 500
Q1|### 150
Q2|## 100
Q3|## 100
_____



[Notes]

There should be no additional whitespace after each value.


[formatting] [objects] [strings] 



-------------------------------------------------------------------
[Resources]
_________
JavaScript Sort by Two Fields (Example)
https://coderwall.com/p/ebqhca/javascript-sort-by-two-fields
A protip by davidcollingwood about multiple, JavaScript, and sort.
_________
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

