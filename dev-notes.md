**Backend**
* There were problems to get the backend to run on mac os. It turned out that for mac os port 5000 is taken by default. The solution this was turning off airplay on mac os. 
* *exercise 1*:
  * There are multiple strategies to itteration over hirarchies. The most obvious one would be recursion. However I took the liberty to make an assumption that the size of the hirachy will be a lot bigger in reality, since this is just an example set. which makes recursion without tail call optimisation a dangerous choice. So i went for an itterative approach.
  * Taking the definition of a controller should only be acting as a "trafic agent" between diffirent parts of the system, i felt a big part of this logic should be done in a service, which i introduced for this reason.
* *Exercise 2*:
  * Because the way i did exercise 1, the implementation of this one did not require much change other than a return statement
  * I did some clean up: 
    * I made the assumption that the console.log was only there for debug purposes, which will not be relevant anymore in this stage. In a real life situation this decision can be made differently. depending on company policy, code complexity etc. 
    * I made the assumption that the route will replace the call done on load of the running of the module. so this call could be removed.
* *Exercise 3*:
  * I have been taking in consideration to resuse the hirarchy code from the service. However in real life database calls never come for free. And the size of the hierarchy in a real world could be considerably bigger. So i decided to aim to break the loop as soon as a match is found.
  * Added the if on top just as an extra optimisation.
  
**Frontend**
* There was a problem setting up the service. Since somewhere earlier in 2020 chrome required to set cookies with a sameSite Lax flag. Which the cookie service doesn't do by default.  So i added it as a parameter
* *Exercise 1*
  * Felt really tempted to implement the loader etc, however this was not described in the task so i skipped it, and decided to make a note of it. As an important aspect of work a developer to be able to follow specification, and communicate sugestions to the product owner.
  * 