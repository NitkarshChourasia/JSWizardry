/*
####  Password Challenge  ####

A certain security system is responsible for maintaining a code capable of generating a key for each respective lock key = code % lock .This security system has a key ( mainKey) and its respective lock( main_lock) that are fixed and serve as a base to update all the others. To maintain security, after a certain lock is accessed 10 times with the wrong key they update its lock value lock = lock + mainKey.
A hacker was able to steal the main_key and the main_lock but he has no idea what the code is. Write a function that returns how many attempts the hacker needs to be sure he is able to find certain lock key, if that is impossible return "system with a high level of security".
Will be provided: mainKey, mainLock and lockX (the one you have to find how many attempts to figure the key_x).


[Examples]

___
hack(1, 2, 8) ➞ 4
// With only four attempts it is possible to access the lock.

hack(1, 2, 13) ➞ 17

hack(5, 101, 111) ➞ 996

hack(10, 101, 111) ➞ "system with a high level of security"
_____



[Notes]

All the inputs will be positive integers less than 10^6.


[cryptography] [logic] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

