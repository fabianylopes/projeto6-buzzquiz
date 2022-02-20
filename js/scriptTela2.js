let questionIDs = [];
let answers = [];
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
          <div class="answer-option" id="${answers.indexOf(answer)}" data-boolean="${answer.isCorrectAnswer}" onclick="verifyAnswer(this)">
            <img class="answer-img"
                src="${answer.image}"
                alt="figura para resposta" />
            <span>${answer.text}</span>
          </div>
        `
        })

        let quizzHTML = `
        <div class="quiz-questionbox">
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
}

function comparador() {
    return Math.random() - 0.5;
}

function verifyAnswer(div) {
    let righText = div.getAttribute("data-boolean");
    let id = div.getAttribute("id");

    console.log(id);

    for (let i = 0; i < answers.length; i++) {
        const object = document.getElementByID(i);
        if (i != id) {
            object.classList.add("opacidade");
            if (righText === "false") {
                div.querySelector("span").classList.add("wrongColor");
            } else {
                div.querySelector("span").classList.add("rightColor");
            }
        }
        if (i == id) {
            if (righText === "false") {
                div.querySelector("span").classList.add("wrongColor");
            } else {
                div.querySelector("span").classList.add("rightColor");
            }
        }
    }
}
