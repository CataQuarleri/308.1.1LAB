// import "./styles.css";

// Fibonacci sequence
const n = 40;

let series = new Array(n);
series.fill(0);
series[0] = 0;
series[1] = 1;
for (let i = 2; i < n; i++) {
  series[i] = series[i - 1] + series[i - 2];
}
console.log(series);

// Get Random  Number
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const indexInArray = getRandomInt(10, n - 2);
const chosenNumber = series[indexInArray];
console.log(chosenNumber);
const numberToGuess = series[indexInArray + 2];
console.log(numberToGuess);

let playerNumber = 0;
let attempts = 0;
function mainGaming(playerNumber, numberToGuess) {
attempts++
  if (attempts <= 3){
    
    playerNumber = prompt("Choose your number: ");
  console.log("PLAYER NUMBER", playerNumber);
  document.getElementById("playerNumber").innerHTML = `${playerNumber}`;

  if (playerNumber === numberToGuess) {
    setTimeout(() => {}, 50);
    console.log("You win!");
    gameOver = false;
  } else if (playerNumber < numberToGuess) {
      console.log("TRY A HIGHER NUMBER");
setTimeout(()=>{
    alert("TRY A HIGHER NUMBER")
    mainGaming(playerNumber, numberToGuess);
}, 1000)

  } else if (playerNumber > numberToGuess) {
  
    console.log("TRY A LOWER NUMBER");
    setTimeout(()=>{
        alert("TRY A LOWER NUMBER")
        mainGaming(playerNumber, numberToGuess);
    }, 1000)
  } 
//   else {
//     playerNumber = 'YOU LOST'
//   }
}else {
  document.getElementById("result").innerHTML = `The number was ${numberToGuess}`;
    alert("YOU LOST")
}


//   if (gameOver) {
//     console.log(`You do not have any more tries! Number was: ${numberToGuess}`);
//   }
//   console.log("Do you want to play again?");
}


// HTML
document.getElementById("firstNumber").innerHTML = `${chosenNumber}`;
setTimeout(()=>{
    mainGaming(playerNumber, numberToGuess);
}, 5000)

