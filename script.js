const questions = [
    {
        question: "What is the most popular programming language for web development?",
        answer: [
            { text: "Python", correct: false},
            { text: "Java", correct: false},
            { text: "JavaScript", correct: true},
            { text: "C++", correct: false}
        ]
    },

    {
        question: "Add question here?",
        answers: [
            { text: "One", correct: false},
            { text: "Two", correct: false},
            { text: "Three", correct: true},
            { text: "Four", correct: false}
        ]
    },

    {
        question: "Add question here?",
        answers: [
            { text: "One", correct: false},
            { text: "Two", correct: false},
            { text: "Three", correct: true},
            { text: "Four", correct: false}
        ]
    },

    {
        question: "Add question here?",
        answers: [
            { text: "One", correct: false},
            { text: "Two", correct: false},
            { text: "Three", correct: true},
            { text: "Four", correct: false}
        ]
    },

    {
        question: "Add question here?",
        answers: [
            { text: "One", correct: false},
            { text: "Two", correct: false},
            { text: "Three", correct: true},
            { text: "Four", correct: false}
        ]
    },

    {
        question: "Add question here?",
        answers: [
            { text: "One", correct: false},
            { text: "Two", correct: false},
            { text: "Three", correct: true},
            { text: "Four", correct: false}
        ]
    },

    {
        question: "Add question here?",
        answers: [
            { text: "One", correct: false},
            { text: "Two", correct: false},
            { text: "Three", correct: true},
            { text: "Four", correct: false}
        ]
    },

    {
        question: "Add question here?",
        answers: [
            { text: "One", correct: false},
            { text: "Two", correct: false},
            { text: "Three", correct: true},
            { text: "Four", correct: false}
        ]
    },

    {
        question: "Add question here?",
        answers: [
            { text: "One", correct: false},
            { text: "Two", correct: false},
            { text: "Three", correct: true},
            { text: "Four", correct: false}
        ]
    },

    {
        question: "Add question here?",
        answers: [
            { text: "One", correct: false},
            { text: "Two", correct: false},
            { text: "Three", correct: true},
            { text: "Four", correct: false}
        ]
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
}

startQuiz();