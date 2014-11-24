/**
* Created with jstour.
* User: tuxik
* Date: 2014-11-24
* Time: 01:53 PM
Finish the james object by adding properties to it. His job should be "programmer" and should have a married property set to false.

Create a new gabby object using the Person constructor. She should have a job of "student" and her married property should be true.
*/
var james = {
    // add properties to this object!
    job:'programmer',
    married:'false'
    
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

// create a "gabby" object using the Person constructor!

var gabby = new Person("student",true);
