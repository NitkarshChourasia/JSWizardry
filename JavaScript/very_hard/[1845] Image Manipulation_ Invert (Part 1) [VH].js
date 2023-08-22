/*
####  Image Manipulation: Invert (Part 1)  ####

Images can be described as a 3D array.
___
// This image has only one white pixel:

[
  [[255, 255, 255]]
]
_____

___
// This one is a 2 by 2 black image:

[
  [[0, 0, 0], [0, 0, 0]],
  [[0, 0, 0], [0, 0, 0]]
]
_____

Your task is to create a function that takes a 3D array representation of an image and returns the inverse of that.
For example, white becomes black, black becomes white, etc.


[Examples]

___
invert([
  [[255, 255, 255], [255, 255, 255]],
  [[255, 255, 255], [255, 255, 255]]
]) ➞ [
  [[0, 0, 0], [0, 0, 0]],
  [[0, 0, 0], [0, 0, 0]]
]
_____



[Notes]

___
*) A valid RGB value ranges from 0 to 255 (inclusive).
*) If the given array contains out of bound values, convert them to the nearest valid one.
*) Next challenge in this series: Image Manipulation: 255 Shades of Grey (Part 2)
___



[arrays] [data_structures] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Invert an RGB Color
http://www.vb-helper.com/howto_invert_color.html
You can break a color into its components, use this technique to invert the components, and then use RGB to recombine them into the inverted color. However, there is a …
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
_________

*/
//Your code should go here:

