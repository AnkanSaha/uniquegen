// global typescript types
type num = number; // Type for number

// import Gen functions
import GenerateNumber from "../gen/NumGen"; // function for generating a random word

// function for generating a random number
export default async function GenerateNumberID(length: num): Promise<num> {
  /* Creating an array of numbers from 0 to 9 that will be used to generate the random 10-digit number
    ID. */
  const NumbersArray: num[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // All Possible Numbers to generate

    let Generation_Result: num = await GenerateNumber(length, NumbersArray); // Generate the Random Number
    return Generation_Result; // Return the Result
}
