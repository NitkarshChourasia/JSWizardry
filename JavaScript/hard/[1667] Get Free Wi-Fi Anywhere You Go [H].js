/*
####  Get Free Wi-Fi Anywhere You Go  ####

A new 'hacky' phone is launched, which has the feature of connecting to any Wi-Fi network from any distance away, as long as there aren't any obstructions between the hotspot and the phone. Given a string, return how many Wi-Fi hotspots I'm able to connect to.
___
*) The phone is represented as a P.
*) A hotspot is represented as an *.
*) An obstruction is represented as a #. You cannot access a hotspot if they are behind one of these obstructions.
___



[Examples]

___
nonstopHotspot("*   P  *   *") ➞ 3

nonstopHotspot("*  * #  * P # * #") ➞ 1

nonstopHotspot("***#P#***") ➞ 0
_____



[Notes]

___
*) There will be only one phone.
*) No other characters, other than spaces, will appear in the tests.
___



[algorithms] [loops] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a patter …
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________

*/
//Your code should go here:

