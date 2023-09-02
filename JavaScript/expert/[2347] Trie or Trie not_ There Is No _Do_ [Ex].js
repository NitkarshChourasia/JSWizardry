/*
####  Trie or Trie not: There Is No "Do"  ####

A trie (pronounced "try") is a particular type of tree data structure that breaks a word (or another similar linear bit of data) into individual pieces (i.e., letters) and then stores that broken-up word in a way that similar words are computationally easy (== quick) to find. Confused? Look at the following example trie:
___
    words: car, cats, coat
        . <--- Root node
       /  \
      c   (other stuff)
     / \
    a   o
   / \    \
 r*   t     a
       \     \
       s*     t
 * = end of a word
_____

To find whether our trie contains a particular word, we start at the root node. We then check each letter in our candidate word sequentially, checking to see whether our current node has any children that match that letter. Let's do an example with the word "cats": 1. Start at the root node. 2. Take the first letter of 'cats', c. 3. Does the root node have a child node that matches c? Yes! 4. Move to the c node. 5. Take the second letter of 'cats', a. 6. Does the root node have a child node that matches a? Yes! 7. And so on.
There are two things to note here:



[Trie-ing Times (Use Cases)]

One of the most common uses of Tries in the real world is in auto-suggests. You've seen this (occasionally probably to your confusion/amusement) in search engines like Google when typing in a word or phrase. Google will attempt to fill in the rest of your search query before you even finish typing it! Let's trie to think about how that might work:
While it could just search through literally every search that's ever been submitted, that's pretty slow. Instead, it (probably!) uses a trie or trie-like structure. So let's say you type "c". Google will then say "okay, only include queries beginning with the letter 'c'". Next, you type "a". Google says "alrighty, only include words with the letters 'ca'". And so on, until you either finish typing your query or click one of the suggested queries.
That's what you're going to be doing here.


[Trie It Yourself (Instructions)]

Here's what you'll need to do:



[Notes]

___
*) For the sake of simplicity, only consider search terms that start with your given input.
*) All strings will consist only of lowercase letters and spaces.
*) Despite the name of this challenge, you're perfectly welcome to use a do...while loop if you feel that would benefit you.
*) Not everything outlined in the "Explanation" section above may be needed, depending on your solution!
*) My solution uses a Depth-First Search based algorithm. Yours may need to also!
*) It is entirely possible to "cheat" this challenge and simply return a hard-coded list of all "correct" answers. However, that's not really the point here. Shame on cheaters!
___



[classes] [data_structures] [objects] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Depth-First Search
https://en.wikipedia.org/wiki/Depth-first_search
You *may* need to use this to actually find the words!
_________
_________
Data Structures: Tries
https://www.youtube.com/watch?v=zIjfhVPRZCg&t=5s
Explains the Trie data structure.
_________

*/
//Your code should go here:

