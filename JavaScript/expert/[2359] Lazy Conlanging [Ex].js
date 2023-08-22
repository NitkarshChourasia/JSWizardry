/*
####  Lazy Conlanging  ####

You're creating a conlang called Eadibitan. But you're too lazy to come up with your own phonology, grammar and orthography. So you've decided to automatize the proccess.
Write a function that translates an English word into Eadibitan.
English syllables should be analysed according to the following rules:
___
*) Syllables will follow the pattern (C)(C)V(V(V))(C), where C is a consonant and V is a vowel. Parentheses indicate that an element is optional.
*) The pattern CVCV will be analyzed as CV-CV.
*) The pattern CVCCV will be analyzed as CVC-CV
*) The pattern CVCCCV will be analyzed as CVC-CCV
*) Two or three consecutive vowels will always form a diphthong and a triphthong respectively. Meaning they will be grouped in the same syllable.
*) A y should be analyzed as a consonant if followed by a vowel, and as a vowel otherwise.
___

The order of the letters of each syllable should be altered according to the following table:

Any other pattern should be left untouched.


[Examples]

___
eadibitan("edabitian") ➞ "eadibitan"

eadibitan("star") ➞ "tasr"

eadibitan("beautiful") ➞ "ebauitufl"

eadibitan("statistically") ➞ "tasitsitaclyl"
_____



[Notes]

___
*) You can expect only lower case single words as arguments.
*) Obvious Bonus: Try to solve it using RegEx.
___



[cryptography] [formatting] [strings] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

