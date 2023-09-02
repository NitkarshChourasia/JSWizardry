/*
####  Playfair Cipher  ####

The Playfair cipher is a substitution cipher that uses digraphs (pairs of letters) instead of single letters, and makes use of symmetrical encryption.
There are some variations on the rules of encipherment. One version of the cipher rules is outlined below:

___
keyword = python
_____

___
*) First, fill in the keyword at the top of the grid, omitting any duplicates (3rd example's keyword has two occurrences of "h". The second one should be omitted).

				
P	Y	T	H	O
N				
				
				
				
*) Next, fill in the rest of the slots with the leftover letters of the alphabet that are not in the keyword. Classically, "I" and "J" share a slot (some people elect to omit "Q", "V", or "Z" instead).

				
P	Y	T	H	O
N	A	B	C	D
E	F	G	I/J	K
L	M	Q	R	S
U	V	W	X	Z
___


___
message = "Tomorrow we attack."

message = "tomorrowweattack"

message = "to mo rr ow we at ta ck"
_____


___
message = "to mo rx ro ww ea tt ac k"
_____

Note how shifting the pairings rightward after inserting an 'x' after the first 'r' has created two more double letter digraphs. Correct them sequentially.
___
message = "to mo rx ro wx we at ta ck"
_____

This insertion corrected both double letter digraphs, and evened out the message length. No more changes are necessary.

___
*) If the two letters are on the same row, as is the case for the first digraph "to", replace each letter with the letter to its right, wrapping around to the beginning of the row if necessary.
___

___
to -> hp
_____

___
*) If the two letters are on the same column, as in the third digraph "rx", replace each letter with the letter beneath it, wrapping around to the top if necessary
___

___
rx -> xh
_____

___
*) If the two letters have dissimilar rows and columns, as in the second digraph "mo", visualise a rectangle with these letters at opposite vertices, then find the other two vertices. Replace each letter with the vertex sharing its row. The original letters are rendered in bold below. The cipher letters are italicised and bolded.

				
P	Y	T	H	O
N	A	B	C	D
E	F	G	I/J	K
L	M	Q	R	S
U	V	W	X	Z
___

___
mo -> sy

"to mo rx ro wx we at ta ck" -> "hp sy xh sh xz ug by yb di"
_____

Create a function that takes two strings — a plaintext message or ciphertext str, and a keyword — and returns the corresponding ciphertext or deciphered plaintext (without spaces and with "x" in odd places as appropriate).


[Examples]

___
playfair("Tomorrow we attack.", "python") ➞ "HPSYXHSHXZUGBYYBDI"

playfair("HPSYXHSHXZUGBYYBDI", "python") ➞ "TOMORXROWXWEATTACK"

playfair("MYDZABIFBMENFEQAAE", "rhythm") ➞ "THEXEAGLEHASLANDED"
_____



[Notes]

Check the Resources tab if the explanations here are unclear.


[algorithms] [cryptography] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Playfair Cipher Video
https://www.youtube.com/watch?v=-KjFbTK1IIw
An explanation with examples of how to encode and decode messages with the Playfair Cipher.
_________
_________
Playfair Cipher
https://en.wikipedia.org/wiki/Playfair_cipher
The Playfair cipher or Playfair square or Wheatstone-Playfair cipher is a manual symmetric encryption technique and was the first literal digram substitution cipher. Th …
_________

*/
//Your code should go here:

