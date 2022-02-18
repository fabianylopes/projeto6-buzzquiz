const BUZZQUIZZ_API = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";

let objectYourQuiz = {};


function YourQuizInfo() {
    let infoTela3 = document.querySelector('.your-quiz');
    infoTela3.classList.remove('.hidden')

    let yourQuizzTittle = document.querySelector('#your-quiz-tittle').value;
 
    let yourQuizzURL = document.querySelector('#your-quiz-URL').value;

    let yourQuizzQuestions = document.querySelector('#your-quiz-questions').value;

    let yourQuizzLevels = document.querySelector('#your-quiz-levels').value;


    objectYourQuiz = {
        title: yourQuizzTittle,
        image: yourQuizzURL,
        questions: [
            {
                title: "Título da pergunta 1",
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
        levels: [
            {
                title: "Título do nível 1",
                image: "https://http.cat/411.jpg",
                text: "Descrição do nível 1",
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


    if (yourQuizzTittle.length < 20 || yourQuizzTittle.length > 65) {
        alert("o título do seu quiz deve ter entre 20 e 65 carateres!!");
       // window.location.reload()
        document.querySelector("#your-quiz-tittle").value = ""

    }
    if (Number(yourQuizzQuestions) < 3) {
        alert("você deve inserir no mínimo 3 perguntas!!");
       // window.location.reload()
        document.querySelector("#your-quiz-questions").value = ""
    }
    if (Number(yourQuizzLevels) < 2) {
        alert("o quiz deve ter no mínimo 2 levels!!");
      //  window.location.reload()
        document.querySelector("#your-quiz-levels").value = ""
    }
    if (yourQuizzURL.includes('http') === false) {
        alert("a imagem deve ter um formato URL!!");
       // window.location.reload()
        document.querySelector("#your-quiz-URL").value = ""
    }

    const promise = axios.post(BUZZQUIZZ_API, objectYourQuiz)

    promise.then(function(resposta){
    console.log(resposta.data);
    console.log("vamos la, seguindo em frente");
    })
    promise.catch(createQuizError);



}




function yourQuizzLevel(resposta) {

   
    let levelTela3 = document.querySelector('.your-quiz-levels');
    levelTela3.classList.remove('hidden');
    

    let yourQuizzLevelTittle = document.querySelector('#your-quiz-level-tittle').value;
    
    let yourQuizzLevelPercent = document.querySelector('#your-quiz-level-percent').value;
   
    let yourQuizzLevelURL = document.querySelector('#your-quiz-level-URL').value;

    let yourQuizzLevelText = document.querySelector('#your-quiz-level-text').value;
    
    if (yourQuizzLevelTittle.length < 10) {
        alert("o título do nível do seu quiz deve ter no mínimo 10 caracteres!!");
        window.location.reload()

    }
    // if (Number(yourQuizzLevelPercent) < 3) {
    //    alert("você deve inserir no mínimo 3 perguntas!!");
    //    window.location.reload()
    //}

 if (yourQuizzLevelURL.includes('http') === false) {
        alert("a imagem deve ter um formato URL!!");
        window.location.reload()
    }

    if  (yourQuizzLevelText.length < 30) {
        alert("a descrição do quiz deve ter no mínimo 30 caracteres!!");
        window.location.reload()
    }
   

}



function createQuizError(error) {

}
