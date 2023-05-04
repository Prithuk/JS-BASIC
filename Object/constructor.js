// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Prithu");

// alert(user.name);
// alert(user.isAdmin); 

//Accumulator Constructor

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value = value + prompt("How much to add?", 0);
    };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);  
