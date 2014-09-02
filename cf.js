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