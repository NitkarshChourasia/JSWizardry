/*
####  Affine Cipher Decrypt  ####

Create a function that takes a string of ciphertext (English alphabet) all in lowercase, encryption function, and converts it into plain text using the affine decryption function.


[Decryption Function]

In the affine cipher, the letters of an alphabet of size m are first mapped to the integers in the range 0 … m − 1. It then uses modular arithmetic to transform the integer that each plaintext letter corresponds to into another integer that corresponds to a ciphertext letter. The encryption function for a single letter is E(x)=(ax+b)mod m where modulus m is the size of the alphabet and a and b are the keys of the cipher. The value a must be chosen such that a and m are coprime.
The decryption function is D(x)=a^(-1)*(x-b)mod m where a^(-1) is the modular multiplicative inverse of a modulo m ie a * a^(-1) mod m == 1. The multiplicative inverse of a only exists if a and m are coprime. Hence without the restriction on a, decryption might not be possible.
The alphabet is going to be the letters a through z and will have the corresponding values a=0, b=1, c=2, d=3 ... z=25.


[Examples]

___
affineDecrypt("ucncmrwt", "(x+2)%26") ➞ "salakpur"
// a = 1, b = 2, encryption = "(x+2)%26".
// Modular Multiplicative Inverse of 1 =  1.
// We apply the decryption function for the letters.

affineDecrypt("hezmrc", "(3x+4)%26") ➞ "bahuni"
// a = 3, b = 4, encryption = "(x+2)%26".
// Modular Multiplicative Inverse of 3 = 9.
// We apply the decryption function for the letters.
_____



[Notes]

For the problem 1 =< a <= 11 , 1 =< b <= 9 , m = 26


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

