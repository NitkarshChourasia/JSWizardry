/*
####  Hidden in Plain Sight  ####

This challenge makes use of a modified Baconian (Francis Bacon) cipher. The following is an example of a (modified) Baconian ciphertext:
___
ciphertext = "KNowlEDgE ITsElf Is power."
_____

The peculiar capitalisation might, at first glance, suggest that either the lowercase or uppercase letters contain, or code for, the hidden message (upper = "KNEDEITEI", lower = "owlgslfspower").
But actually, the Baconian cipher is a steganographic method of hiding information. The hidden message is not in the content of the ciphertext, but rather in the presentation. It doesn't matter which letters are capitalised, just the order of the capitalisation.
To decipher the ciphertext above, remove spaces and punctuation, then cleave the message into chunks of length 5, leaving out the remainder:
___
ciphertext = "KNowl EDgEI TsElf Ispow"
_____

Each chunk represents a letter. Decipher them according to the following table ("u" means uppercase, "l" means lowercase):

___
deciphered = "help"
_____

Create a function that takes 1 or 2 arguments:

If only one argument is given (ciphertext), return the deciphered message (in lowercase, with spaces and full stops as encoded).
If a second argument is given, encipher the first argument msg into the mask, and return the resulting ciphertext. When enciphering, encipher full stops and spaces along with the words. Disregard the rest. The ciphertext itself should retain all the punctuation and spaces of the original mask.


[Examples]

___
baconify("KNowlEDgE ITsElf Is power.") ➞ "help"

baconify("Help me.", "Man prefers to believe what he prefers to be true.") ➞ "MAn prEFeRS To BelIeve what he PreFERS tO Be truE."
// Both the space (between "help" and "me") and the full stop at the end are enciphered.

baconify("Help!!!", "Knowledge itself is power.") ➞ "KNowlEDgE ITsElf Is power."
// Exclamation marks not enciphered, so the resulting ciphertext is identical to the first example.
_____



[Notes]

N/A


[conditions] [cryptography] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Alphabet Object Mapping
https://pastebin.com/tVDuyZwa
{ 'a': 'uuuuu', 'b': 'uuuul', 'c': 'uuulu', 'd': 'uuull', 'e': 'uuluu', 'f': 'uulul', 'g': 'uullu', 'h': 'uulll', 'i': 'uluuu', 'j': 'uluul', 'k': …
_________
_________
Bacon's Cipher
https://en.m.wikipedia.org/wiki/Bacon's_cipher
Bacon's cipher or the Baconian cipher is a method of steganography (a method of hiding a secret message as opposed to just a cipher) devised by Francis Bacon in 1605.[1 …
_________

*/
//Your code should go here:

