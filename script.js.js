var questions = [
    {
        Q: "The condition in an if / else statement is enclosed within ____.",
        Choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        Correct: 1
    },
    {
        Q: "Arrays in JavaScript can be used to store:",
        Choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        Correct: 4
    },
    {
        Q: "Commonly used data types DO NOT include:",
        Choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        Correct: 3
    },
]
var currentQuestionIndex = 0

function questionBuilder() {
    // click the 'start the game' button to hide the button
    document.querySelector(".start-quiz").style = "display: none"
    // after the button is hid, the screen changes to the first question and multiple choice answers
    document.querySelector(".question-area").textContent = questions[currentQuestionIndex].Q
    for (var i = 0; i < questions[currentQuestionIndex].Choices.length; i++) {
        var choicesArea = document.querySelector(".answers-area");
        // create a button
        var button = document.createElement("button");
        // add text for the current choice
        button.textContent = questions[currentQuestionIndex].Choices[i];
        // add data value showing the choices index to see if they clicked on the correct answer
        button.setAttribute("data-index", i)
        // add that button to the page
        button.setAttribute("class", "choiceButton")
        choicesArea.appendChild(button)
        button.addEventListener("click", handleAnswer);
    }
    // user chooses an answer and submits, taking them to the next question/answer choices, repeats until done
}

// function nextQuestion() {
//     document.querySelector(".question-area").textContent = questions[currentQuestionIndex].Q
//     for (var i = 0; i < questions[currentQuestionIndex].Choices.length; i++) {
//         var choicesArea = document.querySelector(".answers-area");
//         var button = document.createElement("button");
//         button.textContent = questions[currentQuestionIndex].Choices[i];
//         button.setAttribute("data-index", i)
//         // button.setAttribute("class", "choiceButton")
//         choicesArea.appendChild(button)
//         button.addEventListener("click", function(){console.log("button clicked")})
//     }
// }

function handleAnswer() {
    console.log("handleAnswer") 
    currentQuestionIndex++
    questionBuilder()
    // when the user clicks their choice, it needs to check to see if they clicked the correct one
    // check current question's "correct" property
    // compare that to the data-index of the choice that was clicked on
    // if it was incorrect, decrease their time
    // go to next question
}

document.querySelector(".start-quiz").addEventListener("click", questionBuilder)
// document.querySelector(".choiceButton").addEventListener("click", nextQuestion)

let secs = 0;
function countUp() {
    secs++;
    console.log(secs);
}
const quizTime = setInterval(countUp, 1000);