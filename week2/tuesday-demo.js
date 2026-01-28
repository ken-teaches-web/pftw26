// Hit record
// Jan 27
// Syllabus confusion

// Comments
// Demonstrate how arrays work and how you can 
// use them
/*
this 
is 
a
multiline comment
*/

// creating vars - const, let, and var


// new datatypes - arrays and objects
console.log("hello")
// arrays - collections
// creation
// to create you use square brackets
let dogNames = ["Yoshi", "Spot", "Fido"]; // know for quiz
console.log("my Array", dogNames)

console.log(dogNames[1])
const ages = [21, 55, 87];
console.log(ages[0])
const mixedArray = ["bob", 3, "postman", false];

// push adds to the end
mixedArray.push("Jane"); // know for quiz
mixedArray[1] = "Alice";
console.log(mixedArray);

// pop removes from the end
// let removed = mixedArray.pop();
// console.log("after pop", mixedArray)

// // removes from the beginning
// mixedArray.shift();
// console.log("after shift", mixedArray)

// deletes at index (first arg) and deletes this many (second arg)
console.log("before", mixedArray)
// mixedArray.splice(2,2); // good to know may be on quiz
console.log("after", mixedArray)
const sliced = mixedArray.slice(0, 2);
console.log(mixedArray, "original")
console.log(sliced, "sliced")




// objects - organization structure
const myCar = {
    name: "Juke",
    color: "black",
    year: "2015",
    wheels: 4,
    hasGas: true,
    nickNames: ["darth", "jukey", "dang car"]
}
// myCar["hasGas"] = false; // array notation
myCar.hasGas = false;
console.log("my car", myCar)



// combining them
// let myBoardGames = [
//     {
//         name: "Monopoloy",
//         rating: 4,
//         owned: true,
//         hasCausedFights: true
//     },
//     {
//         name: "Uno",
//         rating: 5,
//         owned: false,
//         hasCausedFights: false
//     }
// ]
// console.log(myBoardGames[0].name)

// let myStuff = ["thing", "thing2"];
// const userInput = window.prompt("another thing");
// myStuff.push(userInput);
// console.log(myStuff)

const myCars = [
    {
        make: "Volkswagen",
        year: "1970",
        model: "Beetle"
    },
    {
        make: "Nissan",
        year: "2015",
        model: "Juke"
    }, 
    {
        make: "Hyndai",
        year: "2022",
        model: "Tucson"
    }
];
// const whichCar = window.prompt("I have " + myCars.length + " cars, which car should I share with you?");

// const selectedIndex = Number(whichCar) - 1;
// window.alert("You chose my " + myCars[selectedIndex].model + " which is a " + myCars[selectedIndex].make)

const myRandom = Math.floor(Math.random() * myCars.length);
console.log("random number", myCars[myRandom]);


// how to use with p5