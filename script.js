// Variables to connect to DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("timer");
var answerChoices = document.getElementById("answers");
var startBtn = document.querySelector("#startButton");
var questionSpace = document.getElementById("question-space");

// Variables for setting the state of the quiz
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

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

function startGame() {
	// Click the button to hide the start screen
	var startScreenEl = document.getElementById("start-screen");
	startScreenEl.setAttribute("class", "hide");

	// Show the questions section
	questionsEl.removeAttribute("class");

	// Starts the timer
	timerId = setInterval(startTimer, 1000);

	// Shows starting time
	timerEl.textContent = time;

	// Then runs the nextQuestion function, starting the quiz off. User chooses an answer and submits, taking them to the next question/answer choices, repeats until done
	nextQuestion();
}

function startTimer() {
	time--;
	timerEl.textContent = "Time: " + time;

	if (time <= 0) {
		quizEnd();
	}
}

function nextQuestion() {
	// Getting current question object from array
	var currentQuestion = questions[currentQuestionIndex];

	// Updating the title with the current question
	var titleEl = document.getElementById("question-title");
	titleEl.textContent = currentQuestion.title;

	// Clearing out old question choices
	choicesEl.innerHTML = "";

	// Looping over choices
	currentQuestion.choices.forEach(function (choice, i) {
		// Creating new button for each choice
		var choiceNode = document.createElement("button");
		choiceNode.setAttribute("class", "choice");
		choiceNode.setAttribute("value", choice);

		choiceNode.textContent = i + 1 + ". " + choice;

		// Attaching click event listener to each choice
		choiceNode.onclick = questionClick;

		// Display on the page
		choicesEl.appendChild(choiceNode);
	});
}

function answerButtons() {
	if (answer === event.target.textContent) {
		feedbackDisplay.innerHTML = "Correct!";
	}
}

function quizEnd() {
	// Stops timer
	clearInterval(countdown);

	// Shows end screen
	var endScreenEl = document.getElementById("end-screen");
	endScreenEl.removeAttribute("class");

	// Shows final score
	var finalScoreEl = document.getElementById("final-score");
	finalScoreEl.textContent = time;

	// Hides questions section
	document.getElementById("quiz").classList.add("d-none");
}

function clockTick() {
	// Update time
	time--;
	timerEl.textContent = time;

	// Checking if user ran out of time
}

// Click the button to start the quiz
startBtn.onclick = startQuiz;
