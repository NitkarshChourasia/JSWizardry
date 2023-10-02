/*
####  Radians to Degrees  ####

Create a function that takes an angle in radians and returns the corresponding angle in degrees.


[Examples]

___
radiansToDegrees(1) ➞ 57.29577951308232

radiansToDegrees(20) ➞ 1145.9155902616465

radiansToDegrees(50) ➞ 2864.7889756541163
_____



[Notes]

N/A


[logic] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Radians to Degrees Conversion
https://www.rapidtables.com/convert/number/radians-to-degrees.html
Radians to degrees angle conversion calculator and how to convert.
_________
_________
Radian to Degree Measure
https://www.varsitytutors.com/hotmath/hotmath_help/topics/radian-to-degree-measure
The measure of an angle is determined by the amount of rotation from the initial side to the terminal side.
_________
_________
Math.PI Property
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
Represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.
_________
_________
Radians to Degrees Formula
https://www.google.com/search?q=radians+to+degrees+formula&sxsrf=APq-WBsdARi1WHQf4j-NvyGjZQFEEOjRlQ%3A1648221224408&ei=KNw9YoDCGMrl2roP6L2JiAw&oq=radians+to+degrees+for&gs_lcp=Cgdnd3Mtd2l6EAMYADIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BwgAEEcQsAM6BwgAELADEEM6CggAEOQCELADGAE6FQguEMcBENEDENQCEMgDELADEEMYAjoPCC4Q1AIQyAMQsAMQQxgCOgQIIxAnSgQIQRgASgQIRhgBUJcDWLELYLgTaAFwAXgBgAGlA4gB6wiSAQkwLjEuMi4wLjGYAQCgAQHIARHAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz
To convert radians to degrees, use this formula = Radian measure × (180°/π). The final unit of measure will be (°). 1 rad equals 57.296°.
_________
_________
Converting Radians to Degrees and Degrees to Radians
https://www.mathwarehouse.com/trigonometry/radians/convert-degee-to-radians.php
How to convert radians to degrees and back lesson explained with interactive applet, pictures and several practice problems.
_________

*/
//Your code should go here:


function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

if (require.main == module) {
    console.log(radiansToDegrees(1));
    console.log(radiansToDegrees(20));
    console.log(radiansToDegrees(50));
}

// 05-09-2023
// complete.