// let user = {
//     name: "Prithu",
//     age: 25,
//     isEr: true
// };

// for (let key in user) {
//     document.writeln(key  + ": "); 
//     document.writeln(" "+user[key]); 
// }


// function isEmptyObj(obj) {
// for(let key in obj){
//     return false ; 
// }
// return true ; 
// }


//sum object props

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0 ; 
for (let key in salaries){
    sum = sum + salaries[key]; 
}
// function sum() {
//     let sum = salaries.John + salaries.Ann + salaries.Pete;
//     return sum;
// }

// alert("Returning all sum : " + sum()); 