class Person {

    constructor(name, birthYear, gender) {
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;
    }

    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear);
    }
}

class Employee extends Person {

    constructor(name, gender, birthYear, empid, salary) {
        super(name, gender, birthYear);
        this.empid = empid;
        this.salary = salary;
    }

    calcSalary(){
        return this.salary* 12 ; 
    }
    empDetails(){
        console.log()
    }
}

let Prithu = new Employee('Prithu', 'Male', 1997, 704160, 000);
console.log(Prithu); 