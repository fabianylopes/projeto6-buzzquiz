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
}

function comparador() {
    return Math.random() - 0.5;
}

function verifyAnswer(div) {
    divParent = div.parentElement;
 
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
            if (righText === "false") {
                selectAllOptions[i].querySelector("span").classList.add("wrongColor");
            } else {
                selectAllOptions[i].querySelector("span").classList.add("rightColor");
            }
        }
    }

    divQuestion = divParent.parentElement;
    console.log(divQuestion);
    let questId = divQuestion.getAttribute("id");
    let next = parseInt(questId) + 1;
    
    setTimeout(() => {
        document.getElementById(`${next}`).scrollIntoView({block: "center", behavior: "smooth"});
    }, 2000)
}
