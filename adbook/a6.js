/**
* Created with jstour.
* User: tuxik
* Date: 2014-11-22
We'll be creating a function that allows us to add our new friend to the address book.

    Create a function called add with the parameters firstName, lastName, and email, phoneNumber.
    In this new function, you want to create a new contact object like bob and mary.
    Instead of having this object's property values be filled with strings though, set them to the appropriate function parameters passed in.
    Add this new contact object to the contacts array.
    Call add with whatever first name, last name, phone number, and email arguments you like.
    Make sure you call the list function, to check if your new entry is added. 
    And delete any other function that logs output in the console, i.e 'search' function.

Run the code!
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
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};
var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactsLength = contacts.length;
    for(var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}
/*Create a search function
then call it passing "Jones"*/

function search(lastName) {
    var contactsLength = contacts.length;
    for(var i = 0; i < contactsLength; i++) {
        if(lastName == contacts[i].lastName) printPerson(contacts[i]);
    }
}
//search("Jones");

function add(firstName, lastName, phoneNumber, email) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };
};

list();

add("Pinko","Roz");
list();