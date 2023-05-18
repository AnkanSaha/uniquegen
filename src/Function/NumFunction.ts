 // global typescript types
type num = number; // Type for number

// import Gen functions
import GenerateNumber from "../gen/NumGen"; // function for generating a random word

// function for generating a random number
export function GenerateNumberIDsync(length: num): num {
    /* Creating an array of numbers from 0 to 9 that will be used to generate the random 10-digit number
    ID. */
    const Numbers: num[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // All Possible Numbers to generate

    let Result:num = GenerateNumber(length, Numbers); // Generate the Random Number

    return Result; // Return the Result
};

// Asynchronous Function for generating a random ID

export async function GenerateNumberIDAsync(length: num): Promise<num> {
    return GenerateNumberIDsync(length); // Generate the Random ID
}