/**
* Created with jstour.
* User: tuxik
* Date: 2014-12-20
* Time: 09:18 AM
List ALL the Properties!
*/
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
   
};


for(var property in nyc) {
    
    console.log(nyc[property]);
}