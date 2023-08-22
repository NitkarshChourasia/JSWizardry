/*
####  Bitmap Image Conversion  ####

Write a function that converts a bitmap image of a digital clock (represented as a string of the form: hh:mm) into its representational bit string. A bitmap image is a by-product of parsing bits (0's and 1's) from a canvas which is basically an image in black on a white background, where 0 represents the white background and 1 represents the black pixel (it's what an image is composed of, technically). The general idea of this challenge is to encode a bitstring that reflects the image of a digital clock (of this format: hh:mm). The images below are basic examples of how these are conceived.
The clock face shows the time in a black on white background where each character is three cells wide and five cells deep. Notice there is a space between the numbers represented by a column of blank cells:



Each image is 17 bits wide by 5 bits deep. Each row is encoded as a 17 character string of 1s and 0s and the five rows are then concatenated into an 85 character string. For example, the above image is encoded as follows:
___
row 1 = "11100100001110111"
row 2 = "10101100100010100"
row 3 = "10100100001110111"
row 4 = "10100100100010001"
row 5 = "11101110001110111"

bitmap -> "1110010000111011110101100100010100101001000011101111010010010001000111101110001110111"
_____

Looking at the above rows and examining it carefully, you should be able to see the clock digits in the pattern of 1's. The first three columns show the number 0, followed by a column of all 0s representing a space between the numbers, then comes another three columns representing the number 1, then three columns representing the character :, then three columns representing 3, a column of zeroes representing a space and finally three columns representing the number 5. The resulting time is 01:35.


[Example]

___
toBitString("05:44") ➞ "1110111000101010110101000101010101101011100011101111010001010001000111101110000010001"

toBitString("12:13") ➞ "0100111000010011111000010101100001010011100001001110100100010010000111101110001110111"

toBitString("12:17") ➞ "0100111000010011111000010101100001010011100001000010100100010010000111101110001110001"

toBitString("06:46") ➞ "1110100000101010010101000101010100101011100011101111010101010001010111101110000010111"
_____



[Notes]

This is a reversal of this challenge which was published by @persolut.


[regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
How to create dictionary and add key–value pairs dynamically?
https://www.geeksforgeeks.org/how-to-create-dictionary-and-add-key-value-pairs-dynamically/
In this article, we will discuss how we can create a dictionary in JavaScript and add key-value pairs in it. Actually there is no ‘dictionary’ type in JavaScript but we …
_________

*/
//Your code should go here:

