window.addEventListener('load', () => {
  const quizData = [{
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
    },
  ];


  const quizEl = document.querySelector('.quiz');

  const questEl = document.querySelector('.quiz__quest'),
    quizInputA = document.querySelector('.a_text'),
    quizInputB = document.querySelector('.b_text'),
    quizInputC = document.querySelector('.c_text'),
    quizInputD = document.querySelector('.d_text'),
    quizAnswers = document.querySelectorAll('.quiz__input'),
    quizBtn = document.getElementById('btn');


  let score = 0;
  let currentQuiz = 0;

  function quizHandler() {
    countCorrectAnswers();
    nextQuiz();
  }

  function loadQuiz() {
    const quizCurrentData = quizData[currentQuiz];
    questEl.textContent = quizCurrentData.question;
    quizInputA.textContent = quizCurrentData.a;
    quizInputB.textContent = quizCurrentData.b;
    quizInputC.textContent = quizCurrentData.c;
    quizInputD.textContent = quizCurrentData.d;
  }

  function nextQuiz() {
    if (currentQuiz < quizData.length - 1) {
      currentQuiz++;
      quizAnswers.forEach(item => {
        item.checked = false;
      })
      loadQuiz();
    } else {
      quizEl.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2> <button class="btn" onclick="location.reload()">Reload</button>`

    }
  }

  function countCorrectAnswers() {
    const quizCurrentData = quizData[currentQuiz];
    let answer;
    quizAnswers.forEach(item => {
      if (item.checked) {
        answer = item.id;
        console.log(answer);
        console.log(item);

      }
    })
    if (answer === quizCurrentData.correct) {
      score++;
    }
  }

  loadQuiz();
  quizBtn.addEventListener('click', quizHandler);


});