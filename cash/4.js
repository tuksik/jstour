/**
* Created with jstour.
* User: tuxik
* Date: 2014-12-20
* Time: 01:53 PM
 
I Have to Scan It More Than Once?

Is that a smile on the boss's face? Well, there was one until he realized that your system requires every item to be scanned individually. He finds this pretty inefficient and you probably agree. Let's get real—it was pretty annoying having to call the scan method five times in the previous exercise!

What can we do? What is the limitation of the scan method? Well, it has just one parameter, item, and you can't specify anything related to quantity.
Instructions

Modify the scan method such that if we tell it the quantity of each item, it will be able to add the right amount to the total. Since you currently tell scan nothing about quantity, it may be useful to create another parameter.

Scan 4 of each item using your improved scan method. Previously we would have needed to call scan 16 times! Now it is down to 4.
*/
var cashRegister = {
    total: 0,
    add: function(itemCost) {
        this.total += itemCost;
    },
    scan: function(item, b) {
        b = typeof b !== 'undefined' ? b : 1;
        switch(item) {
            case "eggs":
                this.add(0.98 * b);
                break;
            case "milk":
                this.add(1.23*b);
                break;
            case "magazine":
                this.add(4.99*b);
                break;
            case "chocolate":
                this.add(0.45*b);
                break;
        }
    }
};
// scan each item 4 times
cashRegister.scan("eggs", 4);
cashRegister.scan("milk", 4);
cashRegister.scan("magazine", 4);
cashRegister.scan("chocolate", 4);
//Show the total bill
console.log('Your bill is ' + cashRegister.total);