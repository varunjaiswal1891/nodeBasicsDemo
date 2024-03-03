const fs = require('fs')
const readline = require('readline'); 

const writeGreetingToFile = (name) => {
    fs.writeFile('greeting.txt', `Hello to user ${name}`, (err) => {
        if(err) 
        {
            console.log('Error writing to file');
            throw err;
        }    
        console.log('File has been written');
    });
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (name) => {
    //console.log(`Hello there ${name}`);
    rl.close();
    writeGreetingToFile(name);
});

