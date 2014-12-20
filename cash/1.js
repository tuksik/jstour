/**
* Created with jstour.
* User: tuxik
* Date: 2014-12-20
* Time: 01:37 PM
* To change this template use Tools | Templates.
Shut the Shop!

You are working for a large supermarket and the cash register has just failed. The boss is not happy as he can't make any money.

To save the day it happens that you let slip to your boss that you know JavaScript and can build a quick virtual cash register until head office sends support staff.

Your boss is over the moon and wants you to get started right away.
Instructions

Create a new object called cashRegister with the property total initialized to 0.

Then change the property total to 2.99 using dot notation.
*/

//Create the object called cashRegister 
//and initialize its total property
function cashRegister(){
    this.total = 0;
}

//Using dot notation change the total property
var cash = new cashRegister();
cash.total = 2.99;