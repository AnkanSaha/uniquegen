// This File is used as a middleware to generate Random Words

// global typescript types
type num = number; // Type for number
type str = string; // Type for string


export default function GenerateWord(length:num):str {
    /* Creating an array of Words from a to z that will be used to generate the random  number
   ID. */
   const Words: str[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k','l','m', 'n', 'o', 'p', 'q', 'r', 's', 't','u','v','w','x','y','z']; // All Possible Words to generate

   let Rounds : num = length; // Number of Rounds

   // Final ID Array
    let FinalID: str[] = []; // Final ID

   // Looping through the rounds
   while (Rounds > 0) {
         let TempRandomNumBer: num = Math.random() * (25 - 0) + 0; // Generate Random Number
         let FinalRandomText: num = Math.round(TempRandomNumBer); // Round the Number
         // Push the Number to Final ID Array
         FinalID.push(Words[FinalRandomText]); // Push the Number to Final ID
         Rounds--; // Decrease the Number of Rounds
   }
   const FinalIDString: str = FinalID.join(''); // Join the Array to String

   return FinalIDString; // Return the Final ID
}

console.log(GenerateWord(10))