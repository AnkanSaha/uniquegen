 // global typescript types
 type num = number; // Type for number
 type str = string; // Type for string
 type bool = boolean; // Type for boolean

 import GenerateMixed from "../gen/MixedGen"; // function for generating a random word

 // function for generating a random mixed ID
/**
 * This TypeScript function generates a random mixed ID of a specified length and can optionally make
 * it all uppercase.
 * @param {num} length - The length parameter is a number that specifies the length of the mixed ID
 * that will be generated.
 * @param {bool} isCAPITAL - A boolean value that determines whether the generated mixed ID should be
 * in all capital letters or not. If it is set to true, the generated ID will be returned in all
 * capital letters. If it is set to false or not provided, the generated ID will be returned in
 * lowercase letters.
 * @returns a Promise that resolves to a string. The string is a randomly generated ID of the specified
 * length, consisting of a mix of letters, numbers, and special characters. If the `isCAPITAL`
 * parameter is set to `true`, the string will be returned in all capital letters.
 */
 export default async function GenerateMixedID(length: num, isCAPITAL:bool): Promise<str> {
    /* This line of code is creating an array of all possible letters from 'a' to 'z' that will be used to*/
    const Mixed: str[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '<', '.', '>', '/', '?', '|', '\\', '~']; // All Possible Words to generate

        let Result:str = await GenerateMixed(length, Mixed); // Generate the Random Number

        // Checking if the Word should be Capital
        if(isCAPITAL === true){
            return Result = Result.toUpperCase(); // Return the Result in Capital
        }
        else{
            return Result; // Return the Result
        };
 };