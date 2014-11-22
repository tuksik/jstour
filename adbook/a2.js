/**
* Created with jstour.
* User: tuxik
* Date: 2014-11-22
* Time: 10:23 AM
* To change this template use Tools | Templates.
*/
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888 - 8888",
    email: "bob.jones@example.com"
};

var contacts = new Array();
contacts[0] = bob;
contacts[1] = mary;
console.log(contacts[1].phoneNumber);
//console.log(contacts);