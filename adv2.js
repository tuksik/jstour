var user = prompt("What is your name?").toUpperCase();
console.log(user);
var gu = function (user){
    var ch = '';
    switch (user){
     case (user == 'FATMA') || (user === 'MARIA') : 
         if ( user == 'FATMA' )
         ch = 'You are girl!';
         else
         ch = 'You are super girl!';
         break;
 
       case 'PETER': 
           if (user == "PETER" && 1==1)
         ch = 'You are BOY!';
         break;
     default: ch = 'What are you?'    ;
    }
return ch;
};

console.log((user == 'FATMA') || (user === 'MARIA'));
gu(user);