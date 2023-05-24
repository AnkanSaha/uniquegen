// global typescript types
type num = number; // Type for number

// import Gen functions
import GenerateNumber from "../gen/NumGen"; // function for generating a random word

// function for generating a random number

// Interface for GenerateNumberID function
interface GenerateNumberID {
  length: num;
  WithZero: boolean;
  CustomNumbers?: num[];
}

/**
 * This TypeScript function generates a random number ID of a specified length, with the option to
 * exclude zero and use custom numbers.
 * @param {GenerateNumberID}  - - `length`: The length of the generated number ID.
 * @returns a Promise that resolves to a number (num). The number is a randomly generated ID of the
 * specified length, with or without a zero, and using either the default set of numbers (0-9) or a
 * custom set of numbers if provided.
 */
export default async function GenerateNumberID({length, WithZero = true, CustomNumbers = undefined}: GenerateNumberID): Promise<num> {
  /* Creating an array of numbers from 0 to 9 that will be used to generate the random 10-digit number
    ID. */
    const NumbersArray: num[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // All Possible Numbers to generate

    if(WithZero === false){
      NumbersArray.pop(); // Remove the Zero from the Array
      let Generation_Result: num = await GenerateNumber(length, CustomNumbers !== undefined ?CustomNumbers:NumbersArray); // Generate the Random Number
      return Generation_Result; // Return the Result
    }
    else{
      let Generation_Result: num = await GenerateNumber(length, CustomNumbers !== undefined ?CustomNumbers:NumbersArray); // Generate the Random Number
      return Generation_Result; // Return the Result
    }
};