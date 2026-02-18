// using the rubric

// timers
// setTimeout - one time timer
// args - function, time - miliseconds
// function timerFunc() {
//     console.log("hello, I'm a timer", new Date())
// }
// setTimeout(timerFunc, 2000);

// setIntervals - happens repeatedly
// setInterval(timerFunc, 2000);

// clearing intervals 
// const myInterval = setInterval(timerFunc, 2000);
// const myButton = document.getElementById("stopTimer")
// myButton.addEventListener("click", () => {
//     clearInterval(myInterval)
// })



// intro to classes
// classes are blue print
// defines structure (or shape if you will)
// used to create instances

// defining the class
// lets make a class for animals 
// class Animal {
//     // construct
    
//     // figuring out properties

//     // figuring out methods
//     constructor(name, color, animalType) {
//         this.name = name,
//         this.animalType = animalType,
//         this.color = color
//     }
//     // methods are functions specific to all copies (instances) of 
//     // this class
//     speak () {
//         console.log(this.name + " is speaking, they are " + this.animalType)
//     }
// }

// using our class to make instances (like copies but variables)
// const cat = new Animal("Kitty", "calico", "feline");
// console.log("cat's name is", cat.name);
// const dog = new Animal("Fido", "brown", "canine");
// console.log("dog's name is", dog.name)
// console.log(cat.speak())

// now try using a class to define a p5 object
class BasicSquare {
    constructor({x, y, color, altColor, speed}) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.altColor = altColor || "brown";
        this.speed = speed;
        this.basic = true;
        this.width = 10;
        this.height = 10;
        
    }
    drawSquare(){
        if(this.basic) {
            fill(this.color);
            rect(this.x, this.y, this.width, this.height)
        } else {
            fill(this.altColor);
              rect(this.x, this.y, this.width, this.height)
        }
    }
    hitCheck(mouseLocX, mouseLocY) {
        if(
            mouseLocX >= this.x && mouseLocX <= this.x + this.width &&
            mouseLocY >= this.y && mouseLocY <= this.y + this.height
        ) {
            // use a single exclamation mark to negate a boolean value
            this.basic = !this.basic;
        }
    }
    move() {
        this.y += this.speed;
    }
}
let squareArray = [];
let startX = 10;
let startY = 10;
for(let loopVar = 0; loopVar < 10; loopVar++) {
    const newSquare = new BasicSquare(
        {
            x: startX,
            y: startY,
            color: "blue",
            altColor: "green",
            speed: 3

        }
    )
    squareArray.push(newSquare)
        startX += 20;
    
}
function setup(){
    createCanvas(800, 600);
    
}
function draw() {
    // clear background each loop
    background("beige")
    // call instance methods
    for(let drawLoopVar = 0; drawLoopVar < squareArray.length; drawLoopVar++) {
        squareArray[drawLoopVar].drawSquare();
        // squareArray[drawLoopVar].move();
    }
}

function mousePressed(){
    // call method to check if square is hit
        for(let drawLoopVar = 0; drawLoopVar < squareArray.length; drawLoopVar++) {
        squareArray[drawLoopVar].hitCheck(mouseX, mouseY);
    }
}

// advice on assignment (we actually don't have time to do the assignment in class)
// start early!!

// quiz prep
// no class or timer stuff
// create an array 
let myArray = ["this", "that", "the other"];
// add something to an array
myArray.push("something");
// remove last
// myArray.pop(); // way more common
// splice -- first arg is index (remember to start counting at 0)
// splice -- second arg is number of items to remove
// splice -- replaces the deleted item
// myArray.splice(2, 1); // splice is only for arrays
// console.log(myArray)

// know how to make a condition using if
// know how to create and update an object
let myCar = {
    wheels: 4,
    color: "grape"
}
myCar.color = "red";
let myOtherCar = myCar;

// delete myOtherCar.wheels; // just for objects -- pretty uncommon
// myOtherCar.language = "English"
// console.log(myOtherCar, myCar)

// how to create a function
// how to call a function
// how to set params/args

// next week will require npm/node - if you can't install this contact me for alternatives