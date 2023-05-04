// let func = function () {
//     return expressions;
// }


// let sum = (a,b) => a+ b ; 

// //the above code is a shorter form of : 
// // let sum = function(a, b){
// //     return a+ b ; 
// // }; 

// alert(sum(1,2)); 



// let subtact = (a, b) => a - b;

// // let subtact = function(a, b){
// //     return a-b ; 
// // }

// alert(subtact(5, 2)); 


// let double = function (n) {
//     return  n * 2;
// }

// alert(double(3)); 


// let double= (n) => n*2 ; 

// alert(double(8)); 

// let sayHi = function () {
//     alert("Hello !!! . . .");
// };

// let func = sayHi;
// func();
// sayHi(); 

// let sayHi = () => alert("Hello. ..");

// sayHi(); 



//Task
let ask = (question, yes, no) =>
    confirm(question) ? yes() : no();


ask("DO you agree?",
    () => alert("You agreed"),
    () => alert("You canceled the execution"));

