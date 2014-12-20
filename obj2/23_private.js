/**
* Created with jstour.
* User: tuxik
* Date: 2014-12-20
* Time: 11:52 AM


Private Variables

Good! But what if an object wants to keep some information hidden?

Just as functions can have local variables which can only be accessed from within that function, objects can have private variables. Private variables are pieces of information you do not want to publicly share, and they can only be directly accessed from within the class.

The Person class has been modified to have a private variable called bankBalance. Notice that it looks just like a normal variable, but it is defined inside the constructor for Person without using this, but instead using var. This makes bankBalance a private variable.
Instructions

Create an object john using the Person constructor. He can have any name and age you wish.

Next, try to print his bankBalance. What happens?


*/
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}
var john = new Person("koko","shinel",12);
// try to print his bankBalance
console.log(john.bankBalance);
