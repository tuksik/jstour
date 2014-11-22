/**
* Created with jstour.
* User: tuxik
* Date: 2014-11-22
* Time: 09:11 AM
* Arrays of Objects
*/
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy",6);
//Loop
for (var p in family){
    console.log(family[p].name);
}