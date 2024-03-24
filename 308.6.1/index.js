//https://perscholas.instructure.com/courses/1966/assignments/389668
// const { Console } = require("console");

  //FUNCTIONS
  //We create a randomizer function
  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }
  
  //The alien fleet of ships is created using a function that calls the randomizer function
  function createAlienFleet(amountOfShips){
  let alienShips = []
  for (let i = 0; i < amountOfShips; i++){
    let aliens = {
        name: `AlienShip${[i + 1]}`,
      hull: getRandomInt(3, 7),
      firepower: getRandomInt(2, 5),
      accuracy: getRandomInt(6, 9) / 10,
    }
    alienShips.push(aliens)
  }
    return alienShips
  }
  
  function battle(player1, computer){ //it takes 2 parameters, one for the human, one for the alien fleet
    //The alien fleet array looses one ship every time it gets to line 43
        if (computer.length <= 0 && player1.hull > 0){
            console.log("YOU WON!")
        } else {
    while(player1.hull > 0){ //We only start a fight if we still have hull
        console.warn(`%cAn alien ship is approaching, it's ${player1.name}'s time to attack`, 'background-color: yellow; font-size: 20px; color: white')
        let alienToHit = Number(prompt(`CHOOSE YOUR OPONENT! There are ${computer.length} approaching, which one do you want to hit? (Type a number from 1 to ${computer.length} )`)) - 1;
        if (alienToHit === "" || alienToHit >= computer.length || alienToHit < 0 ){
            if(player1.accuracy > Math.random()){
            computer[0].hull -= player1.firepower;
            console.info(`%c You hit the alien ship! ${computer[0].name} has ${computer[0].hull} hull left!`, 'color: green; font-size: 20px')
            if(computer[0].hull <= 0){
                console.log('%c That was it for that ship!', 'color: green; font-size: 20px')
                computer.shift()
                console.log('%c Your hull is ' + player1.hull, 'color: blue')
                let wantToContinue = prompt(`PRESS ENTER TO CONTINUE! There are ${computer.length} alien ships left. If you want to keep fighting, PRESS ENTER`)
                if (wantToContinue.toLowerCase() === ''){
                  console.log('%c You are going to fight again!', 'color: blue')
                  battle(player1, computer)
                } else if (Number(wantToContinue) === "NaN") {
                    console.log('That was not an option, let\'s start that battle again')
                    battle(player1, computer)
                } else {
                  console.log('GAME OVER')
                  break;
                } 
              }else {
                  console.log("The alien ship is getting closer, it's sending an attack, watch out!")
                  if (computer[0].accuracy > Math.random()){
                    player1.hull -= computer[0].firepower;
                    console.log(`%c ${computer[0].name} hit you! Your hull is ${player1.hull}`, 'color: red; font-size: 20px')
                    if (player1.hull <= 0){
                        console.log("GAME OVER")
                      } else {
                          console.log("THAT WAS CLOSE! It's time to attack again" )
                          // continue;
                      battle(player1, computer)
                    }
                  } else {
                    console.log("YOU ARE SAFE! The alien ship missed!")
                  }
              }
        }else {
          console.log("Uh-oh, you missed! It's " + computer[0].name + " turn to attack. PREPARE!")
          console.log("The alien ship is getting closer, it's sending an attack, watch out!")
          if (computer[0].accuracy > Math.random()){
            player1.hull -= computer[0].firepower;
            console.log(`%c ${computer[0].name} hit you! Your hull is ${player1.hull}`, 'color: red; font-size: 20px')
            if (player1.hull <= 0){
                console.log("GAME OVER")
              } else {
                  console.log("THAT WAS CLOSE! It's time to attack again" )
                  // continue;
              battle(player1, computer)
            }
          } else {
            console.log("YOU ARE SAFE! The alien ship missed!")
          }
        }


        }else if (alienToHit <= computer.length && alienToHit >= 0) {
            if(player1.accuracy > Math.random()){
                computer[alienToHit].hull -= player1.firepower;
                console.log(`%c You hit ${computer[alienToHit].name}! The alien ship has ${computer[alienToHit].hull} hull left!`, 'color: green; font-size: 20px')
                if(computer[alienToHit].hull <= 0){
                    console.log(`%c That was it for that ${computer[alienToHit].name}!`, 'color: green; font-size: 20px')
                    computer.splice(alienToHit, 1)
                    console.log('%c Your hull is ' + player1.hull, 'color: blue')
                    let wantToContinue = prompt(`PRESS ENTER TO CONTINUE! There are ${computer.length} alien ships left. If you want to keep fighting, PRESS ENTER`)
                    if (wantToContinue.toLowerCase() === ''){
                      console.log('%c You are going to fight again!', 'color: blue')
                      battle(player1, computer)
                    } else if (Number(wantToContinue) === "NaN") {
                        console.log('That was not an option, let\'s start that battle again')
                        battle(player1, computer)
                    } else {
                      console.log('GAME OVER')
                      break;
                    } 
                  }else {
                      if (computer[alienToHit].accuracy > Math.random()){
                          console.log(`${computer[alienToHit].name} is getting closer, it's sending an attack, watch out!`)
                        player1.hull -= computer[alienToHit].firepower;
                        console.log(`%c ${computer[alienToHit].name} hit you! Your hull is ${player1.hull}`, 'color: red; font-size: 20px')
                        if (player1.hull <= 0){
                            console.log("GAME OVER")
                          } else {
                              console.log("THAT WAS CLOSE! It's time to attack again" )
                          battle(player1, computer)
                        }
                      } else {
                        console.log("YOU ARE SAFE! The alien ship missed!")
                        battle(player1, computer)
                      }
                  }
            }else {
              console.log("Uh-oh, you missed! It's " + computer[alienToHit].name + " turn to attack. PREPARE!")
              if (computer[alienToHit].accuracy > Math.random()){
                console.log(`${computer[alienToHit].name} is getting closer, it's sending an attack, watch out!`)
              player1.hull -= computer[alienToHit].firepower;
              console.log(`%c ${computer[alienToHit].name} hit you! Your hull is ${player1.hull}`, 'color: red; font-size: 20px')
              if (player1.hull <= 0){
                  console.log("GAME OVER")
                } else {
                    console.log("THAT WAS CLOSE! It's time to attack again" )
                battle(player1, computer)
              }
            } else {
              console.log("YOU ARE SAFE! The alien ship missed!")
              battle(player1, computer)
            }
            }
        }
          return true;
        } 
    }
    }
  
  
  
  console.log('%c Welcome fellow human! Please introduce yourself', 'color: azure; font-size: 20px')
  let playerName = prompt('What is your name?')
  console.log(`%c Hello ${playerName.length > 1 ? playerName : playerName = "Mysterious Human"} ! Nice to meet you!`, 'color: blue; border: 1px solid red' )
  
  //We create our ship
let mySpaceShip = {
    name: playerName,
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    shield: 2,
    lasers: 0,
    missile: 0,

  }

  //With a prompt the player can decide the level of difficulty
  console.log('%c We need you to fight a bunch of aliens that are entering the atmosphere right now. Please let us know how difficult you want this to be', 'color: blue; border: 1px solid red')
  let difficulty = prompt("Choose your difficulty: Easy, Medium, Hard")
  let amountOfShips = 0;
  switch(difficulty.toLowerCase()){
    case "easy":
       amountOfShips = 6;
      break;
    case "medium": 
       amountOfShips = 8;
      break;
    case "hard": 
       amountOfShips = 10;
      break;
    default:
        amountOfShips = 8;
        break;
  }
  console.log('%c Thank you! You are going to fight ' + amountOfShips + ' aliens. Good luck!', 'color: blue')
  
  let alienFleet = createAlienFleet(amountOfShips);
battle(mySpaceShip, alienFleet)

//   let wannaSeeAliens = prompt('Do you want to see the aliens you are fighting against? type y or n')
//   if (wannaSeeAliens.toLowerCase() === 'y'){
//     console.log(alienFleet)
//         console.log("All these ships are getting closer, we'll start the first round now!")
//     let start = prompt("If you are ready to fight, press enter")
//     if (start === ""){
//         battle(mySpaceShip, alienFleet)
//     }
//   } else {
//       console.log("Okay, let's start the game!")
//         console.log("All these ships are getting closer, we'll start the first round now!")
//     let start = prompt("If you are ready to fight, press enter")
//     if (start === ""){
//         battle(mySpaceShip, alienFleet)
//     }
//   }
//   battle(mySpaceShip, alienFleet)
  
  
  // console.log(alienFleet)
  
  
  
  
  // console.log("accuracy", aliens.accuracy)
  // console.log("hull", aliens.hull)
  // console.log("firepower", aliens.firepower)