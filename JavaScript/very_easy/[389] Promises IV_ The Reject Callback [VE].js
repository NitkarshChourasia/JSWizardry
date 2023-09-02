/*
####  Promises IV: The Reject Callback  ####

Async operations don't always go as planned. When errors creep up we need to know how to handle them. We can pass the reject callback to our executor function to pass errors to our promise.
___
let promise = new Promise( (resolve, reject) => {
  setTimeout(( ) => {
    /* something went wrong */
     reject('oops!')
  }, 1000)
})
_____

You can pass Error objects as well. Here we pass a simple string "oops!".


[Challenge]

Reject the promise with the simple string "It's not a dog!".


[Notes]

Check the Resources tab for more info on promises.


[functional_programming] 



-------------------------------------------------------------------
[Resources]
_________
Promise Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Constructor
Represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
_________
_________
JS Promise (Part 1 - Basics)
https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53
One of the good Features in ES6 is Promises Object and their useful methods and they are called software abstraction helps to works smoothly with asynchronous operation …
_________
_________
Using Promises
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this g …
_________

*/
//Your code should go here:

