//Part 1
const CSV =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let rows = CSV.split("\n");

console.log(rows);
let eachColumn;
rows.forEach((row, i) => {
  let column = Array(row.split(","));
});

console.log(eachColumn);

//Part 2
let arrayOfRows = [];
for (let i = 0; i < rows.length; i++) {
  let column = rows[i].split(",");
  arrayOfRows.push(column);
}
// arrayOfRows[0].push("Address");

let row_length = arrayOfRows[0].length;

for (let i = 0; i < arrayOfRows.length; i++) {
  arrayOfRows[i].length = row_length;
}

console.log(arrayOfRows);

//Part 3
let arrayOfObjects = [];
for (let i = 1; i < arrayOfRows.length; i++) {
  let obj = {};
  arrayOfRows[i].forEach((value, j) => {
    obj[arrayOfRows[0][j]] = value;
  });
  arrayOfObjects.push(obj);
}
console.log(arrayOfObjects);

//Part 4
//Remove last element
arrayOfObjects.pop();
console.log(arrayOfObjects);
//Insert the following object at index 1:
arrayOfObjects.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
console.log(arrayOfObjects);

//Add object to end of arrayOfObjects
arrayOfObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(arrayOfObjects);

//use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.
let ageAverage;
for (let i = 0; i < arrayOfObjects.length; i++) {
  ageAverage = +Number(arrayOfObjects[i].age);
}

ageAverage = ageAverage / arrayOfObjects.length;
console.log(ageAverage);

//Part 5
let csvAgain = "";
for (let i = 0; i < arrayOfObjects.length; i++) {
  for (let value in arrayOfObjects[i]) {
    csvAgain += arrayOfObjects[i][value] + ",";
  }
}

console.log(csvAgain);
