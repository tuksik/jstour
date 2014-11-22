/**
* Created with jstour.
* User: tuxik
* Date: 2014-11-22
* Time: 08:43 AM

More Kinds of Methods
*/
var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function(){
    return this.sideLength * this.sideLength;
}

var p = square.calcPerimeter();
var a = square.calcArea();