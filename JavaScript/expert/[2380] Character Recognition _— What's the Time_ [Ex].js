/*
####  Character Recognition ⁠— What's the Time?  ####

As a programmer in a forensic laboratory, you have been asked to write a function to decode a bitmap image of a digital clock to determine what time it was when the image was created. The bitmap image has been converted to a string of binary digits 0 or 1 where 0 represents a white background pixel and 1 represents a black pixel. You must convert this binary string into a time in hours and minutes in the form hh:mm (e.g. 09:47).
The clock face shows the time in a black on white background where each character is three cells wide and five cells deep. Notice there is a space between the numbers represented by a column of blank cells:



Each image is 17 bits wide by 5 bits deep. Each row is encoded as a 17 character string of 1s and 0s and the five rows are then concatenated into an 85 character string which is passed to your function. For example, the above image is encoded as follows:
___
row 1 = "11100100001110111"
row 2 = "10101100100010100"
row 3 = "10100100001110111"
row 4 = "10100100100010001"
row 5 = "11101110001110111"

bitmap -> "1110010000111011110101100100010100101001000011101111010010010001000111101110001110111"
_____

If you examine the above rows maps carefully, you should be able to see the clock digits in the pattern of 1, The first three columns show the number 0, this is followed by a column of all 0 representing a space between the numbers, then comes another three columns representing the number 1, then three columns representing the character :, then three columns representing 3, a column of zeroes representing a space and finally three columns representing the number 5. The resulting time is 01:35.


[Example]

___
whatsTheTime("1110010000111011110101100100010100101001000011101111010010010001000111101110001110111") ➞ "01:35"
_____



[Notes]

There are no errors in the encoding, so you don't need to check for near matches.


[arrays] [data_structures] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
Holds key-value pairs and remembers the original insertion order of the keys.
_________

*/
//Your code should go here:

