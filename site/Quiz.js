const questions = [
  {
    question: "Qual o primeiro boss do dark souls 1 ?",
    options: ["Capra Demon ", "Bell Gargoyle", "Asylum Demon"],
    correctAnswer: 3
  },
  {
    question: "Qual o primeiro boss do dark souls 2 ?",
    options: ["Last Giant", "Skeleton Lords", "Ruin Sentine"],
    correctAnswer: 1
  },
  
  {
    question: "Qual o primeiro boss do dark souls 3 ?",
    options: ["Old Demon King", "Iudex Gundyr ", "High Lord Wolnir"],
    correctAnswer: 2
  },
  
  {
    question: "Quantos feitiços tem em Dark Souls 3??",
    options: ["35 milagres, 27 piromancias e 34 feitiços azuis.", "37 milagres, 25 piromancias e 30 feitiços azuis.", "27 milagres, 35 piromancias e 40 feitiços azuis."],
    correctAnswer: 1
  },
  
  {
    question: "Qual a melhor classe para iniciantes no Dark Souls 3??",
    options: ["guerreiro", "arauto", "Cavaleiro"],
    correctAnswer: 2
  },
  
  {
    question: "Qual é a arma mais forte de Dark Souls 3?",
    options: ["Frayed Blade", "Cavaleiro Anelado", "Murky Longstaff"],
    correctAnswer: 2
  },
  
  {
    question: "Qual é o nome da poção de cura?",
    options: ["Estus", "Life Ring", "Refined Gem"],
    correctAnswer: 1
  },
  
  {
    question: "Qual é considerado o melhor Dark Souls?",
    options: ["Dark Souls 3", "Dark Souls 2", " Dark Souls"],
    correctAnswer: 3
  },
  
  {
    question: "Para que serve o braseiro no Dark Souls 3?",
    options: ["força de chama", "revive", "checkpoint"],
    correctAnswer: 1
  },
  
  {
    question: "Em que Dark Souls foi inspirado?",
    options: ["Dragon Dogma", "Elden Ring", "Bloodborne"],
    correctAnswer: 1
    ,
  },
  
];

let currentQuestion = 0;
let correctCount = 0;
let incorrectCount = 0;

const questionElement = document.getElementById("question");
const option1Element = document.getElementById("option1");
const option2Element = document.getElementById("option2");
const option3Element = document.getElementById("option3");
const correctCountElement = document.getElementById("correct-count");
const incorrectCountElement = document.getElementById("incorrect-count");

function loadQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;
  option1Element.textContent = question.options[0];
  option2Element.textContent = question.options[1];
  option3Element.textContent = question.options[2];
}


function checkAnswer(selectedOption) {
  const question = questions[currentQuestion];
  if (selectedOption === question.correctAnswer) {
    correctCount++;
  } else {
    incorrectCount++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz finalizado! Acertos: " + correctCount + ", Erros: " + incorrectCount);
    correctCountElement.textContent = correctCount;
    incorrectCountElement.textContent = incorrectCount;
  }
  incorrectCountElement.innerHTML = incorrectCount;
  correctCountElement.innerHTML = correctCount;

}



loadQuestion()
const feedbackElement = document.getElementById("feedback");

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
    if (selectedOption === question.correctAnswer) {
        correctCount++;
        feedbackElement.style.backgroundColor = "green";
        feedbackElement.textContent = "Resposta correta!";
    } else {
        incorrectCount++;
        feedbackElement.style.backgroundColor = "red";
        feedbackElement.textContent = "Resposta incorreta!";
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz finalizado! Acertos: " + correctCount + ", Erros: " + incorrectCount);
    }

    correctCountElement.textContent = correctCount;
    incorrectCountElement.textContent = incorrectCount;
}