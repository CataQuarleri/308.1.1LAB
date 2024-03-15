const PI = 3.1415;
const radius = 5;
const areaMin = 0.8; //1 plant sq meter
const AREA = PI * radius * radius; // total container area in sq meters

let currentPlants = 100;
let weeks = 10;

let plantGrowth = currentPlants * (2 ** weeks) // amount of plants
console.log("plant growth: " + plantGrowth)

const maxCapacity = AREA / areaMin; // 98.1 plants
console.log("max capacity" + maxCapacity) 

const pruningTime = maxCapacity * 0.80; //amount of plants
console.log("Pruning time", pruningTime)

const minCapacity = maxCapacity * 0.50;

//PRUNED
if (plantGrowth > pruningTime ) {
    console.log("Its time to prune")
} else if (plantGrowth < pruningTime && plantGrowth > minCapacity) { //MONITORED
    console.log("Growing at an acceptable rate")
} else { 
console.log("You can plant some more")
}

let biggerArea = plantGrowth * areaMin; //total area in sq meters
console.log("Bigger area: " + biggerArea) // 81920 sq meters
let biggerRadius = Math.sqrt(biggerArea / PI) // meters
console.log("RADIUS OF BIGGER AREA " + biggerRadius) // 161.48 meters

try {
    if (plantGrowth > maxCapacity){
        throw ('Too many plants for this planter!')
    }else {
        console.log("WAY TO GO! Keep growing!")
    }
}catch(err){
console.log(err)
}