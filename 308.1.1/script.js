// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;


//INITIAL CODE
// ------------------------------------------------------------
// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique && divisibleBy5 && firstLarger;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


  //MY CODE 

  //Numbers divisible by 5
const divisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log("All numbers divisible by 5 " + `That is ${divisibleBy5}`);

//First number is larger than the last
const firstLarger = n1 > n4
console.log("The first number larger than the first one:" + `That statement is ${firstLarger}`)

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const arithmeticOperation = (n2 - n1) * n3 % n4 == 0
console.log("If I substract the first number from the second number and multiply the result by the third number and then divide the result by the fourth, the remainder of the operation is " + arithmeticOperation)

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isNotOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log("All the numbers are below 25:" + `The statement is ${isNotOver25}`)

const isValid2 = isSum50 && isTwoOdd && isOver25 && isUnique && divisibleBy5 && firstLarger;
console.log(`The four numbers are valid accodring to the provided criteria:  ${isValid2}`)

//PART 2: PRACTICAL MATH

const tripTotal = 1500 // miles
const costPerGallon = 3 //dollars
const budget = 175 //dollars

let speed = 75 //mph - Change manually as we are not yet using conditionals
let milesPerGallon = 23 //miles - Change manually as we are not yet using conditionals

let gallonsNeeded = tripTotal / milesPerGallon
console.log(`If I go at ${speed}mph I will need ${gallonsNeeded} gallons`)

let moneyExpend = gallonsNeeded * costPerGallon;
let enoughBudget = moneyExpend <= budget;
console.log(`If I go at ${speed}mph my money is enough. This is ${enoughBudget}`)

let timeSpent = tripTotal / speed //hours
console.log(`If I go at ${speed}mph my trip will take ${timeSpent} hours`)




