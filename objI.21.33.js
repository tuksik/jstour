/**
* Created with jstour.
* User: tuxik
* Date: 2014-11-22
* Time: 08:53 AM

Custom Constructors

But this approach of adding in properties one at a time for every object is tedious! Instead of always using the boring Object constructor, we can make our own constructors.

This way we can set the properties for an object right when it is created. So instead of using the Object constructor which is empty and has no properties, we can make our own constructors which have properties.
*/
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington",275);

function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles",39);
var holden = new Person("Holden Caulfield",16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age );