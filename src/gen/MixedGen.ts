// This File is used as a middleware to generate Random Mixed IDs

// global typescript types
type int = number; // Type for number
type str = string; // Type for string

// Function for generating a random Mixed ID
/**
 * The function generates a random string of specified length using an array of characters.
 * @param {num} length - The length parameter is a number that specifies the length of the final symbol
 * string that will be generated by the function.
 * @param {str[]} MixedArray - The `MixedArray` parameter is an array of strings that contains the set
 * of characters from which the random ID will be generated. The function will randomly select
 * characters from this array to create the final ID string.
 * @returns a string that is the final symbol string generated by the `GenerateMixedID` function. This
 * string is created by joining all the elements of the `FinalID` array together using the `join()`
 * method.
 */

export default function GenerateMixed(length: int, MixedArray: str[]): str {
    /*This array will be used to store the randomly generated symbols that will be used to create the
final symbol string of the specified length. */
    // Final ID Array
    const FinalID: str[] = []; // Final ID

    // While Loop for generating the random ID
    while (length > 0) {
        /* This code block is a while loop that generates*/
        const FinalRandomNumForMixed: int = GenerateNumberIndex(MixedArray); // Generate Random Number Index Between 0 and Array Length - 1
        FinalID.push(MixedArray[FinalRandomNumForMixed]); // Push the Number to Final ID
        length--; // Decrease the Number of Rounds
    }
    /* This code block is converting the `FinalID` array, which contains the randomly generated symbols,
into a string by joining all the elements of the array together using the `join()` method. The
resulting string is then stored in the `FinalSymbolIDString` variable, which is of type `str`
(string). Finally, the `FinalSymbolIDString` variable is returned as the final symbol string
generated by the `GenerateSymbol` function. */
    // Make the Final ID From Array to String
    const FinalMixedIDString: str = FinalID.join(''); // Join the Array to String
    return FinalMixedIDString; // Return the Final ID
}

// Generate Random Number Index
function GenerateNumberIndex(ArrayMixed: str[]): int {
    const TempRandomNumBer: int = Math.random() * (ArrayMixed.length - 1 - 0) + 0; // Generate Random Number Between 0 and Array Length - 1
    const FinalRandomNumber: int = Math.round(TempRandomNumBer); // Round the Number
    return FinalRandomNumber; // Return the Final Random Number
}
