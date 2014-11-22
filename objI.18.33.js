/**
* Created with jstour.
* User: tuxik
* Date: 2014-11-21
* Time: 03:28 PM
*Make Your Own Method
Let's look at a new example and get practice writing methods.

Here we have defined an object rectangle starting on line 1. It has a two properties, height and width, which represents the height and width of the shape.

We have written a setHeight method which will update rectangle's height to the given parameter. This is very similar to setAge from our person example.

Note we have used the keyword this. this is still a placeholder, but in this scenario, this can only ever refer to rectangle because we defined setHeight to be explicitly part of rectangle by defining it as rectangle.setHeight.

Instructions
Finish the method setWidth. It should take a parameter newWidth. It will change the property width to the given parameter.

Then use the two methods setHeight and setWidth to change rectangle's height to 6 and width to 8.
*/
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function (newWidth){
    this.width = newWidth;
}
  

// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight(6);
rectangle.setWidth(8);