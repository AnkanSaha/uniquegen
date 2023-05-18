// Creating a Function for this file
import {GenerateNumberIDAsync, GenerateNumberIDsync} from './Function/NumFunction'; // Import the Random Number Generator Function
import {GenerateWordIDAsync, GenerateWordIDsync} from './Function/WordFunction'; // Import the Random Word Generator Function
import {GenerateSymbolIDsync, GenerateSymbolIDAsync} from './Function/SymbolFunction'; // Import the Random Symbol Generator Function
import {GenerateMixedIDAsync, GenerateMixedIDsync} from './Function/MixedFunction'; // Import the Random Mixed Generator Function

// Global Types
type num = number; // Type for number
type str = string; // Type for string
type bool = boolean; // Type for boolean


// Global Interface
interface Generate {
    // Syncronous Functions
    randomNumberSync: (length: num) => num
    randomWordSync: (length: num, isCAPITAL:bool) => str
    randomSymbolSync: (length: num) => str
    randomMixedSync: (length: num, isCAPITAL:bool) => str
    // Asyncronous Functions
    randomNumberAsync: (length: num) => Promise<num>
    randomWordAsync: (length: num, isCAPITAL:bool) => Promise<str>
    randomSymbolAsync: (length: num) => Promise<str>
    randomMixedAsync: (length: num, isCAPITAL:bool) => Promise<str>
}

const Generate: Generate = {
    // Export the syncronous functions
    randomNumberSync: GenerateNumberIDsync,
    randomWordSync: GenerateWordIDsync,
    randomSymbolSync: GenerateSymbolIDsync,
    randomMixedSync: GenerateMixedIDsync,

    // Export the asyncronous functions
    randomNumberAsync: GenerateNumberIDAsync,
    randomWordAsync: GenerateWordIDAsync,
    randomSymbolAsync: GenerateSymbolIDAsync,
    randomMixedAsync: GenerateMixedIDAsync
}

export default Generate; // Export the Function