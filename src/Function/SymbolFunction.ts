 // global typescript types
 type num = number; // Type for number
 type str = string; // Type for string

 // import Gen functions
 import GenerateSymbol from "../gen/SymbolGen"; // function for generating a random word
 
 // function for generating a random number
 export function GenerateSymbolIDsync(length: num): str {
/* Defining an array of symbols that will be used to generate a random string of symbols in the
`GenerateSymbol` function. The array contains various symbols such as exclamation mark, at sign,
hash, dollar sign, etc. */
  // Symbol Array
  const Symbols: str[] = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "<", ".", ">", "/", "?", "|", "\\", "~", "`"]; // Symbol Array
 
     let Result:str = GenerateSymbol(length, Symbols); // Generate the Random Number
 
     return Result; // Return the Result
 };

 // Asynchronous Function for generating a random ID
 export async function GenerateSymbolIDAsync(length: num): Promise<str> {
      return GenerateSymbolIDsync(length); // Generate the Random ID
 }