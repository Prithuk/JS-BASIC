// const person = {
//     firstname: "Prithu",
//     lastname: "Kathet",
//     fullname: function () {
//         return this.firstname + " " + this.lastname;
//     }
// }

 

// alert(setTimeout(person.fullname.bind(person), 3000));


// // const member = {
//     //     firstname: "Hege",
//     //     lastname: "nilsen"
//     // }


//     // let fullname = person.fullname.bind(member);
//     // alert(fullname()); 

function sayHello() {
    console.log(this);
}

sayHello(); 