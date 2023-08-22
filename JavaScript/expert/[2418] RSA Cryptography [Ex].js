/*
####  RSA Cryptography  ####

RSA cryptography is a method by which two parties can securely share information without having to exchange any "secret codes" that would allow an attacker to compromise security. The process revolves around picking two prime numbers, p and q, which are used to calculate public and private keys. The public key is used to encrypt a message, but is useless at decryption.
Your task is to create two functions:


[Encryption]

___
RSAEncrypt(txt, n, k) ➞ ctxt
_____

txt is the plaintext to be encrypted. The two numbers n and k are the public key. ctxt is the ciphertext.
Since the algorithm only works for numbers, txt is actually a number formed by concatenating the ASCII values of the uppercase letters in the message. For example, "cab" would be represented as 676566 (ord("C")==67). During decryption, the process would be reversed in order to retrieve the letters.


[Decryption]

___
RSADecrypt(ctxt, p, q) ➞ txt
_____

ctxt is the ciphertext (actually a number). p, q are the aforementioned primes.
The Resource that I have chosen, "The RSA Algorithm Explained Using Simple Pencil and Paper Method", should give you enough information to make these two functions. You will find that when you determine the value of k, several choices are available. For the purpose of this challenge, you are to pick the smallest possible value of k, as was done in the Resource.


[Examples]

___
RSAEncrypt("bad",891877236769,5) ➞ 493825093669
RSADecrypt(493825093669,900007,990967) ➞ "BAD"

RSAEncrypt("bad boy",5664239440446477941, 7) ➞ 605656648845318147
RSADecrypt(605656648845318147,3255706151,1739788291) ➞ "BAD BOY"
_____



[Notes]

___
*) You may find that determining the value of the private key, j, is difficult when p and q are large. Mathematically speaking, j is the modular inverse of k(mod z).
*) See the added Resources.
___



[algorithms] [cryptography] [math] 



-------------------------------------------------------------------
[Resources]
_________
The RSA Algorithm Explained Using Simple Pencil and Paper Method
http://sergematovic.tripod.com/rsa1.html
OK, here is what we want to do: We have a "piece of data" that we want to somehow "scramble" so nobody can learn what this data is, and we want to send this data over u …
_________

*/
//Your code should go here:

