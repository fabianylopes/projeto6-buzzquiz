const BUZZQUIZZ_API = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";


let objectYourQuiz = {};


// informações básicas do quiz
let yourQuizzTittle = [];
let yourQuizzURL = []
let yourQuizzQuestions;
let yourQuizzLevels;
let i;

let Tela3_fase1 = document.querySelector(".your-quiz")

function removeHidden(screen) {
    screen.classList.remove('hidden');
}
function addHidden(screen) {
    screen.classList.add('hidden');
}


function YourQuizInfo() {
    yourQuizzTittle = document.querySelector('#your-quiz-tittle').value;
    yourQuizzURL = document.querySelector('#your-quiz-URL').value;
    yourQuizzQuestions = document.querySelector('#your-quiz-questions').value;
    yourQuizzLevels = document.querySelector('#your-quiz-levels').value;


    if (yourQuizzTittle.length < 20 || yourQuizzTittle.length > 65) {
        alert("o título do seu quiz deve ter entre 20 e 65 carateres!!");
        yourQuizzTittle.value = ""
        return
    }
    if (yourQuizzURL.includes('https') === false) {
        alert("a imagem deve ter um formato URL!!");
        yourQuizzURL.value = ""
        return
    }
    if (Number(yourQuizzQuestions) < 3) {
        alert("você deve inserir no mínimo 3 perguntas!!");
        yourQuizzQuestions.value = ""
        return
    }
    if (Number(yourQuizzLevels) < 2) {
        alert("o quiz deve ter no mínimo 2 levels!!");
        yourQuizzLevels.value = ""
        return
    }
    objectYourQuiz = {
        title: yourQuizzTittle,
        image: yourQuizzURL,

    }
 //console.log(objectYourQuiz)

    addHidden(Tela3_fase1)
    removeHidden(Tela3_fase2)
}

// informações sobre as perguntas do quiz

let Tela3_fase2 = document.querySelector(".your-quiz-question");

let yourQuizzQuestionTittle 
let yourQuizzQuestionColor = []
let yourQuizzQuestionRigth = []
let yourQuizzQuestionURL = []
let yourQuizzQuestionWrong1 = []
let yourQuizzQuestionWrong1URL = []
let yourQuizzQuestionWrong2 = []
let yourQuizzQuestionWrong2URL = []
let yourQuizzQuestionWrong3 = []
let yourQuizzQuestionWrong3URL = []



function yourQuizzQuestion() {
    addHidden(Tela3_fase1);
    removeHidden(Tela3_fase2);

    yourQuizzQuestionTittle = document.querySelector('#your-quiz-question-tittle').value;
    yourQuizzQuestionURL = document.querySelector('#your-quiz-question-text').value;
    yourQuizzQuestionRigth = document.querySelector('#your-quiz-question-right').value;
    yourQuizzQuestionColor = document.querySelector('#your-quiz-question-color').value;
    yourQuizzQuestionWrong1 = document.querySelector('#your-quiz-question-1').value;
    yourQuizzQuestionWrong1URL = document.querySelector('#your-quiz-question-URL-1').value;
    yourQuizzQuestionWrong2 = document.querySelector('#your-quiz-question-2').value;
    yourQuizzQuestionWrong2URL = document.querySelector('#your-quiz-question-URL-2').value;
    yourQuizzQuestionWrong3 = document.querySelector('#your-quiz-question-3').value;
    yourQuizzQuestionWrong3URL = document.querySelector('#your-quiz-question-URL-3').value;


    const hexadecimalColor = ['a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F',]
    const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']  //verificar numeros

    
    if (yourQuizzQuestionTittle.length < 20) {
        alert("o título da pergunta do seu quiz deve ter no minimo 20 carateres!!");
        yourQuizzQuestionTittle.value = ""
        return
    }
    if (yourQuizzQuestionTittle === ""){
        alert("campo vazio, dê um nome à sua pergunta")
    }
    if ((yourQuizzQuestionColor.includes('#') === false) || (yourQuizzQuestionColor.length == !7)) {
        alert("informe uma cor válida!!");
        yourQuizzQuestionColor.value = ""
        return
    }

    
  /*   if ((yourQuizzQuestionURL.includes('https:') === false) || (yourQuizzQuestionWrong1URL.includes('https:') === false)
        (yourQuizzQuestionWrong2URL.includes('https:') === false)(yourQuizzQuestionWrong3URL.includes('https:') === false)) {
        alert("a imagem deve ter um formato URL!!");
        yourQuizzQuestionURL.value = ""
        yourQuizzQuestionWrong1.value = ""
        yourQuizzQuestionWrong2URL.value = ""
        yourQuizzQuestionWrong3URL.value = ""
        return
    }  */

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
                        text: yourQuizzQuestionWrong1,
                        image: yourQuizzQuestionWrong1URL,
                        isCorrectAnswer: false
                    },
                    {
                        text: yourQuizzQuestionWrong2,
                        image: yourQuizzQuestionWrong2URL,
                        isCorrectAnswer: false
                    },
                    {
                        text: yourQuizzQuestionWrong3,
                        image: yourQuizzQuestionWrong3URL,
                        isCorrectAnswer: false
                    }
                ]
            }
        ]
    }

 console.log(objectYourQuiz)
 yourQuizzLevel()

}

let tela3_perguntas = document.querySelector('#question2')
let icon = document.querySelector("#question-icon");


function questions() {
    addHidden(icon);
    const question2 = document.querySelector("#questionHidden")
    addHidden(question2)

    for ( i = 1; i < yourQuizzQuestions; i++) {
        console.log(yourQuizzQuestions);


        tela3_perguntas.innerHTML += `
       <span>Pergunta ${[i + 1]}</span>
  
       <input type="text" id="your-quiz-question-tittle" placeholder="Texto da pergunta" >
       <input type="text" id="your-quiz-question-color" placeholder="Cor de fundo da pergunta">
       <span>Resposta correta</span>
 
       <input type="text" id="your-quiz-question-right" placeholder="Resposta correta">
       <input type="text" id="your-quiz-question-text" placeholder="URL da imagem">
    
       <span>Respostas incorretas</span>

       <input type="text" id="your-quiz-question-1" placeholder="Resposta incorreta 1">
       <input type="text" id="your-quiz-question-URL-1" placeholder="URL da imagem 1">
   
   
       <input type="text" id="your-quiz-question-2" placeholder="Resposta incorreta 2">
       <input type="text" id="your-quiz-question-URL-2" placeholder="URL da imagem 2">
  

    
       <input type="text" id="your-quiz-question-3" placeholder="Resposta incorreta 3">
       <input type="text" id="your-quiz-question-URL-3" placeholder="URL da imagem 3"> 
 
     `
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
                            text: yourQuizzQuestionWrong1,
                            image: yourQuizzQuestionWrong1URL,
                            isCorrectAnswer: false
                        },
                        {
                            text: yourQuizzQuestionWrong2,
                            image: yourQuizzQuestionWrong2URL,
                            isCorrectAnswer: false
                        },
                        {
                            text: yourQuizzQuestionWrong3,
                            image: yourQuizzQuestionWrong3URL,
                            isCorrectAnswer: false
                        }
                    ]
                }
            ]
        }
   
    } 

    tela3_perguntas.innerHTML += ` <button  onclick="yourQuizzQuestion()">Prosseguir para criar níveis</button> `
}

//informações sobre o level do quiz

let yourQuizzLevelTittle = []
let yourQuizzLevelPercent = []
let yourQuizzLevelURL = []
let yourQuizzLevelText = []

let Tela3_fase3 = document.querySelector('.your-quiz-levels');

function yourQuizzLevel() {

    addHidden(Tela3_fase2);
    removeHidden(Tela3_fase3)


    yourQuizzLevelTittle = document.querySelector('#your-quiz-level-tittle').value;
    yourQuizzLevelPercent = document.querySelector('#your-quiz-level-percent').value;
    yourQuizzLevelURL = document.querySelector('#your-quiz-level-URL').value;
    yourQuizzLevelText = document.querySelector('#your-quiz-level-text').value;


   if (yourQuizzLevelTittle.length < 10) {
        alert("o título do nível do seu quiz deve ter no mínimo 10 caracteres!!");
        yourQuizzLevelTittle.value = ""
        return

    }
    if ((Number(yourQuizzLevelPercent)<0)||(Number(yourQuizzLevelPercent)>100)){
          alert("Porcentagem inválida");
        yourQuizzLevelPercent.value = ""
        return
    }

    if (yourQuizzLevelURL.includes('http') === false) {
        alert("a imagem deve ter um formato URL!!");
        yourQuizzLevelURL.value = ""
        return
    }

    if (yourQuizzLevelText.length < 30) {
        alert("a descrição do quiz deve ter no mínimo 30 caracteres!!");
        yourQuizzLevelText.value = ""
        return
    }
    objectYourQuiz = {
        levels: [
            {
                title: yourQuizzLevelTittle,
                image: yourQuizzLevelURL,
                text: yourQuizzLevelText,
                minValue: 0
            }
        ]


    }



}

function quizError(error) {
    console.log(error.response)
    console.log("deu chabu")

}

let tela3_levels = document.querySelector("#level2")

function Level(){
    addHidden(icon);
    const levelHidden = document.querySelector("#levelHidden")
    addHidden(levelHidden)

    for( i=1; i<yourQuizzLevels; i++){
    
    tela3_levels.innerHTML+= `
    <span>Nível ${[i+1]} </span>
    <input type="text" id="your-quiz-level-tittle" placeholder="Título do nível">
    <input type="text" id="your-quiz-level-percent" placeholder="% de acerto mínima">
    <input type="text" id="your-quiz-level-URL" placeholder="URL da imagem do nível">
    <input type="text" id="your-quiz-level-text" placeholder="Descrição do nível">
    
    `

    objectYourQuiz = {
        levels: [
            {
                title: yourQuizzLevelTittle,
                image: yourQuizzLevelURL,
                text: yourQuizzLevelText,
                minValue: 50
            }

        ]
    }
    objectYourQuiz = {
        title: yourQuizzTittle,
        image: yourQuizzURL,
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
                        text: yourQuizzQuestionWrong1,
                        image: yourQuizzQuestionWrong1URL,
                        isCorrectAnswer: false
                    },
                    {
                        text: yourQuizzQuestionWrong2,
                        image: yourQuizzQuestionWrong2URL,
                        isCorrectAnswer: false
                    },
                    {
                        text: yourQuizzQuestionWrong3,
                        image: yourQuizzQuestionWrong3URL,
                        isCorrectAnswer: false
                    }
                ]
            }
        ],
        levels: [
            {
                title: yourQuizzLevelTittle,
                image: yourQuizzLevelURL,
                text: yourQuizzLevelText,
                minValue: 50
            },
             {
                    title: yourQuizzLevelTittle,
                    image: yourQuizzLevelURL,
                    text: yourQuizzLevelText,
                    minValue:0
             }
        ]
        
    
    }
  
}

  let promise = axios.post(BUZZQUIZZ_API, objectYourQuiz)
     
    promise.then(function(resposta){
    console.log(resposta.data);
    console.log("#vaidarcerto");
    })
    promise.catch(quizError);
    
tela3_levels.innerHTML+= `<button onclick="yourQuizzLevel()">Finalizar Quizz</button>
`
}
