//File to write functions that will import object properties from data.js
//Randomly outputs a message combining three pieces of data being: {author}, {quote}, and {technology}

//import quoteDatabase entirely  from data.js to work with object property values
const {quoteDatabase} = require('./data.js');


//create a function to select a random `author`
const randomAuthor = (database) => {
    let pickRandomIndex = Math.floor(Math.random() * 29);
    return database.quotes[pickRandomIndex].author;
}

//function test
console.log(randomAuthor(quoteDatabase));

//create a function to select a random `technology`
const randomTech = (database) => {
    let pickRandomIndex = Math.floor(Math.random() * 29);
    return database.quotes[pickRandomIndex].technology;
}

//function test
console.log(randomTech(quoteDatabase));

//use it later
//const messageGenerator = (author, quote, technology) => {
//    let randomMessage = ''
//}
