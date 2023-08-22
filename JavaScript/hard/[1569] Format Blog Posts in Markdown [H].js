/*
####  Format Blog Posts in Markdown  ####

You are tasked with grabbing some blog posts from an API and formatting them using markdown, so that your coworker (who has no idea what markdown is) can publish them with ease on your company's website.
You already figured out how to get the posts and the associated users from the API, now you just need to write a function that takes that data and formats it in a markdown string. The rules are as follows:
___
*) The title should start with an uppercase character and be displayed as an H1.
*) Add 2 newlines after the title.
*) The metadata of the post has the following format: Written by <author> on <date>

The <author> part is a link where the text is the author's firstName and lastName (separated by a space), while the href is a mailto:<author email>.
The <date> part is the date of the post and the format is the following: <weekday>, <month> <date>, <year>
Weekday is in short form (Thu, Sun, …)
Month is in long form (April, December, …)
Date is in 2 digits form (01 - 31)
Year is always in extended form (2018)
*) Add 2 newlines after the metadata.
*) The separator is an horizontal line, in markdown it's written like this: ---.
*) Add 2 newlines after the separator.
*) The body of the post is already properly formatted and is the last thing you must add.
___



[Data structure]







[Examples]

Input:
___
formatBlogPost(
  {
    id: 1,
    userId: 10,
    timestamp: 1536581919628,
    title: 'varius ut blandit non interdum in ante',
    body:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
  },
  users, // Array of objects, see structure above
);
_____

Output (as a string):
___
# Varius ut blandit non interdum in ante

Written by [Sigismond Reavell](mailto:sreavell9@cargocollective.com) on Mon, September 10, 2018

---

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
_____



[Notes]

___
*) Feel like formatting the dates is tedious? It doesn't have to be! Check out the Resources tab for a painless way to format them.
*) If you're new to markdown or you don't remember something, check out the Resources tab for a refresher. Some elements can be written in multiple styles, so be careful to use the correct one for this challenge.
___



[arrays] [dates] [formatting] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Date.prototype.toLocaleDateString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
Returns a string with a language sensitive representation of the date portion of this date. The new locales and options arguments let applications specify the language …
_________
_________
Markdown Cheatsheet
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
This is intended as a quick reference and showcase. For more complete info, see John Gruber's original spec and the Github-flavored Markdown info page.
_________

*/
//Your code should go here:

