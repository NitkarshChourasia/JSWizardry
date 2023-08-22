/*
####  Kth String in Lexicographic Order  ####

Given a set s of allowed letters, an s-string is a string written using only those letters. For example, if s={"d","g"} then "dgggdgdggd" is an s-string but "dag" is not.
For a fixed set s and max string size m (chosen so that we need only deal with finitely many strings) one can order those strings according to their dictionary/lexicographic order.
For example, if s={"d","g"} and m=3, one obtains the strings:
___
"d","g","dd","dg","gd","gg","ddd","ddg","dgd","dgg","gdd","gdg","ggd","ggg"
_____

...which, once reordered in lexicographic order, become:
___
"d","dd","ddd","ddg","dg","dgd","dgg","g","gd","gdd","gdg","gg","ggd","ggg"
_____



[Goal]

Write a function that when given:
___
*) a set s of allowed letters;
*) a max string size m;
*) a position k;
___

... returns the k-th s-string of max size m according to lexicographic order.


[Examples]

___
kthString({"d", "g"}, 3, 2) ➞ "dd"
// According to the above, the 2-nd string in lexicographic order is "dd".

kthString({"d", "g"}, 3, 10) ➞ "gdd"
// According to the above, the 10-th string in lexicographic order is "gdd".

kthString({"a", "e", "i"}, 2, 6) ➞ "ea"
// The relevant strings, in lexicographic order, are:
// "a", "aa", "ae", "ai", "e", "ea", ee", "ei", "i", "ia", "ie", "ii"
// The 6-th string is "ea".
_____



[Notes]

___
*) Since each test considers only finitely many strings, the challenge is valid only for small enough k (e.g. in the s={"d", "h"}, m=3 case above there are only 14 strings, so the challenge only works for 1<=k<=14). You are free to assume that all tests are valid.
*) The empty string "" is not considered a valid string for the purposes of this challenge. However, you may find it helpful to regard the empty string "" as the 0-th string in lexicographic order (this can help with the algebra of the challenge).
*) I believe that a brute force approach, such as generating all possible strings and then sorting them, is too slow and will not pass all the tests within the 12s time limit. However, more efficient solutions have ample time: for example, my posted solution runs in a fraction of a millisecond.
___



[logic] [math] [sorting] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

