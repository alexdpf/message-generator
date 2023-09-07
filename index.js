//File to write functions that will import object properties from data.js
//Randomly outputs a message combining three pieces of data being: {author}, {quote}, and {technology}

//import object property values from data.js
import {quotes: {author}} from './data.js';

//create a function to select a random `author`
const randomAuthor = () => {
    let pickRandom = author[index](MathfloorMath.floor(Math.random() * 30));
}

//function test - SyntaxError: Cannot use import statement outside a module
console.log(randomAuthor);

//use it later
//const messageGenerator = (author, quote, technology) => {
//    let randomMessage = ''
//}
