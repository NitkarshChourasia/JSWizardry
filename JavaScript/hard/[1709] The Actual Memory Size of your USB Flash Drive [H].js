/*
####  The Actual Memory Size of your USB Flash Drive  ####

Create a function that takes the memory size (ms is a string type) as an argument and returns the actual memory size.


[Examples]

___
actualMemorySize("32GB") ➞ "29.76GB"

actualMemorySize("2GB") ➞ "1.86GB"

actualMemorySize("512MB") ➞ "476MB"
_____



[Notes]

___
*) The actual storage loss on a USB device is 7% of the overall memory size!
*) If the actual memory size was greater than 1 GB, round your result to two decimal places.
*) If the memory size after adjustment is smaller then 1 GB, return the result in MB.
*) For the purposes of this challenge, there are 1000 MB in a Gigabyte.
___



[algebra] [math] [strings] 



-------------------------------------------------------------------
[Resources]
_________
What Is the Actual Storage Loss on a USB Stick
https://www.usb2u.co.uk/articles/2017/11/the-actual-memory-size-of-your-usb-flash-drive/#:~:text=What%20is%20the%20actual%20storage,a%20loss%20of%20around%202GB.
Is roughly 7% of the overall memory size, so for a 32GB device you can expect a loss of around 2GB. This, unfortunately, is a scalable loss as well, so the more memory …
_________

*/
//Your code should go here:

