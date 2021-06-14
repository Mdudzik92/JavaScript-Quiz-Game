var startButton = document.querySelector("#startButton");
var answerChoices = document.getElementById("answers");
var timerEl = document.getElementById("timer");
var questionSpace = document.getElementById("question-space");
var secondsLeft = 90;
var questionNumber = -1;
var currentQuestionIndex = 0;
var answer;

var questions = [
	{
		Q: "The condition in an if / else statement is enclosed within ____.",
		Choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
		answer: "quotes",
	},

	{
		Q: "Arrays in JavaScript can be used to store:",
		Choices: [
			"numbers and strings",
			"other arrays",
			"booleans",
			"all of the above",
		],
		answer: "all of the above",
	},
	{
		Q: "Commonly used data types DO NOT include:",
		Choices: ["strings", "booleans", "alerts", "numbers"],
		answer: "alerts",
	},
];

function questionBuilder() {
	// click the 'start the game' button to hide the button
	document.querySelector(".start-quiz").style = "display: none";
	// after the button is hid, the screen changes to the first question and multiple choice answers
	document.querySelector(".question-area").textContent =
		questions[currentQuestionIndex].Q;
	for (var i = 0; i < questions[currentQuestionIndex].Choices.length; i++) {
		var choicesArea = document.querySelector(".answers-area");
		// create a button
		var button = document.createElement("button");
		// add text for the current choice
		button.textContent = questions[currentQuestionIndex].Choices[i];
		// add data value showing the choices index to see if they clicked on the correct answer
		button.setAttribute("data-index", i);
		// add that button to the page
		button.setAttribute("class", "choiceButton");
		choicesArea.appendChild(button);
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
	console.log("handleAnswer");
	currentQuestionIndex++;
	questionBuilder();
	// when the user clicks their choice, it needs to check to see if they clicked the correct one
	// check current question's "correct" property
	// compare that to the data-index of the choice that was clicked on
	// if it was incorrect, decrease their time
	// go to next question
}

document
	.querySelector(".start-quiz")
	.addEventListener("click", questionBuilder);
// document.querySelector(".choiceButton").addEventListener("click", nextQuestion)

let secs = 0;
function countUp() {
	secs++;
	console.log(secs);
}
const quizTime = setInterval(countUp, 1000);
