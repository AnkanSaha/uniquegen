# UniqueGen
UniqueGen is an open-source package for Node.js, It enables generating random numbers, alphanumeric and has a range of IDs.It offers flexibility and ease of use, making it a valuable tool for developers.

## Installation
To install UniqueGen, simply run the following command in your terminal:
```bash
npm install uniquegen@latest --save
```

## Usage
To use UniqueGen, you must first import it into your project:
```javascript
const UniqueGen = require('uniquegen'); // if you are using CommonJS
or
import UniqueGen from 'uniquegen'; // if you are using ES6
```

### Random Numbers
To generate a random number in synchronous way, use the following function:
```javascript first paramenter is the  length of the Number you want to generate
UniqueGen.randomNumberSync(10); // it will generate a random number of length 10 in syncronous way
```

### Random Words
To generate a random word in synchronous way, use the following function:
```javascript first paramenter is the  length of the Word you want to generate & second parameter is All Alpha Caps or not (boolean)
UniqueGen.randomWordSync(10, true); // it will generate a random word of length 10 with all alphabets in caps because second parameter is true if false then it will generate a random word of length 10 with all alphabets in small in syncronous way

```
### Random Mixed
To generate a random Mixed ID in synchronous way, use the following function:
```javascript first paramenter is the  length of the Word you want to generate & second parameter is All Alpha is Caps or not (boolean)
UniqueGen.randomMixedSync(10, true); // it will generate a random mixed ID of length 10 with all alphabets in caps because second parameter is true if false then it will generate a random mixed ID of length 10 with all alphabets in small in syncronous way

```
### Random Symbols
To generate a random symbol in synchronous way, use the following function:
```javascript first paramenter is the  length of the Symbol you want to generate
UniqueGen.randomSymbolSync(10); // it will generate a random symbol of length 10 with all symbols in syncronous way

```
# Usage in synchronous way
```javascript first paramenter is the  length of ID you want to generate
const UniqueGen = require('uniquegen'); // if you are using CommonJS
or
import UniqueGen from 'uniquegen'; // if you are using ES6

UniqueGen.randomNumberSync(10);
output: 1234567890 // it will generate a random number of length 10 in syncronous way

UniqueGen.randomWordSync(10, true);
output: ABCDEFGHIJ // it will generate a random word of length 10 with all alphabets in caps in syncronous way

UniqueGen.randomWordSync(10, false);
output: abcdefghij // it will generate a random word of length 10 with all alphabets in small in syncronous way

UniqueGen.randomSymbolSync(10);
output: !@#$%^**() // it will generate a random symbol of length 10 with all symbols in syncronous way

UniqueGen.randomMixedSync(10, false);
output: 1a2b3c4de* // it will generate a random mixed ID of length 10 with all alphabets in small in syncronous way

UniqueGen.randomMixedSync(10, true);
output: 1A2B3C4DE* // it will generate a random mixed ID of length 10 with all alphabets in caps in syncronous way

```
# Usage in asynchronous way
```javascript first paramenter is the  length of ID you want to generate
const UniqueGen = require('uniquegen'); // if you are using CommonJS
or
import UniqueGen from 'uniquegen'; // if you are using ES6

UniqueGen.randomNumber(10).then((data) => {
    console.log(data);
}); // it will generate a random number of length 10 in asynchronous way

UniqueGen.randomWord(10, true).then((data) => {
    console.log(data);
}); // it will generate a random word of length 10 with all alphabets in caps in asynchronous way

UniqueGen.randomWord(10, false).then((data) => {
    console.log(data);
}); // it will generate a random word of length 10 with all alphabets in small in asynchronous way

UniqueGen.randomSymbol(10).then((data) => {
    console.log(data);
}); // it will generate a random symbol of length 10 with all symbols in asynchronous way

UniqueGen.randomMixed(10, false).then((data) => {
    console.log(data);
}); // it will generate a random mixed ID of length 10 with all alphabets in small in asynchronous way

UniqueGen.randomMixed(10, true).then((data) => {
    console.log(data);
}); // it will generate a random mixed ID of length 10 with all alphabets in caps in asynchronous way

```

# Usage in asynchronous way with async/await
```javascript first paramenter is the  length of ID you want to generate

const UniqueGen = require('uniquegen'); // if you are using CommonJS
or
import UniqueGen from 'uniquegen'; // if you are using ES6

const randomNumber = async () => {
    const data = await UniqueGen.randomNumber(10);
    console.log(data);
}
randomNumber(); // it will generate a random number of length 10 in asynchronous way

const randomWord = async () => {
    const data = await UniqueGen.randomWord(10, true);
    console.log(data);
}
randomWord(); // it will generate a random word of length 10 with all alphabets in caps in asynchronous way

const randomWord = async () => {
    const data = await UniqueGen.randomWord(10, false);
    console.log(data);
}
randomWord(); // it will generate a random word of length 10 with all alphabets in small in asynchronous way

const randomSymbol = async () => {
    const data = await UniqueGen.randomSymbol(10);
    console.log(data);
}
randomSymbol(); // it will generate a random symbol of length 10 with all symbols in asynchronous way

const randomMixed = async () => {
    const data = await UniqueGen.randomMixed(10, false);
    console.log(data);
}
randomMixed(); // it will generate a random mixed ID of length 10 with all alphabets in small in asynchronous way

const randomMixed = async () => {
    const data = await UniqueGen.randomMixed(10, true);
    console.log(data);
}
randomMixed(); // it will generate a random mixed ID of length 10 with all alphabets in caps in asynchronous way

```
# Contributing
[Ankan Saha]("github.com/AnkanSaha")
[Priya Ghosh]("https://www.npmjs.com/~priya_ghosh")

## License
[MIT](https://choosealicense.com/licenses/mit/)

# Developed by [Ankan Saha]("github.com/AnkanSaha")

# Donation
If you like my work and want to support me, you can donate me at [PayPal](https://paypal.me/ANKAN2003)

# Thank You