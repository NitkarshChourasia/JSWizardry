/*
####  One Time Pad Training Program, Pt. 1  ####

“To the future or to the past, to a time when thought is free, when men are different from one another and do not live alone — to a time when truth exists and what is done cannot be undone: From the age of uniformity, from the age of solitude, from the age of Big Brother, from the age of doublethink — greetings!” ⁠— Winston Smith's secret writings in George Orwell's novel "1984"

This first part of the ONE TIME PAD OPERATIONS MANUAL has been designed to train party members within the purview of the Dzerzkian Intelligence Authorities on how to use One Time Pad (OTP) encryption.
This type of encryption offers several advantages over other types of encryption:
___
*) It cannot be cracked (with certain important assumptions. See appendix: "Resources").
*) It can easily be performed by hand, which makes it perfect for field agents (the intended readers of this document).
___


As the name implies, OTP encrypts and decrypts messages with the aid of a secret key (i.e. the pad). Both the sender and the receiver have identical copies of this pad. Each pad is used only once before it is immediately destroyed by both parties.
The encryption and decryption processes are relatively simple:


In our first exercise, we need only concern ourselves with encryption and decryption of the plaincode (steps 2 and 3).
Make two functions: one for encryption and one for decryption. Both functions need only two arguments: either plncode and pad or cypcode and pad, both of which are strings of numbers.
Remember, the plaincode is encrypted using modular arithmetic. For example, if the plaincode digit is 4, and the corresponding pad digit is 6, then the cyphertext digit is (4 – 6) mod 10 = 8. After being sent, the cyphertext 8 can be decrypted using the pad digit 6 and modular addition: (8 + 6) % 10 = 4. A simple way of remembering this is that sometimes you need to add 10 to plaincode digit to keep the result above 0 in the encryption step. As for decryption, if the result is greater than 9, just don't carry the 1.
By convention, the first five digits of the pad are used as a “key ID” and aren't altered in the encryption process. This allows the receiver to identify the appropriate pad for decryption.
___
ENCRYPTION:
KEYID 24955 18424 76969 69 plaincode
63719 78776 82780 83650 47 pad
-------------------------- (-) modular subtraction
63719 56289 36744 93319 22 cyphertext

DECRYPTION:
63719 56289 36744 93319 22 cyphertext
63719 78776 82780 83650 47 pad
-------------------------- (+) modular addition
KEYID 24955 18424 76969 69 plaincode
_____

By convention, the codes are written in groups of five for the sake of organization while performing operations by hand. However, the test case strings contain no spaces for grouping.
In the function encrypt(plncode, pad), the plncode argument should be given as a string that does not include the key ID. It should return the cyphertext as a string that does contain the key ID.
In the function decrypt(cypcode, pad), the cypcode argument should be given as a string that does include the key ID. It should return the plaincode as a string that does not contain the key ID.
If the key IDs for the cyphertext and the pad don't match in the decrypt function, return "Error: Key IDs don't match."


[Examples]

___
encrypt("24955184247696969", "637197877682780836504704874690100607768768") ➞ "6371956289367449331922"

decrypt("6371956289367449331922", "637197877682780836504704874690100607768768") ➞ "24955184247696969"

decrypt("6371956289367449331922", "442878365779404250678127528855846163827272") ➞ "Error: Key IDs don't match."
_____



[Notes]

The functions you make will be built upon in the next section, in which you will also be required to convert from plaintext to plaincode and vice-versa.


[cryptography] [formatting] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

