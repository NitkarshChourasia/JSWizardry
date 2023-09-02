/*
####  Affine Cipher Encrypt  ####

Create a function that takes a string of plain text (English alphabet) all in lowercase, encryption function, and converts the plain text into ciphertext using the affine encryption function.


[Encryption Function]

In the affine cipher, the letters of an alphabet of size m are first mapped to the integers in the range 0 … m − 1. It then uses modular arithmetic to transform the integer that each plaintext letter corresponds to into another integer that corresponds to a ciphertext letter.
The encryption function for a single letter is E(x)=(ax+b)mod m where modulus m is the size of the alphabet and a and b are the keys of the cipher. The value a must be chosen such that a and m are coprime.
The alphabet is going to be the letters a through z and will have the corresponding values a=0, b=1, c=2, d=3 ... z=25.


[Examples]

___
affineEncrypt("salakpur", "(x+2)%26") ➞ "ucncmrwt"
// a = 1 , b = 2
// Encryption function = "(x+2)%26"
// gcd(1, 26) = 1
// Therefore, we apply the encryption function for the letters.

affineEncrypt("dang", "(2x+7)%26") ➞ "2 and 26 are not coprime"
// a = 2, b = 7
// gcd(2, 26) = 2
_____



[Notes]

___
*) For the problem 1 =< a <= 11 , 1 =< b <= 9 , m = 26
*) Create your own gcd function.
___



[cryptography] [language_fundamentals] [math] 



-------------------------------------------------------------------
[Resources]
_________
Affine Cipher
https://en.wikipedia.org/wiki/Affine_cipher
The affine is a type of monoalphabetic substitution cipher, where each letter in an alphabet is mapped to its numeric equivalent, encrypted using a simple mathematical …
_________

*/
//Your code should go here:

