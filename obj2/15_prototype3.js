/**
* Created with jstour.
* User: tuxik
* Date: 2014-12-20
* Time: 10:33 AM

Prototype Practice

Here we have created a new class, Cat, and its constructor. We also have two cats that would like to meow, but currently Cats have no meow method.
Instructions

Add a meow method to the Cat prototype so that all cats can now meow. This method should print to the console "Meow!". Then call this method for each cat. 
*/
function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console
var roxy = new Cat("Roxy","Turkish");

   Cat.prototype.meow = function(noise) {
       this.noise = noise;
       console.log(this.noise);
   };


// add code here to make the cats meow!

roxy.meow('Mimiiiii!');
