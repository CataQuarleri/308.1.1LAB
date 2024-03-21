let arrayOfNumbers = [31, 42, 50, 22, 96, 54, 5, 2, 10]

//Return sum
let returnTheSum = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
     return sum
}

returnTheSum(arrayOfNumbers)

//Return average
let returnTheAverage = function (array) {
    let average = returnTheSum(array) / array.length
    return average 
}

console.log(returnTheAverage(arrayOfNumbers))

let phrasesArray = [
    "Eat an apple a day",
    "Bananas are great for energy",
    "Oranges are juicy and refreshing",
    "Grapes make a tasty snack",
    "Kiwi fruit is rich in vitamin C",
    "Strawberries are perfect for dessert",
    "Pineapple adds a tropical twist",
    "Blueberries are packed with antioxidants",
    "Watermelon is deliciously hydrating"
  ];

  //Return longest string;

  let returnTheLongestString = function (array){
    let longestString = array[0]
    for (let i = 1; i <= array.length; i++) {
        if ( array[i]?.length > longestString.length ){
            longestString = array[i]
        }
    }
    return longestString;
  }

  console.log(returnTheLongestString(phrasesArray))

  //Compare strings to numbers

  let compareStringsToNumbers = function (array, number){
    let longStringsArray = []
    for (let i = 0; i <= array.length; i++) {
        if ( array[i]?.length > number ){
            longStringsArray.push(array[i])
        }
    }
    return longStringsArray
  }

  console.log(compareStringsToNumbers(phrasesArray, 35))

  