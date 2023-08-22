/*
####  Tidy Hyperlinks  ####

Using markdown, it's possible to format links such as https://edabit.com/challenges, into something tidier like this. Notice how the text "Go to the challenges!" appears when hovering over the link.
This was achieved by using this code:
___
[this](https://edabit.com/challenges "Go to the challenges!")
_____

Given the url, the new name and optionally the hoverText, return the tidied up hyperlink as a string.


[Examples]

___
tidyLink("https://edabit.com/challenges", "this", "Go to the challenges!") ➞ "[this](https://edabit.com/challenges "Go to the challenges!")"

tidyLink("https://www.google.com", "Google", "Google Search") ➞ "[Google](https://www.google.com "Google Search")"

tidyLink("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "Click Me!") ➞ "[Click Me!](https://www.youtube.com/watch?v=dQw4w9WgXcQ)"
_____



[Notes]

___
*) Supply double quotes for the hover text.
*) Keep in mind that some tests will not include an argument for hoverText.
___



[formatting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Template literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
_________

*/
//Your code should go here:

