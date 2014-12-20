/**
* Created with jstour.
* User: tuxik
* Date: 2014-12-20
* Time: 12:50 PM
* To change this template use Tools | Templates.
*/
 
// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty('hasOwnProperty') 
console.log(hasOwn);

