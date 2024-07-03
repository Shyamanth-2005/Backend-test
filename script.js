const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: 0,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Mark Twain", "Ernest Hemingway"],
    correct: 0,
  },
  {
    question: "What is the smallest planet in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Earth"],
    correct: 0,
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
    correct: 1,
  },
  {
    question: "What year did World War I begin?",
    options: ["1912", "1914", "1916", "1918"],
    correct: 1,
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "H2"],
    correct: 0,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correct: 3,
  },
  {
    question: "What is the longest river in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    correct: 1,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correct: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const nextButton = document.getElementById("next-question");
const submitButton = document.getElementById("submit-quiz");
const resultMessageEl = document.getElementById("resultMessage");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.innerHTML = `
    <h5>${currentQuestion.question}</h5>
    <ul class="list-group">
      ${currentQuestion.options
        .map(
          (option, index) => `
        <li class="list-group-item">
          <input type="radio" name="option" id="option${index}" value="${index}" />
          <label for="option${index}">${option}</label>
        </li>
      `
        )
        .join("")}
    </ul>
  `;
}

nextButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an answer!");
    return;
  }

  const answer = parseInt(selectedOption.value);
  if (answer === quizData[currentQuestionIndex].correct) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length - 1) {
    loadQuestion();
  } else {
    nextButton.classList.add("d-none");
    submitButton.classList.remove("d-none");
  }
});

submitButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an answer!");
    return;
  }

  const answer = parseInt(selectedOption.value);
  if (answer === quizData[currentQuestionIndex].correct) {
    score++;
  }

  const resultMessage = `You scored ${score} out of ${quizData.length}`;
  resultMessageEl.textContent = resultMessage;
  $("#resultModal").modal("show");
});

loadQuestion();
