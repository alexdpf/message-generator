//File to write functions that will import object properties from data.js
//Randomly outputs a message combining three pieces of data being: {author}, {quote}, and {technology}

//3. import quoteDatabase entirely  from data.js to work with object property values
const {quoteDatabase} = require('./data.js');


//4. create a function to select a random `author`
const randomAuthor = (database) => {
    let pickRandomIndex = Math.floor(Math.random() * 29);
    return database.quotes[pickRandomIndex].author;
}

// function randomAuthor test
console.log(randomAuthor(quoteDatabase));

//5. create a function to select a random `technology`
const randomTech = (database) => {
    let pickRandomIndex = Math.floor(Math.random() * 29);
    return database.quotes[pickRandomIndex].technology;
}


//function randomTech test
console.log(randomTech(quoteDatabase));

//6. create a function to select a random `technology`
const randomQuote = (database) => {
    let pickRandomIndex = Math.floor(Math.random() * 29);
    return database.quotes[pickRandomIndex].quote;
}

//function randomQuote test
console.log(randomQuote(quoteDatabase));