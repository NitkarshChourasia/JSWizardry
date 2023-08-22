/*
####  Baseball Batting Average  ####

A baseball player's batting average is calculated by the following formula:
___
BA = (number of hits) / (number of official at-bats)
_____

Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:

The given array represents a season of games. Each array item indicates a player's [hits, official at bats] per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.


[Examples]

___
battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]]) ➞ ".286"

battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]]) ➞ ".350"

battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]]) ➞ ".273"
_____



[Notes]

___
*) The number of hits will not exceed the number of official at-bats.
*) The array includes official at-bats only. No other plate-appearances (walks, hit-by-pitches, sacrifices, etc.) are included in the array.
*) HINT: Think in terms of total hits and total at-bats.
___



[arrays] [formatting] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
How to Find an Average
https://sciencing.com/find-an-average-4717998.html
In mathspeak, what people usually call the "average" is properly known as the "mean" or the "mean number." There are actually two other types of averages – the "mode" a …
_________
_________
String.prototype.substring()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
_________
_________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
_________
_________
forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element. const array1 = ['a', 'b', 'c']; array1.forEach(element => console.log(element));
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________
_________
Math.round()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
Returns the value of a number rounded to the nearest integer.
_________

*/
//Your code should go here:

