class Person {

    constructor(pname, plname, birthyear) {
        this.pname = pname;
        this.plname = plname;
        this.birthyear = birthyear;


    }

    calcAge () {
        console.log(new Date().getFullYear - this.birthyear);
    }
}


Person.prototype.greet = function () {
    console.log('Good Morning.' + this.pname);
}
let prithu = new Person('prithu', 'Kathet', 1997);
console.log(prithu);
prithu.calcAge();
prithu.greet(); 
