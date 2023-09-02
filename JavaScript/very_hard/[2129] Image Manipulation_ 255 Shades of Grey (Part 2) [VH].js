/*
####  Image Manipulation: 255 Shades of Grey (Part 2)  ####

Images can be described as 3D arrays.
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

Your task is to create a function that takes a 3D array representation of an image and returns the grayscale version of that.


[Examples]

___
grayscale([
  [[0, 0, 0], [0, 0, 157]],
  [[1, 100, 0], [0, 10, 0]]
]) ➞ [
  [[0, 0, 0], [52, 52, 52]],
  [[34, 34, 34], [3, 3, 3]]
]
_____



[Notes]

___
*) A valid RGB value ranges from 0 to 255 (inclusive).
*) If the given array contains out of bound values, convert them to the nearest valid one.
*) Previous challenge in this series: Image Manipulation: Invert (Part 1)
*) Grayscaling an image is adjusting to have the same amount of (Red, Green, Blue) from their combined average to produce different shades of gray.
___



[algorithms] [arrays] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Grayscale to RGB Conversion
https://www.tutorialspoint.com/dip/grayscale_to_rgb_conversion.htm
Now we will convert an color image into a grayscale image. There are two methods to convert it. Both has their own merits and demerits. The methods are: Average method …
_________

*/
//Your code should go here:

