// let user = {
//     name: "Aashma",
//     age: 24,


//     sayHi() {
//         alert(user.name);
//     }
// };

// user.sayHi();


// let user = {
//     name: "Prithu", 


// };

// let admin = {
//     name: "Admin"
// };

// function sayHi() {
//     alert(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f(); 


//task

// let calculator = {
//     read() {
//         let a = prompt("Enter value of a : ");
//         let b = prompt("Enter value of b");
//     },

//     sum() {
//         return  (this.a + this.b);

//     },
//     multiply() {
//         return this.a * this.b;
//     }
// };


// calculator.read();
// alert(calculator.sum());
// alert(calculator.multiply()); 


// let calculator = {
//     sum() {
//       return this.a + this.b;
//     },

//     mul() {
//       return this.a * this.b;
//     },

//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };

//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );


//LadderProgram : 


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // shows the current step
        alert(this.step);
        return this;
    }
};


ladder.up().up().down().showStep().down().showStep();