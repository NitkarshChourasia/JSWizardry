/*
####  Where's the Bomb?  ####

A large flat field measures 50x50 kilometers. At a time t = 0, a bomb explodes somewhere on the field. There are 3 scattered sensors with synchronized clocks that record the exact time (in seconds) that the sound of the exploding bomb reaches them.
Given the x, y coordinates of each of the 3 sensors and the recorded time of each, find the location of the bomb:
___
bomb([[x1, y1, t1], [x2, y2, t2], [x3, y3, t3]]) ➞ [xb, yb]
// Bomb location
_____



[Examples]

___
bomb([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]]) ➞ [0, 25]

bomb([[0, 50, 145.773], [50, 50, 206.154], [50, 0, 145.773]]) ➞ [0, 0]

bomb([[5, 8, 48.872], [12, 21, 35.107], [24, 20, 22.203]]) ➞ [21, 13]

bomb([[18, 42, 35.558], [39, 16, 106.004], [7, 24, 32.202]]) ➞ [8, 35]
_____



[Notes]

___
*) The origin is at one corner of the square field so all the coordinates are positive integers in km units.
*) The bomb's coordinates are integers.
*) The speed of sound in air is 0.343 km/sec.
___



[algebra] [algorithms] [arrays] 



-------------------------------------------------------------------
[Resources]
_________
The Distance Formula
https://www.mathwarehouse.com/algebra/distance_formula/index.php
Is derived from the Pythagorean theorem. To find the distance between two points, all that you need to do is use the coordinates of these ordered pairs and apply the fo …
_________

*/
//Your code should go here:

