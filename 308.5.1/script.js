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


  function printNos(n){
      if(n > 0){
          printNos(n-1);
          console.log(n + " ");
      }
      return;
  }
  
  let n = 10;
printNos(n)


//PART 2

let people = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]

//Sort by age

people.sort((a, b) => {
    return a.age - b.age;
})

console.log(people)


//Filter older than 50

let lessThan50 = people.filter(person => person.age < 50)

console.log("Less than 50", lessThan50)

//Use map
let mapJobs = people.map( person => (
    {
    id: person.id,
    name: person.name,
    job: person.occupation,
    age: Number(person.age) + 1
}
));

console.log("Map jobs", mapJobs)

//use Reduce
let reducedPeople = mapJobs.reduce((acc, person)=>  acc += person.age, 0)

console.log("reduced", reducedPeople)

let averageAge = reducedPeople / mapJobs.length;

console.log("Average age", averageAge)

//Part 3
let oneObject = mapJobs[0]
console.log(mapJobs[0].age)
function incrementAge (oneObject) {
    return oneObject.age + 1
}
console.log("increment age", incrementAge(oneObject))
