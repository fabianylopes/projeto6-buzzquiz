
console.log(objectYourQuiz);

//const quizzUsersKey = "quizzes";

function usersQuizzes(){

    const quizzes = document.querySelector('.quizzes-created');
    quizzes.innerHTML = '';

    if(objectYourQuiz.length === 0){
        const userQuizz = document.querySelector('.create-quizz');
        userQuizz.classList.remove('hidden');
    }else{
        const userQuizz = document.querySelector('.created-quizzes');
        userQuizz.classList.remove('hidden');

        for(let i = 0; i < objectYourQuiz.length; i++){
            quizzes.innerHTML += `
            <div class="quizzes-list">
                <img src="${objectYourQuiz[i].image}">
                <div class="overlay"></div>
                <div class="title">${objectYourQuiz[i].title}</div>
            </div>
            `
        }
    }
}

//usersQuizzes();
getQuizzes();

// localStorage.setItem("nome", "João");
// const pessoa = localStorage.getItem("nome", "João");
// console.log(pessoa);

function getQuizzes(){
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promise.then(quizzesList);
}

function quizzesList(response){
    const quizzes = document.querySelector('.all-quizzes');
    quizzes.innerHTML = '';

    let info = response.data;

    for(let i = 0; i < info.length; i++){
        quizzes.innerHTML += `
        <div class="quizzes-list" onclick="getSpecificQuizz(${info[i].id})">
            <img src="${info[i].image}">
            <div class="overlay"></div>
            <div class="title">${info[i].title}</div>
        </div>
        `
    }
}

function getSpecificQuizz(id){
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`);
    promise.then(showQuizz);
}



function showQuizz(response){   
    changeSreens();
    
    let info = response.data;
    
    const header = document.querySelector('.quiz-open');
    header.innerHTML = `
    

    <div class="quiz-header">
        <p>${info.title}</p>
    </div>
    <div class="quiz-body">
        <div class="quiz-questionbox">

            for
            <div class="quiz-questiontext">
                <p>${info.questions.title}</p>
            </div>
            <div class="quiz-answeroptions">
                <div class="column1-answers">
                    <div class="answer-option">
                        <img class="answer-img" src="https://http.cat/411.jpg" alt="figura para resposta" />
                        <span>Sim</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    `

            



    let question = info.questions;

    // const questionTitle = document.querySelector('.quiz-questionbox');
    // questionTitle.innerHTML = '';
    
    // for(let i = 0; i < question.length; i++){
    //     questionTitle.innerHTML += `
    //     <div class="quiz-questiontext">
    //         <p>${question[i].title}</p>
    //     </div>
    //     `
    // }



    console.log(info);

}

function changeSreens(){
    const screenTwo = document.querySelector('.quiz-open');
    screenTwo.classList.remove('hidden');

    const screenOne = document.querySelector('.screen-one');
    screenOne.classList.add('hidden');
}

function createQuizz(){
    const screenThree = document.querySelector('.your-quiz-basic-info');
    screenThree.classList.remove('hidden');

    const screenOne = document.querySelector('.screen-one');
    screenOne.classList.add('hidden');
}
