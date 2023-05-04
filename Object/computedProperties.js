/*

Computed properties in JavaScript allow you to dynamically specify an object property 
based on the value of another property or expression. Computed properties are defined using a special syntax, 
which involves enclosing an expression within square brackets []. The expression inside the brackets is evaluated, and the result is used as the property name.

Here's an example of a computed property in JavaScript:

*/

// let firstName = "John";
// let lastName = "Doe";

// let person = {
//   [firstName + " " + lastName]: "value"
// };
// document.writeln(person); 
// console.log(person); // { "John Doe": "value" }



let fruit = prompt("Which fruit to buy?", "orange");

let bag = {
    [fruit]: 6, // the name of the property is taken from the variable fruit
};

document.write(bag.orange);

alert(bag.orange);