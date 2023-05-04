// let user = new Object(); 
// let users = {}; 

// let usercheck = {  // an  object
//     name : "prithu",  // by key name store value prithu
//     age : 25,
//     "likes girls" : true 
// }; 

// alert("cheking name:"+usercheck.name) ; 

// alert("cheking age:"+usercheck.age) ; 

// // alert(usercheck["likes girls"]); 

// delete user["likes girls"];



// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = prompt("What do you want to know about the user?", "name");
  
//   // access by variable
//   alert( user[key] ); // John (if enter "name")


let objectCheck = {
    name : "Prithu", 
    age :"25", 
    "likes man utd":true
}; 

document.writeln("Name check: "+ objectCheck.name +"<br>"); 

document.writeln("Check : "+objectCheck["likes man utd"]); 

let key = prompt("What do you want to know about the user? ","likes man utd"); 
alert(objectCheck[key]); 