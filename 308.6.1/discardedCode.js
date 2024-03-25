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
  
  
  let fight = function(player1, oneComputerShip, computerFleet){
    if(player1.accuracy > Math.random()){
        oneComputerShip.hull -= player1.firepower;
        console.info(`%c You hit the alien ship! ${oneComputerShip.name} has ${oneComputerShip.hull} hull left!`, 'color: green; font-size: 20px')
        if(oneComputerShip.hull <= 0){
            console.log('%c That was it for that ship!', 'color: green; font-size: 20px')
            computerFleet.shift()
            console.log('%c Your hull is ' + player1.hull, 'color: blue')
            let wantToContinue = prompt(`PRESS ENTER TO CONTINUE! There are ${computerFleet.length} alien ships left. If you want to keep fighting, PRESS ENTER`)
            if (wantToContinue.toLowerCase() === ''){
              console.log('%c You are going to fight again!', 'color: blue')
              battle(player1, computerFleet)
            } else if (Number(wantToContinue) === "NaN") {
                console.log('That was not an option, let\'s start that battle again')
                battle(player1, computerFleet)
            } else {
              console.log('GAME OVER');
            } 
}else {
    console.log("The alien ship is getting closer, it's sending an attack, watch out!")
    if (oneComputerShip.accuracy > Math.random()){
      player1.hull -= oneComputerShip.firepower;
      console.log(`%c ${oneComputerShip.name} hit you! Your hull is ${player1.hull}`, 'color: red; font-size: 20px')
      if (player1.hull <= 0){
          console.log("GAME OVER")
        } else {
            console.log("THAT WAS CLOSE! It's time to attack again" )
            // continue;
        battle(player1, computerFleet)
      }
    } else {
      console.log("YOU ARE SAFE! The alien ship missed!")
    }
}
        }else {
            console.log("Uh-oh, you missed! It's " + oneComputerShip.name + " turn to attack. PREPARE!")
            console.log("The alien ship is getting closer, it's sending an attack, watch out!")
            if (oneComputerShip.accuracy > Math.random()){
              player1.hull -= oneComputerShip.firepower;
              console.log(`%c ${oneComputerShip.name} hit you! Your hull is ${player1.hull}`, 'color: red; font-size: 20px')
              if (player1.hull <= 0){
                  console.log("GAME OVER")
                } else {
                    console.log("THAT WAS CLOSE! It's time to attack again" )
                    // continue;
                battle(player1, computerFleet)
              }
            } else {
              console.log("YOU ARE SAFE! The alien ship missed!")
            }
          }
  }
  
  // console.log("accuracy", aliens.accuracy)
  // console.log("hull", aliens.hull)
  // console.log("firepower", aliens.firepower)
let chosenAlienToHit = function(player1, computer){
    let alienToHit = Number(prompt(`CHOOSE YOUR OPONENT! There are ${computer.length} approaching, which one do you want to hit? (Type a number from 1 to ${computer.length} )`)) - 1;
   try{
       if (alienToHit === "" || alienToHit >= computer.length || alienToHit < 0 ){
           fight(player1, computer[0], computer)
       }else if (alienToHit <= computer.length && alienToHit >= 0) {
           fight(player1, computer[alienToHit], computer)
       }
   } catch (e) {
    throw new Error(e)
   }}



//         if(player1.accuracy > Math.random()){
//         computer[0].hull -= player1.firepower;
//         console.info(`%c You hit the alien ship! ${computer[0].name} has ${computer[0].hull} hull left!`, 'color: green; font-size: 20px')
//         if(computer[0].hull <= 0){
//             console.log('%c That was it for that ship!', 'color: green; font-size: 20px')
//             computer.shift()
//             console.log('%c Your hull is ' + player1.hull, 'color: blue')
//             let wantToContinue = prompt(`PRESS ENTER TO CONTINUE! There are ${computer.length} alien ships left. If you want to keep fighting, PRESS ENTER`)
//             if (wantToContinue.toLowerCase() === ''){
//               console.log('%c You are going to fight again!', 'color: blue')
//               battle(player1, computer)
//             } else if (Number(wantToContinue) === "NaN") {
//                 console.log('That was not an option, let\'s start that battle again')
//                 battle(player1, computer)
//             } else {
//               console.log('GAME OVER');
//             } 
// }
//         }



//ORIGINAL WORKING CODE FOR BATTLE
function battle(player1, computer){ //it takes 2 parameters, one for the human, one for the alien fleet
    if (computer.length <= 0 && player1.hull > 0){
        console.log("YOU WON!")
    } else {
while(player1.hull > 0){ //We only start a fight if we still have hull
    console.warn(`%cAn alien ship is approaching, it's ${player1.name}'s time to attack`, 'background-color: yellow; font-size: 20px; color: white')
    // let alienToHit = Number(prompt(`CHOOSE YOUR OPONENT! There are ${computer.length} approaching, which one do you want to hit? (Type a number from 1 to ${computer.length} )`)) - 1;
    // if (alienToHit === "" || alienToHit >= computer.length || alienToHit < 0 ){
    //     if(player1.accuracy > Math.random()){
    //     computer[0].hull -= player1.firepower;
    //     console.info(`%c You hit the alien ship! ${computer[0].name} has ${computer[0].hull} hull left!`, 'color: green; font-size: 20px')
    //     if(computer[0].hull <= 0){
    //         console.log('%c That was it for that ship!', 'color: green; font-size: 20px')
    //         computer.shift()
    //         console.log('%c Your hull is ' + player1.hull, 'color: blue')
    //         let wantToContinue = prompt(`PRESS ENTER TO CONTINUE! There are ${computer.length} alien ships left. If you want to keep fighting, PRESS ENTER`)
    //         if (wantToContinue.toLowerCase() === ''){
    //           console.log('%c You are going to fight again!', 'color: blue')
    //           battle(player1, computer)
    //         } else if (Number(wantToContinue) === "NaN") {
    //             console.log('That was not an option, let\'s start that battle again')
    //             battle(player1, computer)
    //         } else {
    //           console.log('GAME OVER')
    //           break;
    //         } 
    //       }else {
    //           console.log("The alien ship is getting closer, it's sending an attack, watch out!")
    //           if (computer[0].accuracy > Math.random()){
    //             player1.hull -= computer[0].firepower;
    //             console.log(`%c ${computer[0].name} hit you! Your hull is ${player1.hull}`, 'color: red; font-size: 20px')
    //             if (player1.hull <= 0){
    //                 console.log("GAME OVER")
    //               } else {
    //                   console.log("THAT WAS CLOSE! It's time to attack again" )
    //                   // continue;
    //               battle(player1, computer)
    //             }
    //           } else {
    //             console.log("YOU ARE SAFE! The alien ship missed!")
    //           }
    //       }
    // }else {
    //   console.log("Uh-oh, you missed! It's " + computer[0].name + " turn to attack. PREPARE!")
    //   console.log("The alien ship is getting closer, it's sending an attack, watch out!")
    //   if (computer[0].accuracy > Math.random()){
    //     player1.hull -= computer[0].firepower;
    //     console.log(`%c ${computer[0].name} hit you! Your hull is ${player1.hull}`, 'color: red; font-size: 20px')
    //     if (player1.hull <= 0){
    //         console.log("GAME OVER")
    //       } else {
    //           console.log("THAT WAS CLOSE! It's time to attack again" )
    //           // continue;
    //       battle(player1, computer)
    //     }
    //   } else {
    //     console.log("YOU ARE SAFE! The alien ship missed!")
    //   }
    // }


    // }else if (alienToHit <= computer.length && alienToHit >= 0) {
    //     if(player1.accuracy > Math.random()){
    //         computer[alienToHit].hull -= player1.firepower;
    //         console.log(`%c You hit ${computer[alienToHit].name}! The alien ship has ${computer[alienToHit].hull} hull left!`, 'color: green; font-size: 20px')
    //         if(computer[alienToHit].hull <= 0){
    //             console.log(`%c That was it for that ${computer[alienToHit].name}!`, 'color: green; font-size: 20px')
    //             computer.splice(alienToHit, 1)
    //             console.log('%c Your hull is ' + player1.hull, 'color: blue')
    //             let wantToContinue = prompt(`PRESS ENTER TO CONTINUE! There are ${computer.length} alien ships left. If you want to keep fighting, PRESS ENTER`)
    //             if (wantToContinue.toLowerCase() === ''){
    //               console.log('%c You are going to fight again!', 'color: blue')
    //               battle(player1, computer)
    //             } else if (Number(wantToContinue) === "NaN") {
    //                 console.log('That was not an option, let\'s start that battle again')
    //                 battle(player1, computer)
    //             } else {
    //               console.log('GAME OVER')
    //               break;
    //             } 
    //           }else {
    //               if (computer[alienToHit].accuracy > Math.random()){
    //                   console.log(`${computer[alienToHit].name} is getting closer, it's sending an attack, watch out!`)
    //                 player1.hull -= computer[alienToHit].firepower;
    //                 console.log(`%c ${computer[alienToHit].name} hit you! Your hull is ${player1.hull}`, 'color: red; font-size: 20px')
    //                 if (player1.hull <= 0){
    //                     console.log("GAME OVER")
    //                   } else {
    //                       console.log("THAT WAS CLOSE! It's time to attack again" )
    //                   battle(player1, computer)
    //                 }
    //               } else {
    //                 console.log("YOU ARE SAFE! The alien ship missed!")
    //                 battle(player1, computer)
    //               }
    //           }
    //     }else {
    //       console.log("Uh-oh, you missed! It's " + computer[alienToHit].name + " turn to attack. PREPARE!")
    //       if (computer[alienToHit].accuracy > Math.random()){
    //         console.log(`${computer[alienToHit].name} is getting closer, it's sending an attack, watch out!`)
    //       player1.hull -= computer[alienToHit].firepower;
    //       console.log(`%c ${computer[alienToHit].name} hit you! Your hull is ${player1.hull}`, 'color: red; font-size: 20px')
    //       if (player1.hull <= 0){
    //           console.log("GAME OVER")
    //         } else {
    //             console.log("THAT WAS CLOSE! It's time to attack again" )
    //         battle(player1, computer)
    //       }
    //     } else {
    //       console.log("YOU ARE SAFE! The alien ship missed!")
    //       battle(player1, computer)
    //     }
    //     }
    // }
      return true;
    } 
}
}


//fight before separating each attack 
 //Each fight consist of a player1 attack and a computer attack
 let fight1 = function(player1, oneComputerShip, computerFleet){
    //player attack
    if(player1.accuracy > Math.random()){
        playerAttack(player1, oneComputerShip, computerFleet)
        // oneComputerShip.hull -= player1.firepower;
        // console.info(`%c You hit the alien ship! ${oneComputerShip.name} has ${oneComputerShip.hull} hull left!`, 'color: green; font-size: 20px')
        // if(oneComputerShip.hull <= 0){
        //     console.log('%c That was it for that ship!', 'color: green; font-size: 20px')
        //     computerFleet.shift()
        //     console.warn('%c Your hull is ' + player1.hull, 'color: blue')
        //     let wantToContinue = prompt(`PRESS ENTER TO CONTINUE! There are ${computerFleet.length} alien ships left. If you want to keep fighting, PRESS ENTER`)
        //     if (wantToContinue.toLowerCase() === ''){
        //       console.log('%c You are going to fight again!', 'color: blue')
        //       battle(player1, computerFleet)
        //     } else if (Number(wantToContinue) === "NaN") {
        //         console.log('That was not an option, let\'s start that battle again')
        //         battle(player1, computerFleet)
        //     } else {
        //       console.log('GAME OVER');
        //     } 
// }else {
//     alienAttack(oneComputerShip, player1, computerFleet)
    // console.log("The alien ship is getting closer, it's sending an attack, watch out!")
    // //computer attack
    // if (oneComputerShip.accuracy > Math.random()){
    //     let player1Shield = getRandomInt(0, player1.shield)
    //   player1.hull -= oneComputerShip.firepower - player1Shield;
    //   console.log(`%c ${oneComputerShip.name} hit you! Your hull is ${player1.hull}`, 'color: red; font-size: 20px')
    //   if (player1.hull <= 0){
    //       console.log("GAME OVER")
    //     } else {
    //         console.log("THAT WAS CLOSE! It's time to attack again" )
    //         // continue;
    //     battle(player1, computerFleet)
    //   }
    // } else {
    //   console.log("YOU ARE SAFE! The alien ship missed!")
    //   battle(player1, computerFleet)
    // }
// }
        }else {
            console.log("Uh-oh, you missed! It's " + oneComputerShip.name + " turn to attack. PREPARE!")
            alienAttack(oneComputerShip, player1, computerFleet)
            // console.log("The alien ship is getting closer, it's sending an attack, watch out!")
            // if (oneComputerShip.accuracy > Math.random()){
            //   player1.hull -= oneComputerShip.firepower;
            //   console.log(`%c ${oneComputerShip.name} hit you! Your hull is ${player1.hull}`, 'color: red; font-size: 20px')
            //   if (player1.hull <= 0){
            //       console.log("GAME OVER")
            //     } else {
            //         console.log("THAT WAS CLOSE! It's time to attack again" )
            //         // continue;
            //     battle(player1, computerFleet)
            //   }
            // } else {
            //   console.log("YOU ARE SAFE! The alien ship missed!")
            //   battle(player1, computerFleet)
            // }
          }
  }
