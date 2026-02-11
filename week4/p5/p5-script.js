// let box = {
//     x: 100,
//     y: 100,
//     width: 100,
//     height: 100,
//     color: "red"
// }
// let myCircle = {
//     x: 300,
//     y: 250,
//     diameter: 100,
//     color: "teal"
// }
let gap = 25;
let boxWidth = 50;
let boxHeight = 50;
let startingX = 25;
let startingY = 100;
let boxes = [];
for(let outerLoopVar = 0; outerLoopVar < 3; outerLoopVar++) { // rows
    // create 1 row
    for(let loopVar = 0; loopVar <4; loopVar++){ // columns

        const newBox = {
            x: startingX,
            y: startingY
        };
        boxes.push(newBox);

        // startingX += (boxWidth + gap);
        startingX = startingX + boxWidth + gap; // increases the x the box for the
        // next box
    }
 startingY += 100; // increases the y for the next row
 startingX = 25; // resets the x back to the orginal position;
}
console.log(boxes);

function setup() {
    createCanvas(500, 500);
    background("grey");
}
function draw() {

    // creates row
    for(let boxVar = 0; boxVar < boxes.length; boxVar++) {
        rect(boxes[boxVar].x, boxes[boxVar].y, boxWidth, boxHeight);
    }

    // fill(box.color);
    //  rect(100, 100, 100, 100)
    //  fill(myCircle.color)
    //  circle(myCircle.x, myCircle.y, myCircle.diameter)
}

function mousePressed() {
    // console.log(mouseX, mouseY)
    // if(
    //     mouseX > box.x && mouseX < (box.x + box.width) && // checking for X hit
    //     mouseY > box.y && mouseY < (box.y + box.height) // checking for Y
    // ) {
    //     console.log("you hit it");
    //     box.color = "blue";
    // }
    // const mouseDistanceFromMyCircle = dist(mouseX, mouseY, myCircle.x, myCircle.y);
    // if (mouseDistanceFromMyCircle <= myCircle.diameter) {
    //     console.log("you hit the circle");
    // }
    for(let hitLoopVar = 0; hitLoopVar < boxes.length; hitLoopVar++) {
        if(
            mouseX > boxes[hitLoopVar].x && mouseX < (boxes[hitLoopVar].x + boxWidth) && // checking for X hit
        mouseY > boxes[hitLoopVar].y && mouseY < (boxes[hitLoopVar].y + boxHeight) // checking for Y
        ) {
            console.log("you hit box " + hitLoopVar);
        }
    }

}