/*
####  Promises V: Then  ####

So we can use resolve and reject callbacks to help us store async results whether successful or unsuccessful, but what good are those if we don't have access to those results. Thus we have the then function which returns a promise that appends either a fulfilled or rejection handler(callback) or just returns the settled value.
___
let promise = new Promise( (resolve, reject) => {
  setTimeout(( ) => {
     resolve("success!")
  }, 1000)
})

promise.then() // returns the settled value
promise.then((val) => console.log(val)) // logs the result of the **onFufilled** callback
_____



[Challenge]

___
*) Add the necessary pieces to fix the promise and the then function.
*) It should resolve to a message success!.
*) Re-assign the result to the settled value inside the then function.
___



[Notes]

Check the Resources tab for more info on promises.


[functional_programming] 



-------------------------------------------------------------------
[Resources]
_________
Using Promises
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this g …
_________
_________
Promise.prototype.then()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
Returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.
_________
_________
JS Promise (Part 1 - Basics)
https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53
One of the good Features in ES6 is Promises Object and their useful methods and they are called software abstraction helps to works smoothly with asynchronous operation …
_________

*/
//Your code should go here:

