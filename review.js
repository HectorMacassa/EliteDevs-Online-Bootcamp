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
  
  const reviewQuestionsElement = document.getElementById("review-questions");
  const goBackButton = document.getElementById("go-back-btn");
  
  function showReview() {
    resetReviewState();
  
    questions.forEach((question, index) => {
      const questionContainer = document.createElement("div");
      questionContainer.classList.add("review-question");
  
      // Display the question text as h2 element
      const questionText = document.createElement("h2");
      questionText.innerHTML = `Question ${index + 1}: ${question.question}`;
      questionContainer.appendChild(questionText);
  
      // Display each answer as buttons
      const answerButtonsContainer = document.createElement("div");
      answerButtonsContainer.id = `answer-buttons-${index + 1}`;
  
      question.answer.forEach((answer, answerIndex) => {
        const button = document.createElement("button");
        button.innerHTML = `Answer ${answerIndex + 1}: ${answer.text}`;
        button.classList.add("btn");
  
        if (answer.correct) {
          button.classList.add("correct");
        }
  
        answerButtonsContainer.appendChild(button);
      });
  
      questionContainer.appendChild(answerButtonsContainer);
      reviewQuestionsElement.appendChild(questionContainer);
    });
  
    goBackButton.addEventListener("click", () => {
      // Navigate back to the main test page
      window.location.href = "test.html";
    });
  
    // Highlight selected and correct answers
    highlightAnswers();
  }
  
  function resetReviewState() {
    while (reviewQuestionsElement.firstChild) {
      reviewQuestionsElement.removeChild(reviewQuestionsElement.firstChild);
    }
  }
  
  function highlightAnswers() {
    questions.forEach((question, questionIndex) => {
      question.answer.forEach((answer, answerIndex) => {
        const button = document.getElementById(`answer-buttons-${questionIndex + 1}`).children[answerIndex];
        
        // Check if the answer was selected
        if (answer.selected) {
          button.classList.add("selected");
        }
  
        // Disable all buttons
        button.disabled = true;
      });
    });
  }
  
  // Call the showReview function when the review page loads
  showReview();
  