const questions = [
    {
      question: "Qual é a capital do Brasil?",
      options: ["São Paulo", "Rio de Janeiro", "Brasília"],
      correctAnswer: 3
    },
    {
      question: "Qual é o maior planeta do sistema solar?",
      options: ["Júpiter", "Saturno", "Terra"],
      correctAnswer: 1
    },
    // Adicione mais perguntas aqui
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
  }
  
  loadQuestion();
  