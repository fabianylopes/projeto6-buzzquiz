const ANSWERS = ["sim", "não", "Ouvi falar, mas não tinha crtz", "Sim, mas não sei onde vai ser"];
let answerbox = [];


// function createAnswerOrder() {
//     for (let i = 0; i < ANSWERS.length; i++){
//         let resposta = ANSWERS[i];
//         answerbox.push(resposta);
//     }
//     answerbox.sort(Math.random);
// }

function buildQuestionBox() {
    // createAnswerOrder()
    answerbox = ANSWERS.sort;

    const question = document.querySelector(".quiz-open");
    question.innerHTML = "";

       question.innerHTMl = `
       <div class="quiz-header">
       <p>Título do quiz</p>
   </div>
   <div class="quiz-body">
                <div class="quiz-questionbox">
                    <div class="quiz-questiontext">
                        <p>Alguém sabia que ia ter copa do mundo esse ano?</p>
                    </div>
                    <div class="quiz-answeroptions">
                        <div class="column1-answers">
                            <div class="answer-option">
                                <img class="answer-img" src="https://rollingstone.uol.com.br/media/_versions/bob-esponja-lgbtq-reprod_widelg.jpg" alt="figura para resposta" />
                                <span>${ANSWERS.sort[i]}</span>
                            </div>
                            <div class="answer-option">
                                <img class="answer-img" src="https://rollingstone.uol.com.br/media/_versions/bob-esponja-lgbtq-reprod_widelg.jpg" alt="figura para resposta" />
                                <span>${answerbox[i]}</span>
                            </div>
                        </div>
                        <div class="column2-answers">
                            <div class="answer-option">
                                <img class="answer-img" src="https://rollingstone.uol.com.br/media/_versions/bob-esponja-lgbtq-reprod_widelg.jpg" alt="figura para resposta" />
                                <span>${answerbox[i]}</span>
                            </div>
                            <div class="answer-option">
                                <img class="answer-img" src="https://rollingstone.uol.com.br/media/_versions/bob-esponja-lgbtq-reprod_widelg.jpg" alt="figura para resposta" />
                                <span>${answerbox[i]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
}

buildQuestionBox()