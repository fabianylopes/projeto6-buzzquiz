const BUZZQUIZZ_API = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";


function YourQuizInfo() {
    let tela3 = document.querySelector('.your-quiz');
    tela3.classList.remove('hidden')
    const yourQuizzTittle = document.querySelector('#your-quiz-tittle').value;
    yourQuizzTittle.innerHTML = ` 
   <input type="text" id="your-quiz-tittle" placeholder="Título do seu quiz">
   
   `
    const yourQuizzURL = document.querySelector('#your-quiz-URL').value;
    yourQuizzURL.innerHTML = ` 
    <input type="text" id="your-quiz-URL" placeholder="URL da imagem do seu quiz"">
    
    `
    const yourQuizzQuestions = document.querySelector('#your-quiz-questions').value;
    yourQuizzQuestions.innerHTML = `
    <input type="text" id="your-quiz-questions" placeholder="Quantidade de perguntas do quizz">
  `;
    const yourQuizzLevels = document.querySelector('#your-quiz-levels').value;
    yourQuizzLevels.innerHTML = `
    <input type="text" id="your-quiz-levels" placeholder="Quantidade de níveis do quiz">
  `;
    if (yourQuizzTittle.length < 20 || yourQuizzTittle.length > 65) {
        alert("o título do seu quiz deve ter entre 20 e 65 carateres!!");

    }
    if (Number(yourQuizzQuestions) < 3) {
        alert("você deve inserir no mínimo 3 perguntas!!");

    }
    if (Number(yourQuizzLevels) < 2) {
        alert("o quiz deve ter no mínimo 2 levels!!");

    }
    if (yourQuizzURL.includes('http')===false) {
        alert("a imagem deve ter um formato URL!!");

    }    

    

    let objectYourQuiz = {
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

    const promise = axios.post(BUZZQUIZZ_API, objectYourQuiz)

    promise.then(createQuiz);
    promise.catch(createQuizError);

}

YourQuizInfo();

function createQuiz(resposta) {
    console.log(resposta.data);
    console.log("vamos la, seguindo em frente");

}


function createQuizError(error) {

}