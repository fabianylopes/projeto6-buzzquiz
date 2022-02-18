let specificQuestions = [];
let questionIDs = [];
let answerOptions = [];



function displayQuiz(){
    let questionIDs = objectIDquiz.questions;
    console.log(questionIDs);

   
    const question = document.querySelector(".quiz-open");
    question.innerHTML =
     `<div class="quiz-header" style="background:linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url(${objectIDquiz.image});">
            <h1>${objectIDquiz.title}</h1>
        </div>`

    for (let i = 0; i < questionIDs.length; i++) {
        question.innerHTML += `
        <div class="quiz-body"> 
            <div class="quiz-questionbox">
                <div class="quiz-questiontext" style="background-color:${questionIDs[i].color};">
                    <p>${questionIDs[i].title}</p>
                </div>`

        answerOptions =  questionIDs[i].answers;
        sortAnswers()
    
        for(let j=0; j < questionIDs[i].answers.length; j++){
        const postAnswers = document.querySelector(".quiz-open");
        postAnswers.innerHTML += `
                  <div class="answer-option">
                        <img class="answer-img"
                            src="${questionIDs[i].answers[j].image}"
                            alt="figura para resposta" />
                        <span>${questionIDs[i].answers[j].text}</span>
                </div>`
            } 
        }
}

function sortAnswers() {
    answerOptions.sort( function () {
        return 0.5 - Math.random();
    });
}