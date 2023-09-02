/*
####  What's the Closest Major Event?  ####

Given an array of objects containing some of the major historical events and a date object, you should return the name of the historical event that is closest to that date.
An historical event object contains 2 properties, this is an example:
___
{
  date: '2005-08-23',
  name: 'Hurricane Katrina'
}
_____

⚠️ You can see the full array in the Tests tab.


[Examples]

___
closestEvent(events, new Date(1990, 0, 1)) ➞ Fall of the Berlin Wall

closestEvent(events, new Date(2005, 0, 1)) ➞ Indian Ocean Earthquake and Tsunami Disaster

closestEvent(events, new Date()) ➞ Fukushima Nuclear Disaster
_____



[Notes]

N/A


[arrays] [dates] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
_________

*/
//Your code should go here:

