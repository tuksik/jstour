/**
* Created with jstour.
* User: tuxik
* Date: 2014-11-24
* Time: 02:53 PM
Dressed to Impress
Let's get some practice working with hasOwnProperty. It is an invaluable tool when working with objects!

Try to run the code in the editor as it is. You should get an error because shorts is not a property of the suitcase object.

Let's write some code to test for this so we can avoid this nasty error later.

Instructions
Remove the console.log statement.

Write an if statement that checks to see if suitcase has the shorts property.

If your if statement evaluates to true, print the value of the shorts property.

If your if statement evaluates to false, set the shorts property to any value you wish using dot notation. Then print the value of the shorts property.
*/
var suitcase = {
    shirt: "Hawaiian",
 //   shorts:"green"
};

//var s = (suitcase.hasOwnProperty('shorts'))?console.log(suitcase.shorts):suitcase.shorts = 'blue';
//(s.length > 0)? console.log(suitcase.shorts):console.log('nada');
if (!suitcase.hasOwnProperty('shorts')){
    
    suitcase.shorts = 'blue';
}
console.log(suitcase.shorts); 