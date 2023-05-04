let Person = function (pname, gender, birthYear) {
    this.pname = pname;
    this.gender = gender;
    this.birthYear = birthYear;

}

Person.prototype.calcAge = function () {
    console.log(new Date().getFullYear() - this.birthYear);

}

Person.greet = function () {
    console.log("static methd");
}

let john = new Person('Prithu', 'Male', 1997);
console.log(john);
john.calcAge();

Person.greet();

// class Person {
//     constructor(pname, gender, birthYear) {
//         this.pname = pname;
//         this.gender = gender;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         console.log(new Date().getFullYear() - this.birthYear);
//     }

//     static greet() {
//         console.log("Hello World, how are you. . ")
//     }
// }

// let john = new Person('Prithu', 'Male', 1997);
// console.log(john);
// john.calcAge();

// Person.greet(); 