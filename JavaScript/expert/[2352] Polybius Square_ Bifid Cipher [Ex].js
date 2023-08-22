/*
####  Polybius Square, Bifid Cipher  ####

The basic Polybius Square is a 5x5 square grid with the letters A-Z written into the grid. "I" and "J" typically share a slot (as there are 26 letters and only 25 slots).

The Bifid cipher uses the Polybius square but adds a layer of complexity.
Start with a secret message. Remove spaces and punctuation.
___
plaintext = "ikilledmufasa"
_____

Encipher the message using the basic Polybius cipher (see my previous challenge — right click and select "open in new tab"), but write the numbers in two rows under the message, like so:

Read off the numbers horizontally, in pairs:
___
22 23 31 13 42 14 14 54 11 54 25 11 31
_____

Generate the ciphertext by converting these new pairs of numbers into new letters using the Polybius square.
___
ciphertext = "ghlcrddyaykal"
_____

Create a function that takes a plaintext or ciphertext, and returns the corresponding ciphertext or plaintext.


[Examples]

___
bifid("I killed Mufasa!") ➞ "ghlcrddyaykal"

bifid("ghlcrddyaykal") ➞ "ikilledmufasa"

bifid("hi") ➞ "go"
_____



[Notes]

N/A


[arrays] [cryptography] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Polybius Square Cipher
https://www.braingle.com/brainteasers/codes/polybius.php
A Polybius Square is a table that allows someone to translate letters into numbers. To give a small level of encryption, this table can be randomized and shared with th …
_________

*/
//Your code should go here:

