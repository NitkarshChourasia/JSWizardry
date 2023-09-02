/*
####  Hash Juggling  ####

Create a function that:
___
*) Creates a sha256 hash from an array of strings.
*) Sort the hash string, alphas first digits second, maintaining the original order of alphas and digits (e.g. "7a2f7fdf31a4b" would be sorted as "affdfab727314").
*) Returns a new sha256 hash from the sorted string.
___



[Examples]

___
hashOps(["string1", "string2", "string3"]) ➞ "2d3b990149219819705bfe290571a9dcf5cf2a2528a2c711a57bd430ce32497f"

hashOps(["quick", "brown", "fox"] ) ➞ "7a2f7fdf31a4b14dd4f67e5ca8da3dabd7eac825eac259682e43d7e477b3d378"

hashOps(["i", "am", "not", "a", "crook"]) ➞ "d94ffa741e59d434b9e9e2ed32c2efc128238ba29eaa79cd0283d17a04a2d93f"
_____



[Notes]

Remember to encode your strings.


[arrays] [cryptography] [sorting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
crypto.createHash() method
https://www.geeksforgeeks.org/node-js-crypto-createhash-method/
Is used to create a Hash object that can be used to create hash digests by using the stated algorithm.
_________
_________
SHA-2
https://en.wikipedia.org/wiki/SHA-2
A set of cryptographic hash functions designed by the United States National Security Agency (NSA).[3] They are built using the Merkle–Damgård structure, from a one-way …
_________

*/
//Your code should go here:

