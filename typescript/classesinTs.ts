class Person {
    firstname: string;
    lastname: string;
    age: number;
    courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {

        this.firstname = first;
        this.lastname = last;
        this.age = age;
        this.courses = courses;
    }

    enroll(courseName: string) {
        this.courses.push(courseName);
    }
}

const student = new Person('Prithu', 'Kathet', 25, ['Anuglar']);
console.log(student);

interface Human {
    firstname: string;
    age: number;

    greet: () => void;

}


let prithu: Human;
prithu = {
    firstname: 'Prithu',
    age: 32,

    greet() {
        console.log(`${this.firstname}`);
    }
}