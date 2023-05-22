/* COPYRIGHT BY @Ankan Saha */
/* COPYRIGHT YEAR 2023 */

// Importing the Function from the Function folder
import GenerateNumberID from './Function/NumFunction' // Import the Random Number Generator Function
import GenerateWordID from './Function/WordFunction' // Import the Random Word Generator Function
import GenerateSymbolID from './Function/SymbolFunction' // Import the Random Symbol Generator Function
import GenerateMixedID from './Function/MixedFunction' // Import the Random Mixed Generator Function

// Global Types for this file
type num = number // Type for number
type str = string // Type for string
type bool = boolean // Type for boolean

/* Global Interface for default export/* The `interface Generate` is defining the structure of an
object that will be exported as the default export of the
module. It specifies four asynchronous functions that can be
called on the object: `randomNumber`, `randomWord`,
`randomSymbol`, and `randomMixed`. Each function takes a
`length` parameter of type `num` and returns a `Promise` that
resolves to a `num` or `str` value depending on the function.
The `randomWord` and `randomMixed` functions also take an
optional `isCAPITAL` parameter of type `bool` that determines
whether the generated word or mixed string should be in all
capital letters. */

interface Generate {
    // asynchronous Functions
    randomNumber: (length: num) => Promise<num>
    randomWord: (length: num, isCAPITAL: bool) => Promise<str>
    randomSymbol: (length: num) => Promise<str>
    randomMixed: (length: num, isCAPITAL: bool) => Promise<str>
}

/* This code block is creating an object named `Generate` that implements the `Generate` interface. It
is assigning the four functions `GenerateNumberID`, `GenerateWordID`, `GenerateSymbolID`, and
`GenerateMixedID` to the properties `randomNumber`, `randomWord`, `randomSymbol`, and `randomMixed`
respectively. These functions are exported from separate files and are used to generate random
numbers, words, symbols, and mixed strings. The `Generate` object is then exported as the default
export of the module. */
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
export default Generate // Export the Function
