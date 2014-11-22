/**
* Created with jstour.
* User: tuxik
* Date: 2014-11-22
* Time: 09:48 AM
* To change this template use Tools | Templates.
*/
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function(person1,person2){
    
    var res = 0;
    res =  (person1.age == person2.age)? person1.age :0;
    if (res == 0){
   res = (person1.age > person2.age)? person1.age: person2.age;
    }
   return res;
}

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));
