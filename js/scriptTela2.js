let questionIDs = [];
let answerOptions = [];

function displayQuiz() {
    let questionIDs = objectIDquiz.questions;
    let questionBodyHTML = "";
    // itera para pergunta que faz parte do quiz
    questionIDs.forEach(questionId => {
      // construção das respostas
      const answers = questionId.answers.sort(comparador); // embaralha tudo
      let answersHTML = "";
      answers.forEach(answer => {
        answersHTML += `
          <div class="answer-option">
            <img class="answer-img"
                src="${answer.image}"
                alt="figura para resposta" />
            <span>${answer.text}</span>
          </div>
        `
      })
      // construção da pergunta (usando as resposta)
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

// -----------Código que deixava as respostas fora da div .quiz-questionbox
// function displayQuiz(){
//     let questionIDs = objectIDquiz.questions;
//     console.log(questionIDs);

   
//     const question = document.querySelector(".quiz-open");
//     question.innerHTML =
//      `<div class="quiz-header" style="background:linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url(${objectIDquiz.image});">
//             <h1>${objectIDquiz.title}</h1>
//         </div>`

//     for (let i = 0; i < questionIDs.length; i++) {
//         question.innerHTML += `
//         <div class="quiz-body"> 
//             <div class="quiz-questionbox">
//                 <div class="quiz-questiontext" style="background-color:${questionIDs[i].color};">
//                     <p>${questionIDs[i].title}</p>
//                 </div>`

//         answerOptions =  questionIDs[i].answers;
//         sortAnswers()
    
//         for(let j=0; j < answerOptions.length; j++){
//         const postAnswers = document.querySelector(".quiz-open");
//         postAnswers.innerHTML += `
//                   <div class="answer-option">
//                         <img class="answer-img"
//                             src="${answerOptions[j].image}"
//                             alt="figura para resposta" />
//                         <span>${answerOptions[j].text}</span>
//                 </div>
//                 `
//             } 
//         }
// }

// function sortAnswers() {
//     answerOptions.sort( function () {
//         return 0.5 - Math.random();
//     });
// }