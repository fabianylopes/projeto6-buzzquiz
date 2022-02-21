let questionIDs = [];
let answers = [];
let questionsQnt = 0;
let acertos = 0;
let feito = 0;


function displayQuiz() {
    questionIDs = objectIDquiz.questions;
    let questionBodyHTML = "";

    questionIDs.forEach(questionId => {

        answers = questionId.answers.sort(comparador);
        let answersHTML = "";
        answers.forEach(answer => {
            answersHTML += `
          <div class="answer-option" data-boolean="${answer.isCorrectAnswer}" onclick="verifyAnswer(this)">
            <img class="answer-img"
                src="${answer.image}"
                alt="figura para resposta" />
            <span>${answer.text}</span>
          </div>
        `
        })

        let quizzHTML = `
        <div class="quiz-questionbox" id="${questionIDs.indexOf(questionId)}">
            <div class="quiz-questiontext" style="background-color:${questionId.color};">
                <p>${questionId.title}</p>
            </div>
            <div class="quiz-answeroptions">
            ${answersHTML}
            </div>
        </div>
      `
        questionBodyHTML += quizzHTML;
    });
    const quizz = document.querySelector(".quiz-open");
    quizz.innerHTML =
        `<div class="quiz-header" style="background:linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url(${objectIDquiz.image});">
          <h1>${objectIDquiz.title}</h1>
        </div>
        <div class="quiz-body">
          ${questionBodyHTML}
        </div>
      `
    autoScroll()
}

function autoScroll() {
    const startQuiz = document.querySelector(".quiz-header");
    startQuiz.scrollIntoView();
}

function comparador() {
    return Math.random() - 0.5;
}

function verifyAnswer(div) {
    feito++;
    questionsQnt = questionIDs.length;

    divParent = div.parentElement;
    divQuestion = divParent.parentElement;
    let questId = divQuestion.getAttribute("id");
    let next = parseInt(questId) + 1;

    const selectAllOptions = divParent.querySelectorAll(".answer-option");

    for (i = 0; i < selectAllOptions.length; i++) {
        const righText = selectAllOptions[i].getAttribute("data-boolean");
        selectAllOptions[i].removeAttribute("onclick");

        if (selectAllOptions[i] != div) {
            selectAllOptions[i].classList.add('opacity');
            if (righText === "true") {
                selectAllOptions[i].querySelector("span").classList.add("rightColor");
            } else {
                selectAllOptions[i].querySelector("span").classList.add("wrongColor");
            }
        }

        if (selectAllOptions[i] == div) {
            if (righText === "true") {
                selectAllOptions[i].querySelector("span").classList.add("rightColor");
                acertos++;
            } else {
                selectAllOptions[i].querySelector("span").classList.add("wrongColor");
            }
        }

        if (feito === questionsQnt) {
            getResult();
        } else {
            setTimeout(() => {
                document.getElementById(`${next}`).scrollIntoView({ block: "center", behavior: "smooth" });
            }, 2000)
        }
    }
}

function getResult() {
    const result = Math.floor(acertos / questionsQnt * 100);

    let level = null;
    allLevels = objectIDquiz.levels;

    for (let i = 0; i < allLevels.length; i++) {
        if (allLevels[i].minValue <= result) {
            if (level == null) {
                level = i;
            }
            if (allLevels[i].minValue > allLevels[level].minValue) {
                level = i;
            }
        }
    }
    setTimeout(showResult, 2000, level, result);
}

function showResult(i, pontuacao) {
    let lastPart = document.querySelector(".end-quiz");
    lastPart.classList.remove("hidden");
    let showResult = document.querySelector(".result-box");
    showResult.innerHTML = `
    <div class="result-box">
        <div class="points-result">
            <h1>${pontuacao}% de acerto: ${allLevels[i].title}</h1>
        </div>
        <div class="more-info">
            <img src="${allLevels[i].image}" alt="Figura - Resultado do Quiz" />
            <span class="message">${allLevels[i].text}</span>
        </div>
    </div>
    `
    lastPart.scrollIntoView({ block: "center", behavior: "smooth" });
}

function reloadQuiz() {
    let lastPart = document.querySelector(".end-quiz");
    lastPart.classList.add("hidden");
    acertos = 0;
    feito = 0;
    questionsQnt = 0;
    displayQuiz(quiz);
}

function goHome() {
    const screenTwo = document.querySelector('.quiz-open');
    screenTwo.classList.add('hidden');

    let lastPart = document.querySelector(".end-quiz");
    lastPart.classList.add("hidden");

    const screenOne = document.querySelector('.screen-one');
    screenOne.classList.remove('hidden');

    const startHome = document.querySelector(".created-quizzes");
    startHome.scrollIntoView();
}