const BUZZQUIZZ_API = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";


let objectYourQuiz = {};
function createQuizz(){
// informações básicas do quiz
let yourQuizzTittle;
let yourQuizzURL 
let yourQuizzQuestions
let yourQuizzLevels

function removeHidden(screen){
    screen.classList.remove('hidden');
}
function addHidden(screen){
    screen.classList.add('hidden');
}

let Tela3_fase1 = document.querySelector('.your-quiz');
removeHidden(Tela3_fase1);

function YourQuizInfo() {
     yourQuizzTittle = document.querySelector('#your-quiz-tittle').value;
     yourQuizzURL = document.querySelector('#your-quiz-URL').value;
     yourQuizzQuestions = document.querySelector('#your-quiz-questions').value;
     yourQuizzLevels = document.querySelector('#your-quiz-levels').value;
    
    
    objectYourQuiz = {
        title: yourQuizzTittle,
        image: yourQuizzURL,

    }
   // console.log(objectYourQuiz);


    if (yourQuizzTittle.length < 20 || yourQuizzTittle.length > 65) {
        alert("o título do seu quiz deve ter entre 20 e 65 carateres!!");
        document.querySelector("#your-quiz-tittle").value = ""
     return 
    }
    if (Number(yourQuizzQuestions) < 3) {
        alert("você deve inserir no mínimo 3 perguntas!!");
        document.querySelector("#your-quiz-questions").value = ""
     return 
    }
    if (Number(yourQuizzLevels) < 2) {
        alert("o quiz deve ter no mínimo 2 levels!!");
        document.querySelector("#your-quiz-levels").value = ""
       return
    }
    if (yourQuizzURL.includes('http') === false) {
        alert("a imagem deve ter um formato URL!!");
        document.querySelector("#your-quiz-URL").value = ""
       return
    }

    addHidden(Tela3_fase1)
    removeHidden(Tela3_fase2)
    // const promise = axios.post(BUZZQUIZZ_API, objectYourQuiz)

    // promise.then(function(resposta){
    // console.log(resposta.data);
    // console.log("vamos la, seguindo em frente");
    //  })
    // promise.catch(quizError);  //função que só mostra o erro no console

  // yourQuizzQuestion();
}

// informações sobre as perguntas do quiz

let Tela3_fase2 = document.querySelector(".your-quiz-question");

let yourQuizzQuestionTittle
let yourQuizzQuestionColor
let yourQuizzQuestionRigth 
let yourQuizzQuestionURL
let yourQuizzQuestionWrong1 
let yourQuizzQuestionWrong1URL
let yourQuizzQuestionWrong2 
let yourQuizzQuestionWrong2URL
let yourQuizzQuestionWrong3 
let yourQuizzQuestionWrong3URL 



function yourQuizzQuestion(){
    addHidden(Tela3_fase1);
    removeHidden(Tela3_fase2);
    
    yourQuizzQuestionTittle= document.querySelector('#your-quiz-question-tittle').value;
    yourQuizzQuestionColor = document.querySelector('#your-quiz-question-color').value; 
    yourQuizzQuestionRigth = document.querySelector('#your-quiz-question-right').value;
    yourQuizzQuestionURL = document.querySelector('#your-quiz-question-text').value;
    yourQuizzQuestionWrong1 = document.querySelector('#your-quiz-question-1').value;
    yourQuizzQuestionWrong1URL = document.querySelector('#your-quiz-question-URL-1').value;
    yourQuizzQuestionWrong2 = document.querySelector('#your-quiz-question-2').value;
    yourQuizzQuestionWrong2URL = document.querySelector('#your-quiz-question-URL-2').value;
    yourQuizzQuestionWrong3 = document.querySelector('#your-quiz-question-3').value;
    yourQuizzQuestionWrong3URL = document.querySelector('#your-quiz-question-URL-3').value; 
    
    objectYourQuiz = {
        questions: [
            {
                title: yourQuizzQuestionTittle,
                color: yourQuizzQuestionColor,
                answers: [
                    {
                        text: yourQuizzQuestionRigth,
                        image: yourQuizzQuestionURL,
                        isCorrectAnswer: true
                    },
                    {
                        text: "Texto da resposta 2",
                        image: "https://http.cat/412.jpg",
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: "Título da pergunta 2",
                color: "#123456",
                answers: [
                    {
                        text: "Texto da resposta 1",
                        image: "https://http.cat/411.jpg",
                        isCorrectAnswer: true
                    },
                    {
                        text: "Texto da resposta 2",
                        image: "https://http.cat/412.jpg",
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: "Título da pergunta 3",
                color: "#123456",
                answers: [
                    {
                        text: "Texto da resposta 1",
                        image: "https://http.cat/411.jpg",
                        isCorrectAnswer: true
                    },
                    {
                        text: "Texto da resposta 2",
                        image: "https://http.cat/412.jpg",
                        isCorrectAnswer: false
                    }
                ]
            }
        ],

    
    }
    

    if (yourQuizzQuestionTittle.length < 20 ) {
        alert("o título do seu quiz deve ter entre 20 e 65 carateres!!");
        document.querySelector("#your-quiz-tittle").value = ""
        return
    }
    if ((yourQuizzQuestionColor.includes('#') === true) && (yourQuizzQuestionColor.length == 7))  {
        alert("você deve inserir no mínimo 3 perguntas!!");
        document.querySelector("#your-quiz-questions").value = ""
        return
    }
    if (Number(yourQuizzLevels) < 2) {
        alert("o quiz deve ter no mínimo 2 levels!!");
        document.querySelector("#your-quiz-levels").value = ""
        return
    }
    if ( (yourQuizzQuestionURL.includes('http') === false) && (yourQuizzQuestionWrong1URL.includes('http') === false) ){
        alert("a imagem deve ter um formato URL!!");
        document.querySelector("#your-quiz-URL").value = ""
        return
    }


    //const promise = axios.post(BUZZQUIZZ_API, objectYourQuiz)

 //   promise.then(function(resposta){
   // console.log(resposta.data);
  //  console.log("seguindo em frente nas questions");
   //  })
  //  promise.catch(quizError); 
   
   // yourQuizzLevel();

}



//informações sobre o level do quiz

let Tela3_fase3 = document.querySelector('.your-quiz-levels');

function yourQuizzLevel() {
    
    addHidden(Tela3_fase2);
    removeHidden(Tela3_fase3)
    

    let yourQuizzLevelTittle = document.querySelector('#your-quiz-level-tittle').value;
    
    let yourQuizzLevelPercent = document.querySelector('#your-quiz-level-percent').value;
   
    let yourQuizzLevelURL = document.querySelector('#your-quiz-level-URL').value;

    let yourQuizzLevelText = document.querySelector('#your-quiz-level-text').value;

    objectYourQuiz = {
        levels: [
            {
                title: yourQuizzLevelTittle,
                image: yourQuizzLevelURL,
                text: yourQuizzLevelText,
                minValue: 0
            },
            {
                title: "Título do nível 2",
                image: "https://http.cat/412.jpg",
                text: "Descrição do nível 2",
                minValue: 50
            }
        ]
             

    }

    console.log(objectYourQuiz)
    
    if (yourQuizzLevelTittle.length < 10) {
      alert("o título do nível do seu quiz deve ter no mínimo 10 caracteres!!");
      document.querySelector("#your-quiz-level-tittle").value = ""
      return

   }
     if (Number(yourQuizzLevelPercent) < 3) {
       alert("você deve inserir no mínimo 3 perguntas!!");
       document.querySelector("#your-quiz-level-percent").value = ""
       return
    }

 if (yourQuizzLevelURL.includes('http') === false) {
        alert("a imagem deve ter um formato URL!!");
        document.querySelector("#your-quiz-level-URL").value = ""
        return
    }

    if  (yourQuizzLevelText.length < 30) {
        alert("a descrição do quiz deve ter no mínimo 30 caracteres!!");
        document.querySelector("#your-quiz-level-text").value = ""
        return
    }
   /*  const promise = axios.post(BUZZQUIZZ_API, objectYourQuiz)

    promise.then(function(resposta){
    console.log(resposta.data);
    console.log("#vaidarcerto");
    })
    promise.catch(quizError);
    */

}


function quizError(error) {
    console.log(error.response)
    console.log("deu chabu")

}
}