//File to write functions that will import object properties from data.js
//Randomly outputs a message combining three pieces of data being: {author}, {quote}, and {technology}

//3. import quoteDatabase entirely  from data.js to work with object property values
const {quoteDatabase} = require('./data.js');


//4. create a function to select a random `author`
const randomAuthor = (database) => {
    let pickRandomIndex = Math.floor(Math.random() * database.quotes.length);
    return database.quotes[pickRandomIndex].author;
}

// TEST function randomAuthor
//console.log(randomAuthor(quoteDatabase));

//5. create a function to select a random `technology`
const randomTech = (database) => {
    let pickRandomIndex = Math.floor(Math.random() * database.quotes.length);
    return database.quotes[pickRandomIndex].technology;
}


//TEST function randomTech
//console.log(randomTech(quoteDatabase));

//6. create a function to select a random `technology`
const randomQuote = (database) => {
    let pickRandomIndex = Math.floor(Math.random() * database.quotes.length);
    return database.quotes[pickRandomIndex].quote;
}

//TEST function randomQuote
//console.log(randomQuote(quoteDatabase));

//8. create function to swap (technology) string inside `quote` property value for `technology` property value
//pick one random quote
const swapTechValue = randomQuote(quoteDatabase)

//swap placeholder (technology) for a random object property `technology`
const finalQuote = swapTechValue.replace('(technology)', `${randomTech(quoteDatabase)}`);

//TEST function finalQuote
//console.log(`${finalQuote}.
//${randomAuthor(quoteDatabase)}`);

//7. function to prints message combining three different pieces of data.
//9. refactor messageGenerator function
const messageGenerator = () => {
    return (`${finalQuote}.
    ${randomAuthor(quoteDatabase)}`);
}

messageGenerator(quoteDatabase)

document.getElementById('generateBtn').addEventListener('click', () => {
    // Call your messageGenerator function here
    const message = messageGenerator();
    document.getElementById('messageOutput').textContent = message;
});
