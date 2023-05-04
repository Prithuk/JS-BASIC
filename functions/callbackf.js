function greet(name, callback) {
    setTimeout(function () {
        console.log(`Hello, ${name}!`);
        callback();
    }, 1000);
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Prithu', sayGoodbye);