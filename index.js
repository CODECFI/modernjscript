

// // for loop 

// for (let j = 0; j < 8; j++){
//     console.log(j)
// }

// let add = 0;

// for(; add < 9;){
//     console.log(add++);
// }


// breaking the loop 

// let sum = 0;

// while(true){
// let value = +prompt('enter a num an d will break after no number is entered', '');

// if(!value) break;

// sum+= value;

// }
// alert('sum : ' + sum);
// console.log(sum)

// for in loop 
//---
/*
let loopin = ['T', 'r', 'y'];

for (let done in loopin){
    console.log(loopin[done]);
}
//---------------
let objects = {
 bike: 'dirt',
 color: 'green',
 price: 900000

}
for(let dreams in objects){
    console.log(objects[dreams]);

}
*/
//---------------
/*
let loop = true;

while( loop == true){

    let input = prompt ('greter num then 100');
    if(input > 100) loop = false;
}

*/

// switch statemenr -------------------------//
// let a = 2 + 3;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'near to it2763!' );
//     break;
//   case 5:
//     alert( 'g0t it' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }



// let a = "1";
// let b = 0;

// switch (++a) {
//   case b + 2:
//     alert("this runs, because +a is 2, exactly equals b+2");
//     break;

//   default:
//     alert("this doesn't run");
// }



// let a = 4;

// switch (a) {
//   case 4:
//     alert('Right!');
//     break;

//   case 3:  // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }

// let browser;
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// let browser;
// if(browser == 'Edge') {
//     alert("You've got the Edge!");
//   } else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
//   } else {
//     alert( 'We hope that this page looks ok!' );
//   }





//functions --------
//locl variable
function func(){
  let text = "hello I am working hard to get my dream come true"

  console.log(text)
}
func()

// outer variable


let user = 'cos';

function change(){
  user = 'cfi';
  let show = 'hello ' + user;
  console.log(show)
}


change();

// parameteres 

function parameteres(form, to){
  console.log(form + 'sucess' + to);

}

parameteres('The ', ' on your way');
parameteres('yes the ', ' chooses you and so  on you choose');



//=---
let foo = 'The Game changer';
function showMessage(foo, too){
  foo = 'I am ' + foo +  ' I  ';
  console.log(foo + '  ' + too) 
  alert(too)
}

showMessage(foo , 'love doing the work  required to be best' )
alert(foo)





// function showMessage(from, text) {
//   // If the value of text is falsy, assign the default value
//   // this assumes that text == "" is the same as no text at all
//   text = text || 'no text given';
// console.log(text)
// }

// showMessage();


function showMessae(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
 
  text = 'Idea on work' || 'empty';
  console.log(text)

}
showMessae();


// -----------------------------------

 function showCount(count){
 
console.log(count ?? 'undefined');
 }

 showCount(5);

 //----------------------------------------------------------

 function add(a, b){
  return a * b;
  
 }
 let result = add(2, 3);

 console.log(result)

 

 // interactions --------------

 let userName = prompt("Your name?", "Alice");
 let wonder = confirm("Do you want to see some beauty?");
 
 alert( "Thank you so much for visiting Dear: " + userName ); // Alice
 alert( "Want to explore OK : " + wonder ); // true


 function work(allDay){
  let phrase = `He works all day ${allDay}`;
call(phrase);

}
function call(phrase){
  alert(`** ${phrase}`);
}


// objects------------------------
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let users = makeUser("John", 30);
alert(users.name); 


//----------

let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return ); 

