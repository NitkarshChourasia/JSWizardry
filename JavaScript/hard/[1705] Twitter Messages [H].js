/*
####  Twitter Messages  ####

John realised that many of his tweets on Twitter are under 140 characters. He wishes to make full use of the allocated space by using any of the remaining space by filling it in with lolololol until he hits 140 characters.
For example, if his message is:
___
"What a wonderful day!"
_____

He instead wants to tweet:
___
"What a wonderful day!lololololololololololololololololololololololololololololololololololololololololololololo
lolololololololololololololol"
_____

Note that the "lololol ..." part must always end with an "l". To achieve this, you may leave a space between the message and the start of the "lolololol ..." part.
That is to say:
___
"Odd"
_____

Will become:
___
"Oddlolololololololololololololololololololololololololololololololololololololololololololol
olololololololololololololololololololololololol"

# Without a space.
_____

And ...
___
"Even"
_____

Will become:
___
"Even lololololololololololololololololololololololololololololololololololololololololololololololol
olololololololololololololololololololol"

# With a space.
_____

Help John code a function that will take in the string of his message without the lololol part and return a string containing a tweet as per John's specifications.


[Examples]

___
pad("Even") ➞ "Even lololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol"

pad("Odd") ➞ "Oddlolololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol"

pad("I love the new challenge") ➞ "I love the new challenge lololololololololololololololololololololololololololololololololololololololololololololololololololololololololol"

pad("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor purus, finibus eget magna vel, suscipit semper nibh. Quisque posuere.") ➞ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor purus, finibus eget magna vel, suscipit semper nibh. Quisque posuere."
_____



[Notes]

N/A


[formatting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________

*/
//Your code should go here:

