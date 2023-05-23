 // global typescript types
 type num = number; // Type for number
 type str = string; // Type for string
 type bool = boolean; // Type for boolean

 // import Gen functions
 import GenerateWord from "../gen/WordGen"; // function for generating a random word
 
 // function for generating a random number
/**
 * This TypeScript function generates a random string of characters of a specified length and can
 * optionally capitalize the result.
 * @param {num} length - The length parameter is a number that determines the length of the random
 * string that will be generated.
 * @param {bool} isCAPITAL - A boolean parameter that determines whether the generated word should be
 * in all capital letters or not. If it is set to true, the generated word will be returned in all
 * capital letters. If it is set to false or not provided, the generated word will be returned in
 * lowercase letters.
 * @returns a Promise that resolves to a string (`Promise<str>`). The string is a randomly generated
 * sequence of characters of length specified by the `length` parameter. If the `isCAPITAL` parameter
 * is `true`, the string is returned in uppercase. Otherwise, the string is returned as is.
 */
 export default async function GenerateWordIDsync(length: num, isCAPITAL:bool): Promise<str> {
  /* This line of code is creating an array of all possible letters from 'a' to 'z' that will be used to
generate a random string of characters. The array is stored in the constant variable `Words` and has
a type of `str[]`, which means it is an array of strings. */
const Words: str[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k','l','m', 'n', 'o', 'p', 'q', 'r', 's', 't','u','v','w','x','y','z']; // All Possible Words to generate
 
     let Result:str = await GenerateWord(length, Words); // Generate the Random Number
 
     // Checking if the Word should be Capital
     if(isCAPITAL === true){
         return Result = Result.toUpperCase(); // Return the Result in Capital
     }
     else{
      return Result; // Return the Result
     };
 };