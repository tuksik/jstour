/**
* Created with jstour.
* User: tuxik
* Date: 2014-11-22
* Time: 09:51 AM
What Are Objects For?
*/
var spencer = {
  age: 22,
  country: "United States"
};

// make spencer2 here with constructor notation
function spencerTwo (age,country){
    this.age = age;
    this.country = country;
}

var spencer2 = new spencerTwo(22,"USA");