/* COPYRIGHT BY @Ankan Saha */
/* COPYRIGHT YEAR 2023 */

// Importing the Function from the Function folder
import GenerateNumberID from './Function/NumFunction' // Import the Random Number Generator Function
import GenerateWordID from './Function/WordFunction' // Import the Random Word Generator Function
import GenerateSymbolID from './Function/SymbolFunction' // Import the Random Symbol Generator Function
import GenerateMixedID from './Function/MixedFunction' // Import the Random Mixed Generator Function

/* This code block is creating an object named `Generate` that implements the `Generate` interface. It
is assigning the four functions `GenerateNumberID`, `GenerateWordID`, `GenerateSymbolID`, and
`GenerateMixedID` to the properties `randomNumber`, `randomWord`, `randomSymbol`, and `randomMixed`
respectively. These functions are exported from separate files and are used to generate random
numbers, words, symbols, and mixed strings. The `Generate` object is then exported as the default
export of the module. */
const Generate = {
    // Export the synchronous functions
    randomNumber: GenerateNumberID,
    randomWord: GenerateWordID,
    randomSymbol: GenerateSymbolID,
    randomMixed: GenerateMixedID,
};

//export named sync function for destructuring
export const randomNumber = GenerateNumberID
export const randomWord = GenerateWordID
export const randomSymbol = GenerateSymbolID
export const randomMixed = GenerateMixedID

// Export the default function
export default Generate; // Export the Function
