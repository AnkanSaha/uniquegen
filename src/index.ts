// Creating a Function for this file
import GenerateNumberID from './Function/NumFunction'; // Import the Random Number Generator Function
import GenerateWordID from './Function/WordFunction'; // Import the Random Word Generator Function
import GenerateSymbolID from './Function/SymbolFunction'; // Import the Random Symbol Generator Function
import GenerateMixedID from './Function/MixedFunction'; // Import the Random Mixed Generator Function

// Global Types for this file
type num = number; // Type for number
type str = string; // Type for string
type bool = boolean; // Type for boolean

// Global Interface for default export
interface Generate {
    // asynchronous Functions
    randomNumber: (length: num) => Promise<num>
    randomWord: (length: num, isCAPITAL:bool) => Promise<str>
    randomSymbol: (length: num) => Promise<str>
    randomMixed: (length: num, isCAPITAL:bool) => Promise<str>
}

const Generate: Generate = {
    // Export the synchronous functions
    randomNumber: GenerateNumberID,
    randomWord: GenerateWordID,
    randomSymbol: GenerateSymbolID,
    randomMixed: GenerateMixedID,
}

//export named sync function for destructuring
export const randomNumber = GenerateNumberID
export const randomWord = GenerateWordID
export const randomSymbol = GenerateSymbolID
export const randomMixed = GenerateMixedID


// Export the default function
export default Generate; // Export the Function