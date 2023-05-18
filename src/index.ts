// Creating a Function for this file
import randomNumber from './gen/NumGen'; // Import the Random Number Generator Function
import randomWord from './gen/WordGen'; // Import the Random Word Generator Function
import randomSymbol from './gen/SymbolGen'; // Import the Random Symbol Generator Function

// Global Types
type num = number; // Type for number
type str = string; // Type for string


// Global Interface
interface Generate {
    randomNumber: (length: num) => num
    randomWord: (length: num) => str
    randomSymbol: (length: num) => str
}

const Generate: Generate = {
    randomNumber: randomNumber,
    randomWord: randomWord,
    randomSymbol: randomSymbol
}

export default Generate; // Export the Function