/*
####  Syllabification  ####

The syllabic structure of the Persian language is CV(C)(C). C stands for Consonants and V stands for Vowels. The CV(C)(C) means that there are three types of syllables in Persian:
___
*) CV
*) CVC
*) CVCC
___

Write a function that takes the phonetic transcription of a Persian word as an argument and returns the syllabified word based on the syllabic structure. In other words, put a period between syllables.


[Examples]

___
syllabification("kAr") ➞ "kAr"

syllabification("bArAn") ➞ "bA.rAn"

syllabification("tA") ➞ "tA"

syllabification("deraxt") ➞ "de.raxt"

syllabification("pust") ➞ "pust"

syllabification("lAjevard") ➞ "lA.je.vard"
_____



[Notes]

___
*) Mono-syllabic words don't need syllabification.
*) Persian has six vowels: a, A, e, i, o, u
*) Persian has 23 consonants: p, b, t, d, k, g, G, ?, f, v, s, z, S, Z, x, h, c, j, m, n, r, l, y
*) Try to solve the problem by using RegEx.
___



[Hint]

Since each syllable has only one vowel, it's not necessary to know the consonants. Just knowing that there is only one consonant before the vowel and 0 to 2 consonants after the vowel is enough to solve the challenge.


[regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Persian Phonology
https://en.m.wikipedia.org/wiki/Persian_phonology
The Persian language has between six and eight vowel phonemes and twenty-six consonant phonemes. It features contrastive stress and syllable-final consonant clusters.
_________

*/
//Your code should go here:

