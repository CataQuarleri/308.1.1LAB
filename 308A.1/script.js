// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.

let nestedArray = [
    [
        [
            [
                [
                    ["1"]
                ]
            ]
        ]
    ]
];


// try{
//     let counter = 1;
//     function counterFunction (num){
//         num++
//         console.log("num", num)
//         counterFunction(num)
//         return num;
//     }
// let theFunction = counterFunction(counter)
// console.log("COUNTER", counter)
// console.log("We are expecting a value", theFunction)
    
// } catch (e){
//     console.log("the error", e)

// }
//num result 10361

// let n = 50000000000
function flattenArray (n, a = 1){

    if (n === 0){
        return a;
    }else {
        return () => flattenArray(n-1, n * a)
    }
}
// console.log("N", n)
// console.log("FLATTEN", flattenArray(n))

// let numbers = [];
// function flattenArray (array){
//     while (array.length > 1){
//         array.flat()
//     }
//     return flattenArray(array)
//     // let newArray = []
//     // for (let i = 0; i < array.length; i++){
//     //     if (array[i].length == 1){
//     //         newArray.push(array[i])
//     //     } else {
//     //         newArray.push(array[i])
//     //         flattenArray(newArray)
//     //     }
//     // }
//     // return newArray;
// }

// console.log("flatten", flattenArray(nestedArray))
const facto = (n, a = 1) => {
    if (n === 0) return a;
    return () => facto(n - 1, n * a);
  }

const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }
//   console.log(trampoline(facto(10000)))
  console.log("facto", facto(10000))