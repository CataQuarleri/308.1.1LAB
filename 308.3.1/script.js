// fizz buzz
// for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0) {
//         console.log("Fizz")
//         if(i % 5 === 0){
//             console.log("Fizz Buzz")
//         }
//     } else if (i % 5 === 0){
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

//Prime Time

// for (let i = 50; i < 100; i++){
//     let isPrime = true;
//     for (let j = 2; j < i; j++){
//         if (i % j === 0){ 
//             isPrime = false;
//         } 
//     }
//     if (isPrime == true) {
//         // console.log(i)
//         break;
//     }
// }

//Feeling Loopy
// const CSV = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26"

// for (let i in CSV){
//     let cell = '';
//     while (CSV[i] != ','){
//         cell = `${cell}${CSV[i]}`;
//         break;
//     }
//     console.log(cell)
// }

console.log(CSV.split(","))
const CSV = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26\n";

let cell = "";
let row = "";
// console.log("INDICE", cell[2])
for (let i in CSV) {
    if (CSV[i] !== "," && CSV[i] !== "\n" ) {
      cell += CSV[i];
    } else if (CSV[i] == ",") {
      row += cell + " ";
      cell = "";
    } else if (CSV[i] === "\n" ) {
      row += cell ;
      console.log(row);
      row = "";
      cell = "";
    }
  }