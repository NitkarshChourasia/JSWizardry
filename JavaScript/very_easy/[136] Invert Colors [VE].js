/*
####  Invert Colors  ####

Create a function that inverts the rgb values of a given tuple.


[Examples]

___
colorInvert([255, 255, 255]) ➞ [0, 0, 0]
//! (255, 255, 255) is the color white.
//! The opposite is (0, 0, 0), which is black.

colorInvert([0, 0, 0]) ➞ [255, 255, 255]

colorInvert([165, 170, 221]) ➞ [90, 85, 34]
_____



[Notes]

255 is the max value of a single color channel.


[algebra] [data_structures] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
How to Invert an RGB Color
http://www.vb-helper.com/howto_invert_color.html
You can break a color into its components, use this technique to invert the components, and then use RGB to recombine them into the inverted color. However, there is a …
_________
_________
Invert RGB Color
https://gist.github.com/Xordal/9bf24bc6cbc5a39f62cd
Code for how to invert RGB color js.
_________
_________
How can I generate the opposite color according to current color?
https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
I'm trying to create a color opposite of current color. I mean if current color is black, then I need to generate white.
_________

*/
//Your code should go here:

function colorInvert(arr) {
    return arr.map((color) => 255 - color);
}

if (require.main == module) {
    // Title
    console.log("####  Invert Colors  ####");
    // Test cases.
    console.log(colorInvert([255, 255, 255])); // [0, 0, 0]
    console.log(colorInvert([0, 0, 0])); // [255, 255, 255]
    console.log(colorInvert([165, 170, 221])); // [90, 85, 34]
}

// 21-09-2023
// complete.