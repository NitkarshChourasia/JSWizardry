/*
####  Login System (Private Variables)  ####

Emperor Palpatine wants you to create a new login system for the Death Star. Gotta keep out those pesky rebel scum somehow. To that end, your login system must do a number of things.


[New Users]

Firstly, we need to be able to create a new account for any users attempting to register. However, since we don't want those silly Jedi-loving rebels being able to register, only users with the official imperial password palpatineIsMyHomeboy should be able to register. Each new attempt to register a new account needs to either store or at least provide some information:
___
*) The above passphrase
*) The username
*) The password (to be encrypted!)
*) The user's rank
*) The number of incorrect login attempts (initially, zero)
___

Upon successfully creating a user, return "User added!". If the passphrase provided is incorrect, return "You rebel scum!". Otherwise, return "Invalid account!"


[Login]

Next, once the account is created, we need to be able to login into that account. You should be able to pass a username and password to the DeathStar.login() class method (see below for specific structure) and get either a "Welcome back username" or an "Invalid login". For each incorrect login, note the following section.


[Locked Accounts]

Each time a login fails, that account (if it exists) should keep track of the total number of failed logins. If that login fail number hits 4, any login attempts on that account should return "Account locked!".
Each time you log in successfully, reset that incorrect login number to zero!


[Security]

This exercise requires private variables (see the resources tab if you need a refresher!)
You should not be able to access a "password" property on the User class from outside. That is, listing DeathStar.users should return usernames and ranks, but that's it.
You should only be able to access the users' list and the logged-in status if you're logged in. Otherwise, attempting to access either should just return "Not logged in!".


[Class Structure]

(a.k.a., the bit you're probably actually looking for!)
This exercise requires two classes. Here's a brief breakdown of what each requires:
DeathStar:
___
- Public variables:
    - None!

- Methods:
    - `addUser` (user,password,passphrase):
        - creates new instance of the User class *if* the above requirements in "New users" are met

    - `login` (user,password):
        - if valid username, but too many failed logins:
            - return "Account locked!".
        - if valid username/password combo:
            - set login to true
            - reset this user's failed login attempts to 0
            - return "Welcome back, <username>!"
        - if invalid username/password combo:
            - set login to false
            - +1 to this user's failed login attemtps (if the user exists!)

    - `logout`:
        - should set "loggedIn" to false.

- "dynamic" getter variables:
    - `loggedIn`:
        - should only return true if the user is logged in. In other words, you should *never* be able to read "DeathStar.loggedIn == false"! Otherwise, should return "Not logged in!".

    - `userList`:
        - similarly, should *only* return the users if we're logged in. Otherwise, should return "Not logged in!".
_____

User:
___
- Private variables:
   - password (encrypted)
  - Number of incorrect logins

- Non-private ('public') variables:
    - `username`
    - `rank`
    - `locked` (was the account locked due to too many login attempts?)

- Methods:
    - isCorrectPassword(candidate):
        - should compare to the user's password. Remember that you *should not* be able to directly access user.password, so simply doing `if (user.password==candidate)` outside your User class should *not* work!
_____



[Notes]

___
*) There are some pretty huge security risks in this code. Can you spot any?
*) For encrypting the password, use whatever method you want. The point is more that the password should never be publicly readable.
*) If you're logged in (and thus the userList is accessible), note that it should not directly return the private DeathStar.userList variable (instead, it should return an array of {username, rank} objects). Can you think why?
___



[classes] [scope] 



-------------------------------------------------------------------
[Resources]
_________
Private Class Fields
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
Allows you to include properties on classes that are not immediately "visible" to the outside.
_________

*/
//Your code should go here:

