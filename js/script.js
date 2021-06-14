// Variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// Variables to connect to DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");

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
	getQuestion();
}

function getQuestion() {
	// Getting current question
	var currentQuestion = questions[currentQuestionIndex];

	// Update title with current question
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

function questionClick() {
	// Checking if the user guessed wrong
	if (this.value !== questions[currentQuestionIndex].answer) {
		time -= 15;

		if (time < 0) {
			time = 0;
		}

		// Display new time on page
		timerEl.textContent = time;

		feedbackEl.textContent = "Wrong!";
	} else {
		feedbackEl.textContent = "Correct!";
	}

	// Flash right/wrong feedback on page for half a second
	feedbackEl.setAttribute("class", "feedback");
	setTimeout(function () {
		feedbackEl.setAttribute("class", "feedback hide");
	}, 1000);

	// Moving on to next question
	currentQuestionIndex++;

	// Checking if the quiz questions are through
	if (currentQuestionIndex === questions.length) {
		quizEnd();
	} else {
		getQuestion();
	}
}

function startTimer() {
	time--;
	timerEl.textContent = "Time: " + time;

	if (time <= 0) {
		quizEnd();
	}
}

function clockTick() {
	// Update time
	time--;
	timerEl.textContent = time;

	// Checking if user ran out of time
}

// Click the button to start the quiz
startBtn.onclick = startGame;
