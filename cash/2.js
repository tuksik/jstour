/**
* Created with jstour.
* User: tuxik
* Date: 2014-12-20
* Time: 01:42 PM

Manually Add It Up?

Great! The bossman can see that you can tell the cash register the total. But we need the cash register to do more.

Your boss wants a way to manually add the cost of each item. We have written the add method for you. There are two things we should note.

    We are using literal notation to include the method add.

    We've used the += operator. This is a shorthand way of saying

    this.total = this.total + itemCost;

In general, a += b; means "add b to a and put the result of that addition back into a. This is also available for the other basic arithmetic functions: -=, *=, and /= do what you expect.
Instructions

Use the add method to sum up the cost of the following four items.

    Eggs 0.98
    Milk 1.23
    Magazine 4.99
    Chocolate 0.45

If we only call the method once, it will just add the first item. So to add up the cost of four items, how many times will we have to call the method?
*/


var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


//call the add method for our items
cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45);

//Show the total bill
console.log('Your bill is '+cashRegister.total);
