let person = {
    calcAge() {
        return new Date().getFullYear() - this.birthyear;
    },
    greet() {
        return 'Have a nice day'
    },

    //another way
    init(name, gender, birthyear) {
        this.name = name;
        this.gender = gender;
        this.birthyear = birthyear;
    }
}

//another way
let john = Object.create(person);

john.name = 'Prithu';
john.gender = 'Male';
john.birthyear = 1997;
console.log(john);

console.log(john.calcAge());

let asma = Object.create(person);
asma.init('Aaashma', 'Female', 1998);
console.log(asma);  