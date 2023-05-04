// let stringCheck = "My name \"is\" Prithu. ";
// document.writeln(stringCheck);

// function sum(a, b) {
//     return a + b;
// }



// document.write(`2+5 is :  ${sum(2, 5)}  `)


/*
let guestList =
    `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList);
*/


/* Looks natural, right? But single or double quotes do not work this way.

If we use them and try to use multiple lines, there’ll be an error:
*/


/*
let sublist = `subject : 1. MAth
2.COmputer
3. Science
4. Optional Math`

document.write(sublist); */


// alert(`the backslash is : \\`)

/*
let checkLength = `Hridaya`;
let lengthOfString = checkLength.length;
alert(`length of string is ` + lengthOfString); 
*/


/*
let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

*/

let str = "banking";
alert(str.slice(1, 4)); 
//result -> ank

alert(str.substring(2,3)); 
//result -> ban