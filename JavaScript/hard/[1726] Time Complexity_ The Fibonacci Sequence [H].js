/*
####  Time Complexity: The Fibonacci Sequence  ####

One of the first algorithmic sequences you may encounter as a new programmer is the Fibonacci Sequence.
As a (very brief) refresher, the Fibonacci sequence starts with 0 and 1, and subsequently, every nth number is the previous two numbers added together. So 0 and 1 is 1, then 1 and 1 is 2, then 1 and 2 is 3, and so on.
The first seven numbers:
___
1, 1, 2, 3, 5, 8, 13
_____



[The Issue]

The normal, so-called naive way to calculate the Fibonacci sequence involves some bifurcating recursion. For each number, we need to calculate (recursively!) the two numbers before it.
That's great, but the number of recursive calls fibonacci has to make balloons pretty ridiculously; to calculate the 20th number would require running your Fibonacci sequence over twenty thousand times!
___
*) Random facto: If we wrote a function that performed 1 calculation every millisecond, calculating fibonacci(100) would take about 7.9E17 seconds, which is longer than the known age of the universe!
___



[The Solution]

Here's a hint: we don't need to run the fibonacci function that many times. Using a clever programming technique called Dynamic Programming, we can reduce the number of calls to our fibonacci function drastically!


[Your Job]

The current Fibonacci function works fine-ish for really small numbers below about 10. But for anything above about 15-20, it's pretty horrible to your poor little computer. And for numbers above about 40, Edabit's code runner may just give up!
Using Dynamic Programming, see if you can give that function an oil change, some new tires, and some racing stripes!
Rewrite the fibonacci function to calculate all of the given numbers (5, 25, 35, 40, 75) in linear time (that is, less than about 30 ms each)!


[Notes]

___
*) Your function should run in O(n) time.
*) Because Edabit places a 12 second maximum allowed time on code run through it, the current function will fail for larger numbers. This is to be expected.
*) Check the Resources tab if you're stuck.
*) This is my first challenge; feel free to suggest changes!
___



[algorithms] [language_fundamentals] [numbers] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Memoization
https://en.wikipedia.org/wiki/Memoization
Is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the sa …
_________
_________
Time Complexity
https://en.wikipedia.org/wiki/Time_complexity
Is the computational complexity that describes the amount of time it takes to run an algorithm. Time complexity is commonly estimated by counting the number of elementa …
_________

*/
//Your code should go here:

