// This File is used as a middleware to generate Random Numbers

// global typescript types
type num = number; // Type for number
type str = string; // Type for string


/**
 * The function generates a random ID of a specified length using an array of numbers and the
 * Math.random() method.
 * @param {num} length - The length parameter is a number that determines the length of the generated
 * ID. It is used to specify the number of rounds the while loop should run to generate the random ID.
 * The value of this parameter is passed as an argument to the GenerateID function when it is called.
 * @returns a randomly generated 10-digit number ID as a number data type.
 */
export default async function GenerateNumber(length:num, Numbers:num[]): Promise<num> {

    // Final ID Array
    let FinalID: num[] = []; // Final ID

   /* This code block is generating a random 10-digit number ID by looping through 10 rounds. In each
   round, a random number between 0 and 9 is generated using the `Math.random()` method and then
   rounded to the nearest integer using the `toFixed()` method. The rounded number is then used as
   an index to select a number from the `Numbers` array, which contains all possible numbers that
   can be used to generate the ID. The selected number is then pushed to the `FinalID` array. After
   10 rounds, the `FinalID` array is joined into a string and converted to a number, which is then
   returned as the final ID. */
    while (length > 0) {    
      let FinalRandomNumber: num = await GenerateNumberIndex(Numbers); // Generate Random Number Index Between 0 and Array Length - 1
          // Push the Number to Final ID Array
          FinalID.push(Numbers[FinalRandomNumber]); // Push the Number to Final ID
        length--; // Decrease the Number of Rounds
    }

  /* This code block is converting the `FinalID` array, which contains the randomly generated 10-digit
  number ID, into a string by joining all the elements of the array together with an empty string
  separator. Then, the string is converted back into a number data type using the `Number()` method
  and assigned to the `FinalIDNumber` variable. Finally, the `FinalIDNumber` variable is returned as
  the final ID. */
    // Make the Final ID From Array to String
    const FinalIDString: str = FinalID.join(''); // Join the Array to String
    const FinalIDNumber: num = Number(FinalIDString); // Convert the String to Number

    return FinalIDNumber; // Return the Final ID
};

// Generate Random Number Index
async function GenerateNumberIndex(ArrayNumbers:num[]): Promise<num> {
  let TempRandomNumBer: num = Math.random() * (ArrayNumbers.length-1 - 0) + 0; // Generate Random Number Between 0 and Array Length - 1
  let FinalRandomNumber: num  = Math.round(TempRandomNumBer) // Round the Number
  return FinalRandomNumber; // Return the Final Random Number
}