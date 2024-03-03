# UniqueGen

UniqueGen is an package for Node.js, It enables generating random numbers, alphanumeric and has a range of IDs.It offers flexibility and ease of use, making it a valuable tool for developers.

[![install size](https://packagephobia.com/badge?p=uniquegen)](https://packagephobia.com/result?p=uniquegen)
[![npm version](https://badge.fury.io/js/uniquegen.svg)](https://badge.fury.io/js/uniquegen)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dt/uniquegen.svg?style=flat-square)](https://www.npmjs.com/package/uniquegen)
[![CodeQL](https://github.com/AnkanSaha/uniquegen/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/AnkanSaha/uniquegen/actions/workflows/github-code-scanning/codeql)

# Features

-   Generate random numbers
-   Generate random words
-   Generate random symbols
-   Generate random mixed IDs

# Security

UniqueGen is a secure package. It does not store any data on its server. All the data is generated on the user's system. It does not use any third-party API to generate data. It is a completely offline package.

# Getting Started

To get started with UniqueGen, you must first install it in your project. You can install UniqueGen using npm or yarn. We recommend using npm.

## Installation

To install UniqueGen, simply run the following command in your terminal:

```bash
npm install uniquegen@latest --save
```

## Usage

To use UniqueGen, you must first import it into your project:

```javascript
const UniqueGen = require('uniquegen'); // if you are using CommonJS
or;
import UniqueGen from 'uniquegen'; // if you are using ES6
```

# Usage in CommonJS

```javascript first paramenter is the  length of ID you want to generate
const UniqueGen = require('uniquegen'); // if you are using CommonJS
or
import UniqueGen from 'uniquegen'; // if you are using ES6

const Number = UniqueGen.randomNumber( 10, true)
console.log(Number);
    output: 1234567890; // it will generate a random number of length 10 with zero in  way

const Number = UniqueGen.randomNumber( 10, false)
console.log(Number);
    output: 0123456789; // it will generate a random number of length 10 without zero in  way

const Word = UniqueGen.randomWord( 10, true)
console.log(Word);
    output: ABCDEFGHIJ; // it will generate a random word of length 10 with all alphabets in caps in  way

const Word = UniqueGen.randomWord( 10, false)
console.log(Word);
    output: abcdefghij; // it will generate a random word of length 10 with all alphabets in small in  way

const Symbol = UniqueGen.randomSymbol( 10)
console.log(Symbol);
    output: !@#$%^&***; // it will generate a random symbol of length 10 with all symbols in  way

const Mixed = UniqueGen.randomMixed( 10, false)
console.log(Mixed);
    output: abc#$%^&**; // it will generate a random mixed ID of length 10 with all alphabets in small in  way

const Mixed = UniqueGen.randomMixed( 10, true)
console.log(Mixed);
    output: ABC#$%^&**; // it will generate a random mixed ID of length 10 with all alphabets in caps in  way

```

# Usage in ES6 way

```javascript first paramenter is the  length of ID you want to generate

const UniqueGen = require('uniquegen'); // if you are using CommonJS
or
import UniqueGen from 'uniquegen'; // if you are using ES6

const randomNumber = () => {
    const data = UniqueGen.randomNumber(10, true);
    console.log(data);
    output: 1234567899
}
randomNumber(); // it will generate a random number of length 10 with zero in asynchronous way

const randomNumber = () => {
    const data = UniqueGen.randomNumber(10, false);
    console.log(data);
    output: 0123456789
}
randomNumber(); // it will generate a random number of length 10 without zero in asynchronous way

const randomWord = () => {
    const data = UniqueGen.randomWord(10, true);
    console.log(data);
    output: ABCDEFGHIJ
}
randomWord(); // it will generate a random word of length 10 with all alphabets in caps in asynchronous way


const randomWord = () => {
    const data = UniqueGen.randomWord(10, false);
    console.log(data);
    output: abcdefghij
}
randomWord(); // it will generate a random word of length 10 with all alphabets in small in asynchronous way

const randomSymbol = () => {
    const data = UniqueGen.randomSymbol(10);
    console.log(data);
    output: !@#$%^&***
}
randomSymbol(); // it will generate a random symbol of length 10 with all symbols in asynchronous way

const randomMixed = () => {
    const data = UniqueGen.randomMixed(10, false);
    console.log(data);
    output: abc#$%^&**
}
randomMixed(); // it will generate a random mixed ID of length 10 with all alphabets in small in asynchronous way

const randomMixed = () => {
    const data = UniqueGen.randomMixed(10, true);
    console.log(data);
    output: ABC#$%^&**
}
randomMixed(); // it will generate a random mixed ID of length 10 with all alphabets in caps in asynchronous way

```

# Adtional Features

-   You can set Custom Symbols, Words, Numbers & Mixed Data in third parameter of the function object.

# Contributing

[Ankan Saha]("github.com/AnkanSaha")
[Priya Ghosh]("https://www.npmjs.com/~priya_ghosh")

## License

[MIT](https://choosealicense.com/licenses/mit/)

# Project Status

This project is currently in development. Users can generate random numbers, words, symbols and mixed IDs in synchronous and asynchronous way. please update the package to get the latest version.

# Donation

If you like my work and want to support me, you can donate me at [PayPal](https://paypal.me/ANKAN2003)

# Thank You
