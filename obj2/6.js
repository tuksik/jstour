/**
* Created with jstour.
* User: tuxik
* Date: 2014-11-24
* Time: 02:40 PM
I.D., Please
Alright! Let's get our hands dirty and start exploring some really cool stuff about objects in JavaScript. But before we can do that, how can we even tell if something is an object (as opposed to, say, a number or string)? It would be great if we could tell what type something is in JavaScript. Good thing there's a handy built-in operator to do this!

Say we have a variable thing and we don't know what type thing is. We can call typeof thing to figure this out. Generally, the most useful types are "number," "string," "function," and of course, "object."

As an example, the following example will print "object":

var someObject = {someProperty: someValue};
console.log( typeof someObject );

Instructions
In lines 3-6, we have an object, a number, and a string (in that order). Complete lines 7-9 so they will print the appropriate types of these variables.
*/

// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log(typeof anObj  ); // should print "object"
console.log( typeof aNumber ); // should print "number"
console.log( typeof aString ); // should print "string"