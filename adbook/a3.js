/**
* Created with jstour.
* User: tuxik
* Date: 2014-11-22
* Time: 10:25 AM

    Define a function called printPerson that takes a parameter called person.
    In the function body, print out the person parameter's firstName property by accessing it with a dot just like before.
    Then print a space, then their lastName in the same way.
    Call the printPerson() function to print out the first item in the contacts array. The first item in an array is at position 0.
    Then on the next line, call printPerson() again to print out the second item in the contacts array.

Don't worry if your output appears twice - we're just double checking your code!
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
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson added here
function printPerson(person){
   console.log(person.firstName + ' ' + person.lastName) ;
}

//Loop
for (var p in contacts){
     printPerson(contacts[p]);
}