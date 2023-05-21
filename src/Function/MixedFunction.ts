 // global typescript types
 type num = number; // Type for number
 type str = string; // Type for string
 type bool = boolean; // Type for boolean

 import GenerateMixed from "../gen/MixedGen"; // function for generating a random word

 // function for generating a random mixed ID
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