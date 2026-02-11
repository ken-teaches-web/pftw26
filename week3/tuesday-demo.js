// hit record

// functions!!! Yeehaw!
// declaring
// function greeting() {
//     console.log("hi");
// }
// const getBread = () => {
//     console.log("I'm getting the bread");
// }
// const getPeanutButter = () => {
//     console.log("I'm getting the peanut butter");
// }
// calling
// make sandwich
// getBread();
// getPeanutButter();

// params/args
// function getStuff(stuff) {
//     console.log(`I'm getting the ${stuff}`);
    
// }

// getStuff("bread");
// getStuff("peanut butter");
// function addTwoNumbers(number1, number2) {
   
//     console.log(number1 + number2);
// }

// addTwoNumbers(5, 6)

// returning values
// function addTwoNumbers(number1, number2){
//     return number1 + number2;
// }
// const sum = addTwoNumbers(17, 345);
// console.log(sum);
// const myArrayOfCars = ["Audi", "Bently", "Mini Cooper", "Dodge"];
// function updateCarArray(newCar) {
//     myArrayOfCars.push(newCar);
// }
// updateCarArray(window.prompt("name a car make"));
// console.log(myArrayOfCars)
// function pureCarUpdate(carArray, newCar) {
//     carArray.push(newCar);
//     return carArray;
// }
// const updateCarArray = pureCarUpdate(myArrayOfCars, "Jeep");
// console.log(updateCarArray);


// loops!!!
// looping through arrays
// for loops
// other math operators
/*
++ - increment by one
-- - decrement by one
+=n - increment by n
-=n - decrement by n
etc, * for multiply and / for devide

*/
// let thisNum = 10;
// thisNum-=5;
// console.log(thisNum);
// for(let loopVariable = myArrayOfCars.length - 1; loopVariable > 0; loopVariable--) {
//     console.log("Loop var", loopVariable)
//     console.log(`I wish I had a ${myArrayOfCars[loopVariable]}`);
// }
// looping through objects
// for in -- loop through objects
// const bike = {
//     tires: 2,
//     color: "red",
//     speeds: 1,
//     breaks: "hand"
// }
// for(let loopVar in bike){
//     console.log(loopVar + ":" + bike[loopVar]);
// }
// // Object.entries or Object.values or Object.keys
// const bikeArray = Object.entries(bike);
// for(let i = 0; i < bikeArray.length; i++) {
//     console.log(bikeArray[i][0] + ": " + bikeArray[i][1])
// }

// myArrayOfCars.forEach((loopVar) => {
//     console.log(loopVar)
// })


// while
// runs while a condition true
// let myNum = 0;
// while(myNum < 10) {
//     console.log(myNum);
//     if(myNum === 5) {
//         break;
//     }
//     myNum++;
// }

// extension P5 Snippets and Tools
let myNum = 0;
const myColors = ["red", "orange", "yellow", "blue", "indigo", "violet"];
function setup() {
    createCanvas(400, 400)
    background("#ccc");
}
function makeCoolSquare(xArg, yArg, color){
    fill(color);
    rect(xArg, yArg, 25, 25);
    rect(xArg + 50, yArg, 25, 25);
    rect(xArg + 50, yArg + 50, 25, 25);
    rect(xArg, yArg + 50, 25, 25);
}
function draw() {
    noLoop();
    angleMode(DEGREES);
    translate(200, 200);
    for(let i = 0; i < 5; i++) {
        // translate(5, 5);
        makeCoolSquare(0, 0, "blue");
        rotate(10)
    }
}