// Creating a Function for this file
import randomNumber from './gen/NumGen'; // Import the Random Number Generator Function
import randomWord from './gen/WordGen'; // Import the Random Word Generator Function
// Global Types
type num = number; // Type for number


// Global Interface
interface Generate {
    randomNumber: (length: num) => num
    randomWord: (length: num) => string
}

const Generate: Generate = {
    randomNumber: randomNumber,
     randomWord: randomWord
}

export default Generate; // Export the Function