// let john = {
//     pname: "john",
//     birthYear: 1990,
//     AnuualSalary: 1200,


//     get getName() {
//         return this.pname;
//     },

//     set setName(val) {
//         this.pname = val;
//     }
// }


// console.log(john.getName);
// john.setName = 'Prithu KAthet';

// console.log(john.getName); 

let User = class {
    constructor(name, pswd, role) {
        this.name = name;
        this.password = pswd;
        this.role = role;
    }

    set setPassword(val) {
        if (val.length < 4) {
            console.log('Password should be more than 4 characters')
        } else {
            this.password = val;
        }
    }
}

let prithu = new User('Prithu', 'Kathet123', 'Admin');
console.log(prithu);
prithu.setPassword = 'abc'; 