/*
####  Regex HTML Get Request Checker  ####

You are to create a special regex that will detect if an HTML GET request is valid or not (with some gotchas). Strings are formated like so:
___
name1=val1&name2=val2&name3=val3&name4=val4
_____

You need to detect requests with the four names: "val", "id", "desc", "time" (each value can have a different order).


[Example #1]

___
"val=val1&id=val2&desc=val3&time=val4"

"id=val2&val=val1&time=val4&desc=val3"
_____

Each name has a specific value:



[Example #2]

___
"val=test1151&id=5&desc=helloWorld&time=54:33"

"id=10&val=123test&time=99:00&desc=itsok"
_____

When the regex checker is finished, you need to put all names and their values from the request into an object and return it with the given function dataRegexLovely(). The parameter str is a valid GET request (no gotchas).


[Notes]

___
*) The regex length is limited to < 161 characters ( "/" and [flags] included).
*) You might get an empty string "" when users don't send a request.
*) Warning about data object value types.
___



[regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
HTTP Request Methods
https://www.w3schools.com/tags/ref_httpmethods.asp
The two most common HTTP methods are: GET and POST. GET is used to request data from a specified resource. POST is used to send data to a server to create/update a reso …
_________
_________
Query String
https://en.wikipedia.org/wiki/Query_string
The part of a uniform resource locator (URL) which assigns values to specified parameters. The query string commonly includes fields added to a base URL by a Web browse …
_________
_________
Regex Cheat Sheet
http://www.rexegg.com/regex-quickstart.html
The tables below are a reference to basic regex. While reading the rest of the site, when in doubt, you can always come back and look here. (It you want a bookmark, her …
_________
_________
RegExp Constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
Creates a regular expression object for matching text with a pattern.
_________
_________
Online Regex Tester and Debugger
http://regex101.com/
Online regex tester, debugger with highlighting for PHP, PCRE, Python, Golang and JavaScript.
_________

*/
//Your code should go here:

