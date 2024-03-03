const readline = require('readline'); // require the readline module comes as an API with node.js

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (name) => {
    console.log(`Hello there ${name}`);
    rl.close();
});