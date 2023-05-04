let Person = function (pname, gender, birthYear) {
    this.pname = pname;
    this.gender = gender;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(new Date().getFullYear);
    let age = new Date().getFullYear - this.birthYear;
    console.log(age);
}

let prithu = new Person('prithu', 'Male', 1997);
prithu.calcAge();
console.log(prithu);


let hridaya = {
    pname: 'Hridaya',
    birthYear: 2019,
    gender: 'Male'
}


