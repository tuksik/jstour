/**
* Created with jstour.
* User: tuxik
* Date: 2014-11-24
* Time: 02:12 PM
Take a look at the james object. Complete the sayJob method so that it will print to the console
"Hi, I work as a [job]", where [job] is the value of the job property.

Then in line 14, change the job for james to "super programmer".
Although the method calls in lines 11 and 17 are exactly the same, their output should be different because James' job changed!
*/
 var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
      console.log("Hi, I work as a "+this.job) ; 
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james. job = "super programmer";

// james' second job
james.sayJob();
