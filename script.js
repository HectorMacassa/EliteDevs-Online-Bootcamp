const questions = [
  {
    question:
      "What is the most popular programming language for web development?",
    answer: [
      { text: "Python", correct: false },
      { text: "Java", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false },
    ],
  },

  {
    question:
      "What is HTML used for?",
    answer: [
      { text: "Creating the structure of a web page", correct: true },
      { text: "Styling the appearance of a web page", correct: false },
      { text: "Executing code on a web page", correct: false },
      { text: "Storing data on a web server", correct: false },
    ],
  },

  {
    question:
      "What is CSS used for?",
    answer: [
      { text: "Creating the structure of a web page", correct: false },
      { text: "Styling the appearance of a web page", correct: true },
      { text: "Executing code on a web page", correct: false },
      { text: "Storing data on a web server", correct: false },
    ],
  },

  {
    question:
      "What is a JavaScript framework?",
    answer: [
      { text: "A collection of libraries and tools that make it easier to develop web applications", correct: true },
      { text: "A type of programming language", correct: false },
      { text: "A server-side programming language", correct: false },
      { text: "A client-side programming language", correct: false },
    ],
  },

  {
    question:
      "What is a database?",
    answer: [
      { text: "A type of programming language", correct: false },
      { text: "A server-side programming language", correct: false },
      { text: "A client-side programming language", correct: false },
      { text: "A collection of data organized for easy access", correct: true },
    ],
  },

  {
    question:
      "What is a REST API?",
    answer: [
      { text: "A type of database", correct: false },
      { text: "A server-side programming language", correct: false },
      { text: "A set of rules that define how applications can communicate with each other", correct: true },
      { text: "A client-side programming language", correct: false },
    ],
  },

  {
    question:
      "What is SQL?",
    answer: [
      { text: "A type of database", correct: false },
      { text: "A server-side programming language", correct: false },
      { text: "A programming language used to query databases", correct: true },
      { text: "A client-side programming language", correct: false },
    ],
  },

  {
    question:
      "What is version control?",
    answer: [
      { text: "A system that allows you to track changes to your code over time", correct: true },
      { text: "A type of database", correct: false },
      { text: "A server-side programming language", correct: false },
      { text: "A client-side programming language", correct: false },
    ],
  },

  {
    question:
      "What is a git repository?",
    answer: [
      { text: "A type of database", correct: false },
      { text: "A server-side programming language", correct: false },
      { text: "A place where you store your code", correct: true },
      { text: "A client-side programming language", correct: false },
    ],
  },

  {
    question:
      "What is the most popular programming language for web development?",
    answer: [
      { text: "Python", correct: false },
      { text: "Java", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const reviewButton = document.getElementById("review-btn");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 180;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  }

  selectedBtn.classList.add("selected");

  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
  });

  nextButton.style.display = "block";
}



function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${(score/questions.length)*100}%`;
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }
    else {
        showScore();
    }
}

function startTimer() {
  const timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerElement.innerHTML = formatTime(timeLeft);
    } else {
      clearInterval(timerInterval);
      showScore();
    }
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else {
        startQuiz();
    }
    reviewButton.addEventListener("click", () => {
      // Redirect to the review page
      window.location.href = "review.html";
    });

})

startQuiz();
