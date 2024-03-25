//https://perscholas.instructure.com/courses/1966/assignments/389668
//Styling
// const boxAndCenterText = 'width: 200px; height: 100px; text-align:center;'
// const whiteborder = 'border: 3px dotted white;'
// const greenborder = 'border: 3px dotted green'
// const padding = 'padding: 20px;'
// const fontLarge = 'font-size: 20px'
// const fontMedium = 'font-size: 15px'
// const fontSmall= 'font-size: 12px'
// const narratorText = 'color: cyan'
// const alienText = 'color: red'


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
        name: `Alien Ship ${[i + 1]}`,
      hull: getRandomInt(3, 7),
      firepower: getRandomInt(2, 5),
      accuracy: getRandomInt(6, 9) / 10,
    }
    alienShips.push(aliens)
  }
    return alienShips
  }
//A function that contains the player attacks logic
  let playerAttack = function(player1, oneComputerShip, computerFleet){
      let extraPower = 0;
    if (player1.missile > 0){
        console.warn(`%c You have ${player1.missile} missiles to add extra power to your attack, do you want to use one?`, 'color: white')
        let useOneMissile = prompt("Use missile? Type y or n")
        if (useOneMissile.toLowerCase() == "y"){
            player1.missile -= 1;
            extraPower = getRandomInt(2, 4)
        } 
    }
    let powerAttack = player1.firepower + extraPower
    console.log("||||", powerAttack)
    oneComputerShip.hull -= powerAttack;
    console.info(`%c You hit the alien ship! ${oneComputerShip.name} has ${oneComputerShip.hull} hull left!`, 'color: white; background-color: green; font-size: 20px; width: 200px; height: 100px; text-align: center')
    if(oneComputerShip.hull <= 0){
        console.log(`%c Yay! That was it for ${oneComputerShip.name}!`, 'color: green; font-size: 20px')
        let alienToRemove = computerFleet.indexOf(oneComputerShip)
        if(alienToRemove !== -1){
            computerFleet.splice(alienToRemove, 1)
        }
        console.warn('%c Your hull is ' + player1.hull + '. PRESS ENTER if you are ready to continue fighting', ' text-align: center; padding: 10px; font-size: 15px; width: 200px; height: 100px;')
        let wantToContinue = prompt(`PRESS ENTER TO CONTINUE! There are ${computerFleet.length} alien ships left. If you want to keep fighting, PRESS ENTER`)
        if (wantToContinue.toLowerCase() === ''){
          battle(player1, computerFleet)
        } else if (Number(wantToContinue) === "NaN") {
            console.log('That was not an option, let\'s start that battle again', 'color: yellow; padding: 20px; font-size: 18px; width: 200px; height: 100px;border: 5px dotted red; text-align: center')
            battle(player1, computerFleet)
        } else {
          console.log('GAME OVER');
        }
    } else {
        console.log(`%c Uh-oh! That was not enough to destroy ${oneComputerShip.name} Get ready for their upcoming attack!`, 'color: yellow; padding: 20px; font-size: 18px; width: 200px; height: 100px;border: 5px dotted red; text-align: center')
        alienAttack(oneComputerShip, player1, computerFleet)
    }
  }
//A function that contains the computer attacks logic
  let alienAttack = function(oneComputerShip, player1, computerFleet){
    console.log(`%c ${oneComputerShip.name} is getting closer, it's sending an attack, watch out!`, 'color: yellow; padding: 20px; font-size: 18px; width: 200px; height: 100px;border: 5px dotted red; text-align: center')
    console.warn('%c Press ENTER to activate your shield!', ' text-align: center; padding: 10px; font-size: 15px; width: 200px; height: 100px;')
    console.log(prompt("PRESS ENTER to activate your shield!"))
    //computer attack
    if (oneComputerShip.accuracy > Math.random()){
        let player1Shield = getRandomInt(0, player1.shield)
      player1.hull -= oneComputerShip.firepower - player1Shield;
      console.log(`%c ${oneComputerShip.name} hit you! Your hull is ${player1.hull}`, 'color: white; background-color: red; font-size: 20px; width: 200px; height: 100px; text-align: center')
      if (player1.hull <= 0){
          console.log("GAME OVER")
        } else {
            console.log(`%c THAT WAS CLOSE! It's ${player1.name} time to attack again`, 'color: cyan; text-align: center; padding: 10px; font-size: 15px; width: 200px; height: 100px;' )
            // continue;
        battle(player1, computerFleet)
      }
    } else {
      console.log(`%cYOU ARE SAFE! The alien ship missed!`, 'padding: 10px; width: 200px; height: 100px; text-align: center; border: 5px dotted green; color: cyan')
      battle(player1, computerFleet)
    }
  }
  //Each fight consist of a player1 attack and a computer attack
  let fight = function(player1, oneComputerShip, computerFleet){
    if(player1.accuracy > Math.random()){
        playerAttack(player1, oneComputerShip, computerFleet)
        }else {
            console.log(`%c Uh-oh, you missed! It's ${oneComputerShip.name} turn to attack. PREPARE!`, 'color: yellow; padding: 20px; font-size: 18px; width: 200px; height: 100px;border: 5px dotted red; text-align: center')
            alienAttack(oneComputerShip, player1, computerFleet)
          }
  }
  //Lasers: player can choose which alien to attack
  let chosenAlienToHit = function(player1, computer){
    let alienToHit = Number(prompt(`CHOOSE YOUR OPONENT! There are ${computer.length} approaching, which one do you want to hit? (Type a number from 1 to ${computer.length} )`)) - 1;
   try{
       if (alienToHit === "" || alienToHit >= computer.length || alienToHit < 0 ){
        console.log(`%cI like how you think outside the box... but that was not an option! ${computer[0].name} is the closer one, let's hit it!`, 'color: cyan; padding: 20px; font-size: 12px; width: 200px; height: 100px;border: 5px dotted yellow; text-align: center')
           fight(player1, computer[0], computer)
       }else if (alienToHit <= computer.length && alienToHit >= 0) {
        console.log(`%cGood idea! You attack ${computer[alienToHit].name}`, 'color: cyan; padding: 20px; font-size: 18px; width: 200px; height: 100px;border: 5px dotted green; text-align: center')
           fight(player1, computer[alienToHit], computer)
       }
   } catch (e) {
    throw new Error(e)
   }}
//The battle is the initializer of the game action. It can go on until there are no more alien ships in the array or player1 looses
  function battle(player1, computer){ //it takes 2 parameters, one for the human, one for the alien fleet
    console.log('%cAs you prepare yourself the alien ships get closer!', 'color: yellow; padding: 20px; font-size: 18px; width: 200px; height: 100px;border: 5px dotted red; text-align: center')    
    if (computer.length <= 0 && player1.hull > 0){
            console.log("YOU WON!")
        } else {
    while(player1.hull > 0){ //We only start a fight if we still have hull
        console.warn(`%c Be ready, it's your time to attack! You have to decide which ship to hit first`, ' text-align: center; padding: 10px; font-size: 15px; width: 200px; height: 100px;')
       chosenAlienToHit(player1, computer);
          return true;
        } 
    }
    }


  //BEGGINING - FIRST Welcome and introduction to the game
    console.log('%c Welcome fellow human!                                     Please introduce yourself', 'color: cyan; padding: 20px; font-size: 20px; width: 200px; height: 100px;border: 5px dotted green; text-align: center')
  
  let playerName = prompt('What is your name?')
  console.log(`%cNice to meet you, ${playerName.length > 1 ? playerName : playerName = "mysterious human"}!`, 'color: cyan; text-align: center; padding: 10px; font-size: 15px; width: 200px; height: 100px;' )
  
  //We create our ship
let mySpaceShip = {
    name: playerName,
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    shield: 0,
    missile: 0,

  }

  //With a prompt the player can decide the level of difficulty that gives amount of aliens, shield and missiles
  console.log('%c You are the best decision maker in the world and that is why we need your help fighting the aliens approaching. ', 'color: cyan; border: 3px dotted white; text-align: center; padding: 10px; font-size: 15px; width: 200px; height: 100px;')
  console.warn('%c Your first task is to choose your difficulty level', ' text-align: center; padding: 10px; font-size: 15px; width: 200px; height: 100px;')
  let difficulty = prompt("Choose your difficulty: Easy, Medium, Hard")
  let amountOfShips = 0;
  switch(difficulty.toLowerCase()){
    case "easy":
       amountOfShips = 6;
       mySpaceShip.shield = 3;
       mySpaceShip.missile = 1;
      break;
    case "medium": 
       amountOfShips = 8;
       mySpaceShip.shield = 2;
       mySpaceShip.missile = 2;
      break;
    case "hard": 
       amountOfShips = 10;
       mySpaceShip.shield = 1;
       mySpaceShip.missile = 4;
      break;
    default:
        amountOfShips = 8;
        mySpaceShip.shield = 2;
        mySpaceShip.missile = 2;
        break;
  }
  console.log('%c That was a tough one, but we are glad you feel comfortable with that level.' + `\n %c You are going to fight  ${amountOfShips} aliens`, 'color: cyan; text-align: center; font-size: 18px', 'color: magenta; text-align: center; font-size: 18px')
  
  let alienFleet = createAlienFleet(amountOfShips);
battle(mySpaceShip, alienFleet)

