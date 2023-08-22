/*
####  Promises VIII: Old Callback API  ####

You may run into some old asynchronous API that requires you to pass in a callback. Take the setTimeout() function for example:
___
setTimeout(() => saySomething("1 second passed"), 1000)
_____

What if an error occured in the saySomething() function. How could you handle it? Wrap it with a Promise!
There are some elements missing in the wait function, it should return a promise. Create an error handler and assign the error to ERR inside the handler.


[Notes]

___
*) Do not change the function saySomething().
*) You should not have to erase any of the existing code.
*) Check Resources if you get stuck.
___



[functional_programming] 



-------------------------------------------------------------------
[Resources]
_________
Creating A Promise Wrapper for Old Callback API Methods
https://medium.com/bithubph/creating-a-promise-wrapper-for-old-callback-api-methods-fa1b03b82a90
Adapting to asynchronous programming style can be a pain at times. Especially coming from a programming background like php.
_________
_________
Using Promises
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this g …
_________

*/
//Your code should go here:

