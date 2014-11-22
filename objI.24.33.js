/**
* Created with jstour.
* User: tuxik
* Date: 2014-11-22
* Time: 09:02 AM
Constructors With Methods
*/
 function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function(){
      return this.height * 2 + this.width *2;
  }
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();