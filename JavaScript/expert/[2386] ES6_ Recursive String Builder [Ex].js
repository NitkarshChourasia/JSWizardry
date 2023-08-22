/*
####  ES6: Recursive String Builder  ####

Write a getStringBuilder() function that returns an object. Any arbitrary property of that object will also be an object as will the properties of that object. Recursively. Invoking any of the child objects should return a string generated from the entire property chain.


[Examples]

___
getStringBuilder().Hello.there() ➞ "Hello there"

getStringBuilder().one.two.three.four() ➞ "one two three four"

getStringBuilder().we.live.in.a.society() ➞ "we live in a society"
_____



[Notes]

N/A


[recursion] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Proxy
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
Used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).
_________

*/
//Your code should go here:

