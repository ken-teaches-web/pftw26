// console.log(document.body.children[0]);
const targetDiv = document.querySelector("#target")
// const newDiv = document.createElement("div");
// newDiv.id = "myNewDiv";
// newDiv.style.background = "#ff0000";
// newDiv.style.width = "250px";
// newDiv.style.height = "250px";
// targetDiv.appendChild(newDiv);
// console.log(newDiv);
// console.log(targetDiv)

const colorArray = ["#ff0000", "#00ff00", "#0000ff"];
let colorIndex = 0;

// event listers 
targetDiv.addEventListener("click", () => {
    console.log("clicked")
    console.log(colorIndex)
    const targDiv = document.getElementById("target");
    // targDiv.style.backgroundColor = colorArray[colorIndex];
    // if(colorIndex < colorArray.length - 1) {
    //     colorIndex++;
    // } else {
    //     colorIndex = 0;
    // }
    targDiv.className = "myClass"
})