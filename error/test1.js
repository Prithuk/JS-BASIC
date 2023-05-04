let age = parseInt(prompt("Enter your age:", 18));
try {
    if (isNaN(age)) {
        throw new Error("please enter only numeric values")
    }
    else if (age < 18 ||  age > 100) {
        alert("you are not allowed to enter. . ")
    }

} catch (error) {
    console.log(error);
}

