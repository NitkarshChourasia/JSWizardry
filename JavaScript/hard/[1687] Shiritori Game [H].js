/*
####  Shiritori Game  ####

This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two rules:

Below is an example of a Shiritori game:
___
["word", "dowry", "yodel", "leader", "righteous", "serpent"]  // valid!

["motive", "beach"]  // invalid! - beach should start with "e"

["hive", "eh", "hive"]  // invalid! - "hive" has already been said
_____

Write a Shiritori class that has two instance properties:
___
*) words: an array of words already said.
*) game_over: a boolean that is true if the game is over.
___

and two instance methods:
___
*) play: a method that takes in a word as an argument and checks if it is valid (the word should follow rules #1 and #2 above).

If it is valid, it adds the word to the words array, and returns the words array.
If it is invalid (either rule is broken), it returns "game over" and sets the game_over boolean to true.
*) restart: a method that sets the words array to an empty one [] and sets the game_over boolean to false. It should return "game restarted".
___



[Examples]

___
my_shiritori = Shiritori.new()

my_shiritori.play("apple") ➞ ["apple"]
my_shiritori.play("ear") ➞ ["apple", "ear"]
my_shiritori.play("rhino") ➞ ["apple", "ear", "rhino"]
my_shiritori.play("corn") ➞ "game over"

// Corn does not start with an "o".

my_shiritori.words ➞  ["apple", "ear", "rhino"]

// Words should be accessible.

my_shiritori.restart() ➞ "game restarted"
my_shiritori.words ➞ []

// Words array should be set back to empty.

my_shiritori.play("hostess") ➞ ["hostess"]
my_shiritori.play("stash") ➞ ["hostess", "stash"]
my_shiritori.play("hostess") ➞ "game over"

// Words cannot have already been said.
_____



[Notes]

___
*) The play method should not add an invalid word to the words array.
*) You don't need to worry about capitalization or white spaces for the inputs for the play method.
*) There will only be single inputs for the play method.
*) Read more about Shiritori in the Resources tab.
___



[classes] [control_flow] [games] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not int …
_________
_________
Shiritori Game
https://en.wikipedia.org/wiki/Shiritori
Shiritori (しりとり) is a Japanese word game in which the players are required to say a word which begins with the final kana of the previous word. No distinction is made b …
_________

*/
//Your code should go here:

