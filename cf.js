/**
 * Created with jstour.
 * User: tuxik
 * Date: 2014-09-02
 * Time: 06:51 PM
 * To change this template use Tools | Templates.
 */
var isEven = function(number) {
    // Your code goes here!
    //return (number % 2 == 0)?'true':'false';
    if(number % 2 == 0) {
        return true;
    } else return false;
};
for(i = 0; i < 5; i++) {
    console.log(isEven(i));
}
//--isNan--
var isEven = function(number) {
    if (isNaN(number) ) {
     return 'true';
 } else if (number % 2 == 0) {
        return true;
    } else return false;   

};
//For/While
for (i = 0;i<5;i++){
    //statmets
}
//Switch
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
//---
var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  //Add your case here!
  case 'orange':
      console.log('Orange');
      break;
  default:
    console.log("I don't think that's a primary color!");
}