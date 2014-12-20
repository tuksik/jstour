/**
* Created with jstour.
* User: tuxik
* Date: 2014-12-20
* Time: 01:46 PM

Short-Term Memory

But this method only works as long as you can remember the cost of every item in the store. We need something like a bar code scanner where just knowing the item name will automatically add the cost of that item to the total.

So we create a method called scan. This method takes some item parameter, and adds the cost of this item to the total. item is a string.

We also use a switch statement. Previously, we would have probably used multiple if-else statements. Here, things work in a similar way.

For example, if the item is "eggs" (line 8), we then call the add method, passing through 0.98 as the itemCost. This will add 0.98 to cashRegister.total. If instead the item is "milk" or "chocolate" or "magazine", the relevant itemCost is added. Note no default case is needed for this switch statement.
Instructions

    Write the add method which has a single parameter, itemCost. It will add the itemCost to the total.
    We have partially written the scan method for you and started a switch statement. Add the following 2 items to the switch statement:

    "magazine", 4.99
    "chocolate", 0.45

Finally, use the scan method to buy "eggs" twice and a "magazine" three times.
*/
var cashRegister = {
    total: 0,
        add: function(itemCost){
        this.total += itemCost;
    },
    //insert the add method here    
    scan: function(item) {
        switch(item) {
            case "eggs":
                this.add(0.98);
                break;
            case "milk":
                this.add(1.23);
                break;
                //Add other 2 items here
            case "magazine":
                this.add(4.99);
                break;
            case "chocolate":
                this.add(0.45);
                break;
        }
        return true;
    }
};
//Scan 2 eggs and 3 magazines
//Show the total bill
console.log('Your bill is ' + cashRegister.total);