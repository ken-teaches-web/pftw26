const quizArray = [
    {
        question: "What color is blue",
        answer: "blue"
    },
    {
        question: "Where is North",
        answer: "up"
    }
]

// Math.random() --> number between 0 and 1
// Math.floor() --> rounds number down
// quizArray.length --> the number of items in array

const randomIndex = Math.floor(Math.random() * quizArray.length)
console.log(randomIndex)
const answer = window.prompt(quizArray[randomIndex].question);


const response = "you responded " + answer + " the correct answer was " + quizArray[randomIndex].answer;
window.alert(response)