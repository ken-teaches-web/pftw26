// string
// let greeting = "Hello MCAD";
// reassign but don't use const or let
// greeting = "Hello Kitty";

// number
// let myAge = 21;
// myAge = myAge + 30;
// boolean
// let amIFunny = true;
// conditions
// if
// condition in parens resolve to true or false
// curly bracket block only runs on true
// if (myAge > 50) {
//     window.alert("I'm old")
// } else {
//     window.alert("I'm young")
// }
const favColor = window.prompt("What is your favorite color");

// setup runs once
function setup() {
    // makes a new canvas - required
    createCanvas(800, 600)
    // sets canvas color
    background("gray")
}

function draw() {
    // arg distance left, arg 2 is distance top, arg 3 diameter, arg 
    stroke("blue")
    fill(favColor)
    ellipse(200, 450, 40)

    stroke("white")
   

    rect(20, 20, 100, 500)

}